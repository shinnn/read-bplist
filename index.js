/*!
 * read-bplist | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/read-bplist
*/
'use strict';

const inspectWithKind = require('inspect-with-kind');
const {parseFile} = require('bplist-parser');

const ERR = 'Expected a path to the binary plist (.bplist) file';

module.exports = function readBplist(...args) {
  return new Promise((resolve, reject) => {
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

    if (filePath === '') {
      throw new Error(`${ERR}, but received '' (empty string).`);
    }

    parseFile(filePath, (err, results) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(results[0]);
    });
  });
};
