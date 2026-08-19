// Verification for netplus_guides_module1.js
// Specific numeric and content assertions, not smoke tests.

const { NETPLUS_GUIDES: G, NETPLUS_GUIDE_IMAGES: IMG } = require('../netplus_guides_module1.js');

let fail = 0;
const ok = (label, cond, detail) => {
  if (!cond) fail++;
  console.log((cond ? '  ok   ' : '  FAIL ') + label + (detail ? '  [' + detail + ']' : ''));
};

const REFS = ['1.1.8', '1.2.9', '1.3.11', '1.4.11'];
const EXPECT = { '1.1.8': 10, '1.2.9': 15, '1.3.11': 10, '1.4.11': 15 };
const SECS = ['q', 'ca', 'wc', 'ml', 'wa', 'gl', 'rl', 'mp', 'mn', 'ck'];

console.log('\n=== structure ===');
ok('four guides present', Object.keys(G).length === 4, Object.keys(G).join(','));
REFS.forEach(r => ok(`${r} question count = ${EXPECT[r]}`,
  G[r].questions.length === EXPECT[r], G[r].questions.length));

console.log('\n=== per-question integrity ===');
let totalQ = 0, emptySec = [], noOpts = [], noCorrect = [], badSeq = [];
REFS.forEach(r => {
  const qs = G[r].questions;
  qs.forEach((q, i) => {
    totalQ++;
    if (q.n !== i + 1) badSeq.push(`${r} pos${i + 1}=Q${q.n}`);
    SECS.forEach(s => { if (!q[s] || q[s].length < 10) emptySec.push(`${r} Q${q.n}.${s}`); });
    const lettered = q.type === 'single' || q.type === 'multi';
    if (lettered && !q.opts.length) noOpts.push(`${r} Q${q.n}`);
    if (lettered && !q.correct.length) noCorrect.push(`${r} Q${q.n}`);
  });
});
ok('50 questions total', totalQ === 50, totalQ);
ok('question numbers sequential from 1', badSeq.length === 0, badSeq.join(' '));
ok('all 10 sections non-empty everywhere', emptySec.length === 0, emptySec.slice(0, 6).join(' '));
ok('every question has options', noOpts.length === 0, noOpts.join(' '));
ok('every question has a correct answer', noCorrect.length === 0, noCorrect.join(' '));

console.log('\n=== correct answers agree with the Quick Reference Answer Key ===');
let mismatch = [];
REFS.forEach(r => {
  G[r].questions.forEach(q => {
    const keyText = G[r].key[q.n] || '';
    const keyLetters = [...new Set((keyText.match(/\b([A-H])\)/g) || [])
      .map(x => x[0]))];
    const a = q.correct.join(''), b = keyLetters.join('');
    if (a !== b) mismatch.push(`${r} Q${q.n}: sec2=${a} key=${b}`);
  });
});
ok('section 2 matches answer key for all 50', mismatch.length === 0, mismatch.join(' | '));

console.log('\n=== multi-select detection ===');
const multi = [];
REFS.forEach(r => G[r].questions.forEach(q => {
  if (q.correct.length > 1) multi.push(`${r} Q${q.n} (${q.correct.join('')})`);
}));
console.log('  multi-answer questions: ' + (multi.join(', ') || 'none'));
ok('1.3.11 Q2 is a select-three', (G['1.3.11'].questions[1].correct.length === 3),
  G['1.3.11'].questions[1].correct.join(''));
ok('1.3.11 Q3 is a select-two', (G['1.3.11'].questions[2].correct.length === 2),
  G['1.3.11'].questions[2].correct.join(''));

console.log('\n=== markup cleanliness ===');
const allHtml = REFS.map(r => G[r].questions.map(q => SECS.map(s => q[s]).join('')).join('')
  + G[r].summary + G[r].checklist).join('');
