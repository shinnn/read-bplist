'use strict';

const {readFile} = require('fs').promises;

const {parseBuffer} = require('bplist-parser');

const PATH_ERROR = 'Expected a path to a binary plist file';

module.exports = async function readBplist(...args) {
	const argLen = args.length;

	if (argLen !== 1) {
		throw new RangeError(`Expected 1 argument (<string|Buffer|Uint8Array|URL|integer>), but got ${
			argLen === 0 ? 'no' : argLen
		} arguments instead.`);
	}

	const [path] = args;

	if (path === '') {
		throw new Error(`${PATH_ERROR}, but got '' (empty string).`);
	}

	if (path.length === 0) {
		if (Buffer.isBuffer(path)) {
			throw new Error(`${PATH_ERROR}, but got an empty Buffer.`);
		}

		if (path instanceof Uint8Array) {
			throw new Error(`${PATH_ERROR}, but got an empty Uint8Array.`);
		}
	}

	return parseBuffer(await readFile(path))[0];
};
