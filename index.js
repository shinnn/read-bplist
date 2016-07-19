/*!
 * read-bplist | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/read-bplist
*/
'use strict';

const inspect = require('util').inspect;

const parseFile = require('bplist-parser').parseFile;

const ERR = 'Expected a path to the binary plist (.bplist) file';

module.exports = function readBplist(filePath) {
  if (typeof filePath !== 'string') {
    return Promise.reject(new TypeError(`${inspect(filePath)} is not a string. ${ERR}.`));
  }

  if (filePath === '') {
    return Promise.reject(new Error(`${ERR}, but received an empty string.`));
  }

  return new Promise((resolve, reject) => {
    parseFile(filePath, (err, results) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(results[0]);
    });
  });
};
