#!/usr/bin/env python3
"""
netPlus — study guide parser.

Converts David's per-question study guides (Google Docs markdown export) into
structured app content. Ground rule (D-16/D-18): his prose is reproduced
VERBATIM. This script only changes markup, never wording:

  - undoes Google Docs backslash escaping   \)  ->  )
  - markdown -> HTML (lists, tables, bold, italic)
  - preserves embedded equation/arrow images as deduped data URIs
  - preserves ASCII-art diagrams inside <pre>

Output: netplus_guides_module1.js
"""

import re, json, base64, hashlib, os, sys

SRC = "/mnt/user-data/uploads"
FILES = [
    ("1.1.8",  "118",  "CompTIA_Network__Module_1_1_8_Complete_Study_Guide.md"),
    ("1.2.9",  "129",  "CompTIA_Network__Module_1_2_9_Complete_Study_Guide.md"),
    ("1.3.11", "1311", "CompTIA_Network__Module_1_3_11_Complete_Study_Guide.md"),
    ("1.4.11", "1411", "CompTIA_Network__Module_1_4_11_Complete_Study_Guide.md"),
]

# Google Docs escapes every one of these with a backslash on export.
ESCAPED = r'\\([\\`*_{}\[\]()#+\-.!>~<=&|$@%^&:;"\'/?,])'

# ---------------------------------------------------------------- images

IMAGES = {}          # sha -> data uri
IMG_ALIAS = {}       # "1311:image5" -> sha
IMG_CLASS = {}       # sha -> "geq" (inline equation/glyph) | "gfig" (block figure)

# Anything wider than this is a full-width figure, not something that can sit
# on a text baseline. Measured at parse time -- naturalWidth is still 0 in the
# browser at the moment we hydrate, so the class cannot be decided there.
FIG_WIDTH = 300


def png_size(raw):
    """Width/height straight from the PNG IHDR chunk."""
    return (int.from_bytes(raw[16:20], "big"), int.from_bytes(raw[20:24], "big"))


def harvest_images(text, tag):
    """Pull [imageN]: <data:...> definitions out of the body, dedupe by bytes."""
    defs = {}

    def take(m):
        name, uri = m.group(1), m.group(2)
        raw = base64.b64decode(uri.split("base64,", 1)[1])
        sha = hashlib.sha1(raw).hexdigest()[:12]
        w, h = png_size(raw)
        IMAGES[sha] = uri
        IMG_CLASS[sha] = "gfig" if w > FIG_WIDTH else "geq"
        IMG_ALIAS[f"{tag}:{name}"] = sha
        defs[name] = sha
        return ""

    text = re.sub(r'^\[(image\d+)\]: <(data:image/[^>]+)>\s*$', take, text, flags=re.M)
    return text, defs


# ---------------------------------------------------------------- inline

def inline(s, imgdefs):
    """Inline markdown -> HTML. Order matters: images, then bold, then italic."""
    # images first so their brackets never reach the emphasis passes
    def img(m):
        sha = imgdefs.get(m.group(1))
        if not sha:
            sys.stderr.write(f"  ! unresolved image ref {m.group(1)}\n")
            return ""
        return f'<img class="{IMG_CLASS[sha]}" data-img="{sha}" alt="">'
    s = re.sub(r'!\[\]\[(image\d+)\]', img, s)

    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    # the <img> we just inserted got escaped; put it back
    s = re.sub(r'&lt;img class="(g\w+)" data-img="([0-9a-f]+)" alt=""&gt;',
               r'<img class="\1" data-img="\2" alt="">', s)

    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', s)
    s = re.sub(ESCAPED, r'\1', s)
    return s.strip()


# ---------------------------------------------------------------- blocks

def is_art(block):
    return any(re.match(r'^\s*\\?\+[-=+]{3,}', ln) for ln in block)


def is_table(block):
    return (len(block) >= 2
            and block[0].lstrip().startswith("|")
            and re.match(r'^\s*\|[\s:|-]+\|\s*$', block[1]))


