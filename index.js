/*!
 * read-bplist | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/read-bplist
*/
'use strict';

const {promisify} = require('util');

const inspectWithKind = require('inspect-with-kind');
const {parseFile} = require('bplist-parser');

const ERR = 'Expected a path to the binary plist (.bplist) file';
const promisifiedParseFile = promisify(parseFile);

module.exports = async function readBplist(...args) {
  const argLen = args.length;

  if (argLen !== 1) {
    throw new TypeError(`Expected 1 argument (string), but got ${
      argLen === 0 ? 'no' : argLen
    } arguments instead.`);
  }

  const [filePath] = args;

  if (typeof filePath !== 'string') {
    throw new TypeError(`${ERR}, but got ${inspectWithKind(filePath)}.`);
  }

  if (filePath.length === 0) {
    throw new Error(`${ERR}, but got '' (empty string).`);
  }

  return (await promisifiedParseFile(filePath))[0];
};