// A backslash immediately before an HTML entity is legitimate output --
// "c:\>" becomes "c:\&gt;" and is correct. Only flag the rest.
const escRe = /\\(?!&(?:gt|lt|amp);)[)\]\[\-!=+.#><_~|]/g;
ok('no leftover Google Docs backslash escapes',
  !escRe.test(allHtml),
  (allHtml.match(escRe) || []).slice(0, 5).join(' '));
ok('windows prompt survived as a literal backslash',
  /c:\\&gt; route print/.test(allHtml));
ok('no stray markdown bold markers', !/\*\*/.test(allHtml));
ok('no unresolved image references', !/!\[\]\[image/.test(allHtml));
ok('no empty <li>', !/<li>\s*<\/li>/.test(allHtml));
ok('no empty <p>', !/<p>\s*<\/p>/.test(allHtml));

const opens = (allHtml.match(/<ul>/g) || []).length, closes = (allHtml.match(/<\/ul>/g) || []).length;
ok('<ul> balanced', opens === closes, `${opens} open / ${closes} close`);
const lo = (allHtml.match(/<li>/g) || []).length, lc = (allHtml.match(/<\/li>/g) || []).length;
ok('<li> balanced', lo === lc, `${lo}/${lc}`);
const to = (allHtml.match(/<table>/g) || []).length, tc = (allHtml.match(/<\/table>/g) || []).length;
ok('<table> balanced', to === tc, `${to}/${tc}`);

console.log('\n=== images ===');
const used = new Set((allHtml.match(/data-img="([0-9a-f]+)"/g) || [])
  .map(s => s.match(/"([0-9a-f]+)"/)[1]));
ok('every referenced image exists in the map',
  [...used].every(k => IMG[k]), [...used].filter(k => !IMG[k]).join(' '));
ok('all images are png data URIs',
  Object.values(IMG).every(v => v.startsWith('data:image/png;base64,')));
console.log(`  ${Object.keys(IMG).length} unique images, ${used.size} referenced`);
const arrowRefs = (allHtml.match(/data-img="([0-9a-f]+)"/g) || []).length;
console.log(`  ${arrowRefs} total image insertions (dedupe saved ${arrowRefs - used.size})`);

console.log('\n=== image classification (must be static, not naturalWidth) ===');
const cls = allHtml.match(/<img class="(g\w+)"/g) || [];
ok('every img carries a class in the markup',
  cls.length === (allHtml.match(/<img /g) || []).length,
  cls.length + ' classed / ' + (allHtml.match(/<img /g) || []).length + ' total');
ok('both geq and gfig are in use',
  /class="geq"/.test(allHtml) && /class="gfig"/.test(allHtml));
// the 620px master grid in 1.3.11 Q4 must be a block figure, not inline
ok('1.3.11 Q9 binary master grid classed as a figure',
  /<img class="gfig"/.test(G['1.3.11'].questions[8].ml),
  (G['1.3.11'].questions[8].ml.match(/class="(g\w+)"/g) || []).join(' '));
ok('arrow glyphs classed as inline',
  /<img class="geq"/.test(G['1.4.11'].questions[1].mp));

console.log('\n=== spot checks against the source documents ===');
const q1 = G['1.3.11'].questions[0];
ok('1.3.11 Q1 correct answer is C', q1.correct.join('') === 'C', q1.correct.join(''));
ok('1.3.11 Q1 has 4 options', q1.opts.length === 4, q1.opts.length);
ok('1.3.11 Q1 stem mentions the photographer', /photographer/i.test(q1.stem));
ok('1.3.11 Q1 option C is SOHO', /SOHO/.test(q1.opts[2].t), q1.opts[2].t);
ok('1.3.11 Q1 mini lesson kept the ASCII diagram', /<pre>/.test(q1.ml));
ok('1.3.11 Q1 diagram retains MAN/CAN/PAN rows',
  /MAN \(Metropolitan/.test(q1.ml) && /PAN \(Personal/.test(q1.ml));
ok('1.3.11 Q1 glossary has 4 terms', (q1.gl.match(/<li>/g) || []).length === 4,
  (q1.gl.match(/<li>/g) || []).length);
ok('1.3.11 Q1 checklist is a list', /<li>/.test(q1.ck));
ok('1.3.11 Q1 metaphor mentions the minivan', /minivan/i.test(q1.mp));

const q9 = G['1.3.11'].questions[8];
ok('1.3.11 Q9 is the binary conversion question', /binary/i.test(q9.title + q9.stem));
ok('1.3.11 Q9 correct answer is B', q9.correct.join('') === 'B', q9.correct.join(''));
ok('1.3.11 Q9 why-correct carries equation images', /<img [^>]*data-img=/.test(q9.wc));

const t1 = G['1.4.11'].questions[0];
ok('1.4.11 Q1 is the methodology question', /methodolog/i.test(t1.title));
ok('1.4.11 Q2 metaphor kept the arrow glyphs',
  /<img [^>]*data-img=/.test(G['1.4.11'].questions[1].mp));

console.log('\n=== question types ===');
const counts = {};
REFS.forEach(r => G[r].questions.forEach(q => counts[q.type] = (counts[q.type] || 0) + 1));
console.log('  ' + JSON.stringify(counts));
ok('types sum to 50', Object.values(counts).reduce((a, b) => a + b, 0) === 50);
ok('exactly one ordering question', counts.order === 1);
ok('exactly one matching question', counts.match === 1);
ok('9 multi-select questions', counts.multi === 9, counts.multi);

const ord = G['1.4.11'].questions[1];
ok('1.4.11 Q2 is the ordering question', ord.type === 'order', ord.type);
ok('  7 slots / 7 pool items / 7 answers',
  ord.order.slots.length === 7 && ord.order.pool.length === 7 && ord.order.answer.length === 7);
ok('  step 1 is Identify the problem', /^Identify the problem/.test(ord.order.answer[0]));
ok('  step 7 is Document findings', /^Document findings/.test(ord.order.answer[6]));
ok('  step 5 includes escalation', /escalate/i.test(ord.order.answer[4]));
ok('  pool is the same set as the answer, reordered',
  JSON.stringify([...ord.order.pool].sort()) === JSON.stringify([...ord.order.answer].sort()));

const mt = G['1.2.9'].questions[13];
ok('1.2.9 Q14 is the matching question', mt.type === 'match', mt.type);
ok('  6 pairs, 6 left items, 6 categories',
  mt.match.pairs.length === 6 && mt.match.left.length === 6 && mt.match.right.length === 6);
ok('  HTTP maps to Application Layer',
  mt.match.pairs.some(p => p[0] === 'HTTP' && p[1] === 'Application Layer'));
ok('  Switch maps to Data Link Layer',
  mt.match.pairs.some(p => p[0] === 'Switch' && p[1] === 'Data Link Layer'));
ok('  Router maps to Network Layer',
  mt.match.pairs.some(p => p[0] === 'Router' && p[1] === 'Network Layer'));
ok('  every left item appears in exactly one pair',
  mt.match.left.every(l => mt.match.pairs.filter(p => p[0] === l).length === 1),
  mt.match.left.join(' | '));

console.log('\n=== 1.1.8 cross-validation vs session 1 Module Quiz dup claims ===');
// Session 1 recorded 1.5 Q8 as a verbatim dup of 1.1.8 Q6, and 1.5 Q11 as a
// dup of 1.1.8 Q9, with specific correct answers. Independent check.
const b118 = G['1.1.8'];
ok('1.1.8 Q6 is the physical-vs-logical topology question',
  /Logical Topologies/i.test(b118.questions[5].title), b118.questions[5].title);
ok('  its answer is Logical topology (matches 1.5 Q8 claim)',
  /Logical topology/.test(b118.key[6]), b118.key[6]);
ok('1.1.8 Q9 is the full-mesh redundancy question',
  /Full Mesh/i.test(b118.questions[8].title), b118.questions[8].title);
ok('  its answer is "communicate with all other devices" (matches 1.5 Q11 claim)',
  /communicate with all other devices/.test(b118.key[9]), b118.key[9]);
ok('1.1.8 is all single-answer', b118.questions.every(q => q.type === 'single'),
  [...new Set(b118.questions.map(q => q.type))].join(','));

console.log('\n=== ordered lists ===');
ok('<ol> present (numbered lists were being swallowed before)',
  /<ol>/.test(allHtml), (allHtml.match(/<ol>/g) || []).length + ' found');
const oo = (allHtml.match(/<ol>/g) || []).length, oc = (allHtml.match(/<\/ol>/g) || []).length;
ok('<ol> balanced', oo === oc, `${oo}/${oc}`);
ok('1.4.11 Q2 why-correct kept its numbered reasoning', /<ol>/.test(ord.wc));

console.log('\n=== module-level extras ===');
REFS.forEach(r => {
  ok(`${r} summary table present`, /<table>/.test(G[r].summary));
  ok(`${r} master checklist present`, (G[r].checklist.match(/<li>/g) || []).length >= 8,
    (G[r].checklist.match(/<li>/g) || []).length + ' items');
});

console.log('\n' + (fail ? fail + ' FAILURE(S)' : 'ALL CHECKS PASSED') + '\n');
process.exit(fail ? 1 : 0);
