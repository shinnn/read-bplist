/*!
 * read-bplist | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/read-bplist
*/
'use strict';

var inspect = require('util').inspect;

var parseFile = require('bplist-parser').parseFile;

var ERR = 'Expected a path to the binary plist (.bplist) file';

module.exports = function readBplist(filePath) {
  if (typeof filePath !== 'string') {
    return Promise.reject(new TypeError(inspect(filePath) + ' is not a string. ' + ERR + '.'));
  }

  if (filePath === '') {
    return Promise.reject(new Error(ERR + ', but received an empty string.'));
  }

  return new Promise(function(resolve, reject) {
    parseFile(filePath, function(err, results) {
      if (err) {
        reject(err);
        return;
      }

      resolve(results[0]);
    });
  });
};
