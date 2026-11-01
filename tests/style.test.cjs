const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

/** Verifies that the layout keeps the video and result list in separate columns. */
test('The stylesheet places the results in a centered desktop layout', () => {
  const css = readFileSync(require('node:path').join(__dirname, '../styles/style.css'), 'utf8');
  assert.match(css, /\.content\s*\{[^}]*display:\s*flex;[^}]*align-items:\s*flex-end;[^}]*gap:\s*30px;[^}]*inline-size:\s*1140px;/s, 'The desktop layout is missing its aligned columns');
});

/** Verifies that checked controls have a visible custom indicator. */
test('The stylesheet shows the selected checkbox indicator', () => {
  const css = readFileSync(require('node:path').join(__dirname, '../styles/style.css'), 'utf8');
  assert.match(css, /\.search-form__checkbox:checked\s*\+\s*\.search-form__pseudo-checkbox::after\s*\{\s*opacity:\s*1;/, 'The checked checkbox has no visible indicator');
});

/** Verifies that keyboard users can identify the current interactive element. */
test('The stylesheet exposes keyboard focus for controls and cards', () => {
  const css = readFileSync(require('node:path').join(__dirname, '../styles/style.css'), 'utf8');
  assert.match(css, /\.button:focus-visible,\s*\.content__card-link:focus-visible,\s*\.search-form__label:has\(:focus-visible\)\s*\{[^}]*outline:\s*1px solid/s, 'The interactive elements have no visible keyboard focus');
});

/** Verifies that the cards can scroll without expanding the composition. */
test('The stylesheet constrains and scrolls the video list', () => {
  const css = readFileSync(require('node:path').join(__dirname, '../styles/style.css'), 'utf8');
  assert.match(css, /\.content__list-container\s*\{[^}]*position:\s*relative;[^}]*block-size:\s*298px;[^}]*overflow-y:\s*auto;/s, 'The video list has no bounded scrolling area');
});

/** Verifies that long city names and descriptions stay inside their cards. */
test('The stylesheet truncates overflowing card text', () => {
  const css = readFileSync(require('node:path').join(__dirname, '../styles/style.css'), 'utf8');
  assert.ok(/text-overflow:\s*ellipsis/.test(css) && /-webkit-line-clamp:\s*3/.test(css), 'The cards dont constrain overflowing text');
});
