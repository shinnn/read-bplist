/*!
 * read-bplist | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/read-bplist
*/
'use strict';

var inspect = require('util').inspect;

var parseFile = require('bplist-parser').parseFile;
var PinkiePromise = require('pinkie-promise');

var ERR = 'Expected a path to the binary plist (.bplist) file';

module.exports = function readBplist(filePath) {
  if (typeof filePath !== 'string') {
    return PinkiePromise.reject(new TypeError(inspect(filePath) + ' is not a string. ' + ERR + '.'));
  }

  if (filePath === '') {
    return PinkiePromise.reject(new Error(ERR + ', but received an empty string.'));
  }

  return new PinkiePromise(function(resolve, reject) {
    parseFile(filePath, function(err, results) {
      if (err) {
        reject(err);
        return;
      }

      resolve(results[0]);
    });
  });
};
