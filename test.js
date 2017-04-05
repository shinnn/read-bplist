'use strict';

const bplist = require('bplist-creator');
const readBplist = require('.');
const rmfr = require('rmfr');
const test = require('tape');
const writeFileAtomically = require('write-file-atomically');

test('readBplist()', t => {
  t.plan(7);

  t.strictEqual(readBplist.name, 'readBplist', 'should have a function name.');

  const tmpPath = 'tmp.bplist';

  writeFileAtomically(tmpPath, bplist({a: 'b'}))
  .then(() => readBplist(tmpPath))
  .then(data => {
    t.deepEqual(data, {a: 'b'}, 'should read and parse a .bplist file.');
  })
  .then(() => rmfr(tmpPath))
  .catch(t.fail);

  readBplist('this/file/does/not/exist').then(t.fail, err => {
    t.strictEqual(
      err.code,
      'ENOENT',
      'should fail when it cannot read the file.'
    );
  });

  readBplist(__filename).then(t.fail, err => {
    t.strictEqual(
      err.message,
      'Invalid binary plist. Expected \'bplist\' at offset 0.',
      'should fail when it cannot parse the file.'
    );
  });

  readBplist(new Set(['Hi'])).then(t.fail, err => {
    t.strictEqual(
      err.message,
      'Expected a path to the binary plist (.bplist) file, but got Set { \'Hi\' }.',
      'should fail when it takes a non-string argument.'
    );
  });

  readBplist('').then(t.fail, err => {
    t.strictEqual(
      err.message,
      'Expected a path to the binary plist (.bplist) file, but received \'\' (empty string).',
      'should fail when it takes an empty string.'
    );
  });

  readBplist().then(t.fail, err => {
    t.strictEqual(
      err.message,
      'Expected a path to the binary plist (.bplist) file, but got undefined.',
      'should fail when it takes no arguments.'
    );
  });
});
