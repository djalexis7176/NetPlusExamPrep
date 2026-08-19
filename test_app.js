// Functional tests for netplus_app.html via jsdom.
// Drives the real UI: clicks options, places order chips, sets match
// dropdowns, checks answers, and asserts on rendered output.

const fs = require('fs');
const { JSDOM } = require('jsdom');

let fail = 0;
const ok = (label, cond, detail) => {
  if (!cond) fail++;
  console.log((cond ? '  ok   ' : '  FAIL ') + label + (detail ? '  [' + detail + ']' : ''));
};

const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const content = fs.readFileSync(path.join(ROOT, 'netplus_guides_module1.js'), 'utf8');

// inline the content script so jsdom doesn't need to fetch it
const wired = html.replace(
  '<script src="netplus_guides_module1.js"></script>',
  '<script>' + content + '</script>'
);

const dom = new JSDOM(wired, { runScripts: 'dangerously', pretendToBeVisual: true,
  beforeParse(w){ w.scrollTo = () => {}; } });
const { window } = dom;

// The content file declares `const NETPLUS_GUIDES`, which is a lexical
// binding rather than a window property. Load it directly for assertions.
const G = require('../netplus_guides_module1.js').NETPLUS_GUIDES;
const doc = window.document;
const $ = s => doc.querySelector(s);
const $$ = s => [...doc.querySelectorAll(s)];
const click = e => e.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
const BANK = ref => $$('.bank-tab').find(b => b.dataset.ref === ref);

console.log('\n=== boot ===');
ok('app is visible (content file resolved)', !$('#app').hidden);
ok('no fatal boot error shown', !$('.fatal'));
ok('four bank tabs rendered', $$('.bank-tab').length === 4, $$('.bank-tab').length);
ok('first tab (1.1.8) selected', BANK('1.1.8').getAttribute('aria-selected') === 'true');
ok('tally reports 50 questions', /50 questions loaded/.test($('#tally').textContent),
  $('#tally').textContent.trim().split('\n')[0]);

console.log('\n=== quiz: single-answer question (1.2.9 Q2) ===');
click(BANK('1.2.9'));
click($('#next'));
ok('position note updates', /Question 2 of 15/.test($('#posNote').textContent),
  $('#posNote').textContent);
let q = $('.qno').textContent;
ok('question header shows Q2', q === 'Q2', q);
ok('check button starts disabled', $('#check').disabled);

let opts = $$('[data-opt]');
ok('options rendered', opts.length >= 4, opts.length);
click(opts[0]);
ok('selecting an option marks it', $$('.opt.sel').length === 1);
ok('check button enabled after selecting', !$('#check').disabled);
click($$('[data-opt]')[1]);
ok('single-answer selection replaces, not accumulates', $$('.opt.sel').length === 1);

console.log('\n=== grading + guide reveal ===');
click($('#check'));
ok('verdict shown after checking', !!$('.verdict'));
ok('options locked after checking', $$('[data-opt]').every(b => b.disabled));
ok('exactly one option marked right', $$('.opt.right').length === 1);
ok('guide accordion appears', !!$('.guide'));
ok('all ten guide sections rendered', $$('.gsec').length === 10, $$('.gsec').length);
const labels = $$('.gsum').map(b => b.textContent.replace(/[0-9\u203A]/g, '').trim());
ok('section 4 is the mini lesson', /Mini lesson/i.test(labels[3]), labels[3]);
ok('section 10 is the student checklist', /checklist/i.test(labels[9]), labels[9]);
ok('why-correct opens by default', $$('.gsec')[2].classList.contains('open'));
ok('mini lesson starts collapsed', !$$('.gsec')[3].classList.contains('open'));
click($$('.gsum')[3]);
ok('clicking a section header expands it', $$('.gsec')[3].classList.contains('open'));
ok('expanded body has real content',
  $$('.gbody')[3].textContent.trim().length > 200, $$('.gbody')[3].textContent.trim().length);

console.log('\n=== confidence symbols ===');
const cb = $$('[data-conf]');
ok('eight confidence buttons', cb.length === 8, cb.length);
ok('symbol set matches the project standard',
  cb.map(b => b.dataset.conf).join('') === '+/?\u2212!SRW',
  cb.map(b => b.dataset.conf).join(''));
click(cb[0]);
ok('confidence selection registers',
  $$('[data-conf]')[0].getAttribute('aria-pressed') === 'true');
click($$('[data-conf]')[0]);
ok('clicking again clears it',
  $$('[data-conf]')[0].getAttribute('aria-pressed') === 'false');

