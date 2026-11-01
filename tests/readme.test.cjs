const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

/** Verifies the exact repository URL required by the submission checker. */
test('The readme identifies the repository on a separate line', () => {
  const text = readFileSync(join(__dirname, '../README.md'), 'utf8');
  assert.match(text, /^https:\/\/github\.com\/DikiyOgyrec\/posmotri-v-okno-ad\r?$/m, 'The readme lacks the exact repository URL');
});
