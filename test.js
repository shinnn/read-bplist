'use strict';

const {join} = require('path');
const {unlink, writeFile} = require('fs').promises;

const createBplist = require('bplist-creator');
const readBplist = require('.');
const test = require('tape');

test('readBplist()', async t => {
	const tmpPath = join(__dirname, 'tmp.bplist');

	await writeFile(tmpPath, createBplist({a: 'b'}));
	t.deepEqual(
		await readBplist(tmpPath),
		{a: 'b'},
		'should read and parse a .bplist file.'
	);
	await unlink(tmpPath);

	try {
		await readBplist(join(__dirname, 'this__file__does__not__exist.bplist'));
		t.fail('Unexpectedly succeeded');
	} catch ({code}) {
		t.equal(
			code,
			'ENOENT',
			'should fail when it cannot read the file.'
		);
	}

	try {
		await readBplist(__filename);
		t.fail('Unexpectedly succeeded');
	} catch (err) {
		t.equal(
			err.toString(),
			'Error: Invalid binary plist. Expected \'bplist\' at offset 0.',
			'should fail when it cannot parse the file.'
		);
	}

	try {
		await readBplist(new Int8Array());
		t.fail('Unexpectedly succeeded');
	} catch ({code}) {
		t.equal(
			code,
			'ERR_INVALID_ARG_TYPE',
			'should fail when it takes a non-string argument.'
		);
	}

	try {
		await readBplist('');
		t.fail('Unexpectedly succeeded');
	} catch (err) {
		t.equal(
			err.toString(),
			'Error: Expected a path to a binary plist file, but got \'\' (empty string).',
			'should fail when it takes an empty string.'
		);
	}

	try {
		await readBplist(Buffer.alloc(0));
		t.fail('Unexpectedly succeeded');
	} catch (err) {
		t.equal(
			err.toString(),
			'Error: Expected a path to a binary plist file, but got an empty Buffer.',
			'should fail when it takes an empty Buffer.'
		);
	}

	try {
		await readBplist(new Uint8Array());
		t.fail('Unexpectedly succeeded');
	} catch (err) {
		t.equal(
			err.toString(),
			'Error: Expected a path to a binary plist file, but got an empty Uint8Array.',
			'should fail when it takes an empty Uint8Array.'
		);
	}

	try {
		await readBplist();
		t.fail('Unexpectedly succeeded');
	} catch (err) {
		t.equal(
			err.toString(),
			'RangeError: Expected 1 argument (<string|Buffer|Uint8Array|URL|integer>), but got no arguments instead.',
			'should fail when it takes no arguments.'
		);
	}

	try {
		await readBplist('0', '1');
		t.fail('Unexpectedly succeeded');
	} catch (err) {
		t.equal(
			err.toString(),
			'RangeError: Expected 1 argument (<string|Buffer|Uint8Array|URL|integer>), but got 2 arguments instead.',
			'should fail when it takes too many arguments.'
		);
	}

	t.end();
});