console.log('\n=== multi-select question (1.2.9 Q1, answer CEF) ===');
click($('#prev'));
ok('back on Q1', $('.qno').textContent === 'Q1');
ok('Q1 chipped as select-all', /Select all/i.test($('.chip').textContent), $('.chip').textContent);
const byK = k => $$('[data-opt]').find(b => b.dataset.opt === k);
click(byK('C')); click(byK('E')); click(byK('F'));
ok('three options selected at once', $$('.opt.sel').length === 3, $$('.opt.sel').length);
click(byK('F'));
ok('clicking a selected option deselects it', $$('.opt.sel').length === 2);
click(byK('F'));
click($('#check'));
ok('correct multi-answer scores as correct', $('.verdict').classList.contains('y'),
  $('.verdict').textContent);
ok('all three correct options flagged right', $$('.opt.right').length === 3);

console.log('\n=== wrong answer path ===');
click($('#next')); // Q2, already answered
click($('#next')); // Q3
ok('on Q3', $('.qno').textContent === 'Q3');
const q3correct = $$('[data-opt]').length;
// deliberately pick an option we can identify as wrong after checking
click($$('[data-opt]')[0]);
click($('#check'));
const v = $('.verdict').textContent;
ok('verdict rendered for Q3', /Correct|Not quite/.test(v), v);
if (/Not quite/.test(v)) {
  ok('  wrong pick marked wrong', $$('.opt.wrong').length === 1);
  ok('  right answer still revealed', $$('.opt.right').length >= 1);
} else {
  ok('  correct pick marked right', $$('.opt.right').length >= 1);
}

console.log('\n=== matching question (1.2.9 Q14) ===');
// jump: click next until Q14
while ($('.qno').textContent !== 'Q14' && !$('#next').disabled) click($('#next'));
ok('reached Q14', $('.qno').textContent === 'Q14');
ok('chipped as a matching question', /Match/i.test($('.chip').textContent), $('.chip').textContent);
let rows = $$('[data-match]');
ok('six match rows rendered', rows.length === 6, rows.length);
ok('each dropdown offers six categories plus a placeholder',
  rows.every(r => r.options.length === 7), rows.map(r => r.options.length).join(','));
ok('check disabled before all rows filled', $('#check').disabled);
// answer correctly from the data
const mq = G['1.2.9'].questions[13];
mq.match.left.forEach(L => {
  const want = mq.match.pairs.find(p => p[0] === L)[1];
  const sel = $$('[data-match]').find(s => s.dataset.match === L);
  sel.value = want;
  sel.dispatchEvent(new window.Event('change', { bubbles: true }));
});
ok('check enabled once every row is set', !$('#check').disabled);
click($('#check'));
ok('correct matching scores correct', $('.verdict').classList.contains('y'), $('.verdict').textContent);
ok('all six rows flagged right', $$('.mrow.right').length === 6, $$('.mrow.right').length);

console.log('\n=== ordering question (1.4.11 Q2) ===');
click(BANK('1.4.11'));            // switch to 1.4.11
ok('switched bank', BANK('1.4.11').getAttribute('aria-selected') === 'true');
ok('reset to first question', $('.qno').textContent === 'Q1');
click($('#next'));
ok('on Q2', $('.qno').textContent === 'Q2');
ok('chipped as an ordering question', /order/i.test($('.chip').textContent), $('.chip').textContent);
ok('seven slots rendered', $$('.slot').length === 7, $$('.slot').length);
ok('seven pool chips rendered', $$('[data-pool]').length === 7, $$('[data-pool]').length);
ok('all slots start empty', $$('.sv.empty').length === 7);

const oq = G['1.4.11'].questions[1];
// place them in the correct order by finding each answer in the pool
oq.order.answer.forEach(t => {
  const idx = oq.order.pool.indexOf(t);
  click($$('[data-pool]')[idx]);
});
ok('all seven slots filled', $$('.sv.empty').length === 0);
ok('placed chips are disabled in the pool',
  $$('[data-pool]').every(b => b.disabled));
click($('#check'));
ok('correct sequence scores correct', $('.verdict').classList.contains('y'), $('.verdict').textContent);
ok('all seven slots flagged right', $$('.slot.right').length === 7, $$('.slot.right').length);