def bullet_depth(ln):
    """Returns (depth, kind, text). kind is 'ul' or 'ol'. Google Docs
    indents 2 spaces per nesting level."""
    m = re.match(r'^(\s*)\*\s+(.*)$', ln)
    if m:
        return len(m.group(1)) // 2, "ul", m.group(2)
    m = re.match(r'^(\s*)\d+\.\s+(.*)$', ln)
    if m:
        return len(m.group(1)) // 2, "ol", m.group(2)
    return None, None, None


def render_list(block, imgdefs):
    """Nested bullets and numbered lists, mixed at any depth."""
    out, stack = [], []   # stack holds the tag at each open level
    for ln in block:
        d, kind, body = bullet_depth(ln)
        if d is None:
            # continuation line of the previous item
            if out:
                out[-1] = out[-1][:-5] + " " + inline(ln.strip(), imgdefs) + "</li>"
            continue
        while len(stack) > d + 1:
            out.append(f"</{stack.pop()}>")
        # same depth but the list kind changed -> close and reopen
        if len(stack) == d + 1 and stack[-1] != kind:
            out.append(f"</{stack.pop()}>")
        while len(stack) < d + 1:
            out.append(f"<{kind}>")
            stack.append(kind)
        out.append(f"<li>{inline(body, imgdefs)}</li>")
    while stack:
        out.append(f"</{stack.pop()}>")
    return "".join(out)


def render_table(block, imgdefs):
    rows = [[c.strip() for c in ln.strip().strip("|").split("|")] for ln in block]
    head, body = rows[0], rows[2:]
    h = "".join(f"<th>{inline(c, imgdefs)}</th>" for c in head)
    b = "".join("<tr>" + "".join(f"<td>{inline(c, imgdefs)}</td>" for c in r) + "</tr>"
                for r in body)
    return f"<table><thead><tr>{h}</tr></thead><tbody>{b}</tbody></table>"


def render_art(block, imgdefs):
    """ASCII diagram. Whitespace preserved, but images/bold still resolved --
    a diagram is sometimes preceded on the same line by a bold arrow glyph."""
    txt = "\n".join(block)
    txt = re.sub(ESCAPED, r'\1', txt)
    txt = txt.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    def img(m):
        sha = imgdefs.get(m.group(1))
        return f'<img class="{IMG_CLASS[sha]}" data-img="{sha}" alt="">' if sha else ""
    txt = re.sub(r'!\[\]\[(image\d+)\]', img, txt)
    txt = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', txt)
    return f"<pre>{txt}</pre>"


def to_html(text, imgdefs):
    """Body markdown -> HTML, block by block."""
    blocks, cur = [], []
    for ln in text.split("\n"):
        if ln.strip() == "":
            if cur:
                blocks.append(cur)
                cur = []
        else:
            cur.append(ln.rstrip())
    if cur:
        blocks.append(cur)

    out = []
    for b in blocks:
        if is_art(b):
            out.append(render_art(b, imgdefs))
        elif is_table(b):
            out.append(render_table(b, imgdefs))
        elif bullet_depth(b[0])[0] is not None:
            out.append(render_list(b, imgdefs))
        else:
            out.append("<p>" + inline(" ".join(b), imgdefs) + "</p>")
    return "".join(out)


# ---------------------------------------------------------------- options

def parse_options(html):
    """Pull the A)/B)/C)... option list out of section 1."""
    opts = []
    for m in re.finditer(r'<li><strong>([A-H])\)</strong>\s*(.*?)</li>', html):
        opts.append({"k": m.group(1), "t": m.group(2).strip()})
    return opts


def parse_stem(html):
    m = re.match(r'<p>(.*?)</p>', html, re.S)
    return m.group(1).strip() if m else ""


def parse_answer_key(html):
    """Quick Reference Answer Key -> {1: 'C) SOHO ...', ...}"""
    key = {}
    for m in re.finditer(r'<li><strong>Q(\d+):</strong>\s*(.*?)</li>', html):
        key[int(m.group(1))] = m.group(2).strip()
    return key


def strip_tags(s):
    s = re.sub(r'<img[^>]*>', ' \u2192 ', s)   # the arrow glyph reads as an arrow
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s).strip()


def parse_order(sec1_html, sec2_html):
    """Ordering question: 'Step N:' slots plus a pool of tasks to place."""
    slots = [m.group(1) for m in
             re.finditer(r'<li><strong>(Step \d+):</strong>', sec1_html)]
    answer = [strip_tags(m.group(2)) for m in
              re.finditer(r'<li><strong>(Step \d+):</strong>(.*?)</li>', sec2_html)]
    # the drag pool is the list that follows the slots, minus the slot lines
    items = [strip_tags(m.group(1)) for m in
             re.finditer(r'<li>(.*?)</li>', sec1_html)]
    pool = [i for i in items if not re.match(r'^Step \d+:', i)]
    return {"slots": slots, "pool": pool, "answer": answer}


def parse_match(sec1_html, sec2_html):
    """Matching question: left items paired to right-hand categories."""
    pairs = []
    for m in re.finditer(r'<li>(.*?)</li>', sec2_html):
        parts = re.split(r'<img[^>]*>', m.group(1))
        if len(parts) == 2:
            pairs.append([strip_tags(parts[1]), strip_tags(parts[0])])
    # left pool = the numbered sub-list in section 1
    left = [strip_tags(m.group(1)) for m in
            re.finditer(r'<ol>(.*?)</ol>', sec1_html, re.S)]
    left_items = []
    for blk in re.findall(r'<ol>(.*?)</ol>', sec1_html, re.S):
        left_items += [strip_tags(x) for x in re.findall(r'<li>(.*?)</li>', blk)]
    right = sorted({p[1] for p in pairs})
    return {"left": left_items, "right": right, "pairs": pairs}


def detect_type(sec1_html, sec2_html, ncorrect):
    if re.search(r'<li><strong>Step \d+:</strong>', sec2_html):
        return "order"
    lis = re.findall(r'<li>(.*?)</li>', sec2_html)
    if len(lis) >= 3 and all(re.search(r'<img[^>]*>', x) for x in lis):
        return "match"
    return "multi" if ncorrect > 1 else "single"


def correct_letters(sec2_html, keytext):
    """Letters marked correct, from section 2 first, answer key as fallback."""
    ls = re.findall(r'\b([A-H])\)', sec2_html)
    if not ls:
        ls = re.findall(r'\b([A-H])\)', keytext or "")
    seen, out = set(), []
    for l in ls:
        if l not in seen:
            seen.add(l)
            out.append(l)
    return out


# ---------------------------------------------------------------- main

SEC_NAMES = {
    1: "q", 2: "ca", 3: "wc", 4: "ml", 5: "wa",
    6: "gl", 7: "rl", 8: "mp", 9: "mn", 10: "ck",
}

guides = {}
report = []