console.log('\n=== ordering: wrong sequence shows the fix ===');
click($('#resetBank'));
click($('#next'));
// place in reverse
[...oq.order.answer].reverse().forEach(t => {
  const idx = oq.order.pool.indexOf(t);
  click($$('[data-pool]')[idx]);
});
click($('#check'));
ok('reversed sequence scores wrong', $('.verdict').classList.contains('n'), $('.verdict').textContent);
ok('wrong slots show the correct value', $$('.slot .fix').length > 0, $$('.slot .fix').length + ' fixes');
ok('step 1 fix names the right task',
  /Identify the problem/.test($$('.slot')[0].textContent), $$('.slot')[0].textContent.slice(0,80));

console.log('\n=== layer spine ===');
click(BANK('1.2.9'));   // 1.2.9 -> OSI spine
ok('OSI spine shown for 1.2.9', /OSI layers/.test($('#spine').textContent));
ok('seven OSI bands', $$('#spine .band').length === 7, $$('#spine .band').length);
ok('band 7 is Application', /Application/.test($$('#spine .band')[0].textContent));
ok('band 1 is Physical', /Physical/.test($$('#spine .band')[6].textContent));
click(BANK('1.4.11'));   // 1.4.11 -> troubleshooting spine
ok('troubleshooting spine shown for 1.4.11', /Troubleshooting steps/.test($('#spine').textContent));
ok('step 1 band is Identify the problem',
  /Identify the problem/.test($$('#spine .band')[0].textContent));
click(BANK('1.3.11'));   // 1.3.11 -> no single stack
ok('1.3.11 falls back to a plain bank panel', !!$('.spine-empty'));
ok('fallback names the bank and count', /1\.3\.11/.test($('#spine').textContent) &&
  /10 questions/.test($('#spine').textContent));

console.log('\n=== study mode ===');
click($('#mStudy'));
ok('study mode pressed', $('#mStudy').getAttribute('aria-pressed') === 'true');
ok('every 1.3.11 question listed', $$('.qcard').length === 10, $$('.qcard').length);
ok('summary table block present', /<table/.test($$('.modblock')[0].innerHTML));
ok('master checklist block present', /master checklist/i.test($$('.modblock')[1].textContent));
ok('checklist has at least ten items',
  $$('.modblock')[1].querySelectorAll('li').length >= 10,
  $$('.modblock')[1].querySelectorAll('li').length);
ok('all sections collapsed on entry', $$('.gsec.open').length === 0);
ok('guide sections present for every question', $$('.gsec').length === 100, $$('.gsec').length);

console.log('\n=== content fidelity in the DOM ===');
click($('#mQuiz'));
click(BANK('1.3.11'));   // 1.3.11 Q1
const stem = $('.stem').textContent;
ok('Q1 stem is the photographer scenario', /freelance photographer/i.test(stem), stem.slice(0,60));
click($$('[data-opt]')[2]);  // C
click($('#check'));
ok('SOHO answer scores correct', $('.verdict').classList.contains('y'));
// open the mini lesson and check the ASCII diagram survived into the DOM
click($$('.gsum')[3]);
const ml = $$('.gbody')[3];
ok('mini lesson renders a <pre> diagram', !!ml.querySelector('pre'));
ok('diagram retains the scope hierarchy',
  /MAN \(Metropolitan/.test(ml.textContent) && /PAN \(Personal/.test(ml.textContent));
click($$('.gsum')[7]);
ok('metaphor section mentions the minivan', /minivan/i.test($$('.gbody')[7].textContent));
click($$('.gsum')[5]);
ok('glossary lists four terms', $$('.gbody')[5].querySelectorAll('li').length === 4,
  $$('.gbody')[5].querySelectorAll('li').length);

console.log('\n=== image hydration ===');
// 1.3.11 Q9 carries the binary-arithmetic equation images
click($('#resetBank'));
for (let i = 0; i < 8; i++) click($('#next'));
ok('on Q9', $('.qno').textContent === 'Q9', $('.qno').textContent);
click($$('[data-opt]')[1]);
click($('#check'));
const imgs = $$('.gbody img');
ok('equation images present in the guide', imgs.length > 0, imgs.length + ' images');
ok('every image got a real data URI',
  imgs.every(i => (i.getAttribute('src') || '').startsWith('data:image/png;base64,')),
  imgs.filter(i => !(i.getAttribute('src') || '').startsWith('data:')).length + ' unhydrated');

console.log('\n=== reset ===');
click($('#resetBank'));
ok('reset clears the answered state', !$('.verdict'));
ok('reset returns to Q1', $('.qno').textContent === 'Q1');
ok('reset clears the guide', !$('.guide'));

console.log('\n' + (fail ? fail + ' FAILURE(S)' : 'ALL FUNCTIONAL TESTS PASSED') + '\n');
process.exit(fail ? 1 : 0);