for ref, tag, fn in FILES:
    raw = open(os.path.join(SRC, fn), encoding="utf-8").read()
    raw, imgdefs = harvest_images(raw, tag)

    title = re.match(r'^#\s+\*\*(.*?)\*\*', raw).group(1)
    title = re.sub(ESCAPED, r'\1', title)

    # split on H2
    parts = re.split(r'^##\s+\*\*(.*?)\*\*\s*$', raw, flags=re.M)
    h2 = list(zip(parts[1::2], parts[2::2]))

    answer_key, questions, summary, checklist = {}, [], "", ""

    for head, body in h2:
        head_clean = re.sub(ESCAPED, r'\1', head)

        if head_clean.startswith("Quick Reference Answer Key"):
            answer_key = parse_answer_key(to_html(body, imgdefs))
            continue
        if head_clean.startswith("Section 11"):
            summary = to_html(body, imgdefs)
            continue
        if head_clean.startswith("Module Student Master Checklist"):
            checklist = to_html(body, imgdefs)
            continue

        qm = re.match(r'Question (\d+):\s*(.*)$', head_clean)
        if not qm:
            report.append(f"{ref}: unrecognised H2 '{head_clean}'")
            continue

        n, qtitle = int(qm.group(1)), qm.group(2).strip()

        # split on H3 sections
        sp = re.split(r'^###\s+\*\*(\d+)\\?\)\s*(.*?)\*\*\s*$', body, flags=re.M)
        secs = {}
        for i in range(1, len(sp), 3):
            secs[int(sp[i])] = to_html(sp[i + 2], imgdefs)

        missing = [i for i in range(1, 11) if i not in secs]
        if missing:
            report.append(f"{ref} Q{n}: missing sections {missing}")

        q = {"n": n, "title": qtitle, "ref": ref}
        for num, keyname in SEC_NAMES.items():
            q[keyname] = secs.get(num, "")

        s1, s2 = secs.get(1, ""), secs.get(2, "")
        q["opts"] = parse_options(s1)
        q["stem"] = parse_stem(s1)
        q["correct"] = correct_letters(s2, answer_key.get(n, ""))
        q["type"] = detect_type(s1, s2, len(q["correct"]))

        if q["type"] == "order":
            q["order"] = parse_order(s1, s2)
            if len(q["order"]["answer"]) != len(q["order"]["slots"]):
                report.append(f"{ref} Q{n}: order slots/answer mismatch")
        elif q["type"] == "match":
            q["match"] = parse_match(s1, s2)
            if not q["match"]["pairs"]:
                report.append(f"{ref} Q{n}: match pairs empty")
        elif not q["opts"]:
            report.append(f"{ref} Q{n}: no options parsed (type {q['type']})")

        questions.append(q)

    questions.sort(key=lambda x: x["n"])
    guides[ref] = {
        "ref": ref, "title": title, "key": answer_key,
        "questions": questions, "summary": summary, "checklist": checklist,
    }

# ---------------------------------------------------------------- emit

js = []
js.append("// netplus_guides_module1.js")
js.append("// David Sepulveda's Module 1 study guides, parsed to app content.")
js.append("// Prose is VERBATIM (D-16/D-18). Markup converted; wording untouched.")
js.append("// Generated by parse_guides.py — regenerate, do not hand-edit.")
js.append("")
js.append("const NETPLUS_GUIDE_IMAGES = " + json.dumps(IMAGES, indent=0) + ";")
js.append("")
js.append("const NETPLUS_GUIDES = " + json.dumps(guides, indent=1, ensure_ascii=False) + ";")
js.append("")
js.append("""// Swap <img data-img="sha"> placeholders for their data URIs. The geq/gfig
// class is already baked in at parse time -- naturalWidth is still 0 here.
function hydrateGuideImages(root){
  (root||document).querySelectorAll('img[data-img]').forEach(function(el){
    var uri = NETPLUS_GUIDE_IMAGES[el.getAttribute('data-img')];
    if(uri){ el.src = uri; }
  });
}

if (typeof module !== 'undefined') module.exports =
  { NETPLUS_GUIDES: NETPLUS_GUIDES, NETPLUS_GUIDE_IMAGES: NETPLUS_GUIDE_IMAGES };""")

open("/home/claude/netplus_guides_module1.js", "w", encoding="utf-8").write("\n".join(js))

# ---------------------------------------------------------------- report

print("PARSE REPORT")
print("=" * 60)
for ref in guides:
    g = guides[ref]
    print(f"{ref}  {g['title'][:58]}")
    print(f"   questions: {len(g['questions'])}   answer key entries: {len(g['key'])}")
    print(f"   summary table: {'yes' if g['summary'] else 'NO'}   "
          f"master checklist: {'yes' if g['checklist'] else 'NO'}")
print(f"\nunique images: {len(IMAGES)}  (aliases: {len(IMG_ALIAS)})")
print(f"output bytes: {os.path.getsize('/home/claude/netplus_guides_module1.js'):,}")
if report:
    print("\nISSUES:")
    for r in report:
        print("  -", r)
else:
    print("\nno structural issues")
