import {strict as assert} from 'assert';
import {join} from 'path';
import {promises} from 'fs';
import {tmpdir} from 'os';

import createBplist from 'bplist-creator';
import readBplist from '.';
import test from 'testit';

test('read and parse a .bplist file', async () => {
	const tmpPath = join(tmpdir(), 'read-bplist-temporary-fixture.bplist');

	await promises.writeFile(tmpPath, createBplist({a: 'b'}));
	assert.deepEqual(await readBplist(tmpPath), {a: 'b'});
	await promises.unlink(tmpPath);
});

test('fail when it cannot read a file', async () => {
	await assert.rejects(async () => readBplist('this__file__does__not__exist.bplist'), {code: 'ENOENT'});
});

test('fail when it cannot parse the file', async () => {
	await assert.rejects(async () => readBplist(process.env.npm_execpath), {
		message: 'Invalid binary plist. Expected \'bplist\' at offset 0.'
	});
});

test('fail when it takes a non-path argument', async () => {
	await assert.rejects(async () => readBplist(new Int8Array()), {code: 'ERR_INVALID_ARG_TYPE'});
});

test('fail when it takes an empty string', async () => {
	await assert.rejects(async () => readBplist(''), {
		message: 'Expected a path to a binary plist file, but got \'\' (empty string).'
	});
});

test('fail when it takes an empty Buffer', async () => {
	await assert.rejects(async () => readBplist(Buffer.alloc(0)), {
		message: 'Expected a path to a binary plist file, but got an empty Buffer.'
	});
});

test('fail when it takes an empty Uint8Array', async () => {
	await assert.rejects(async () => readBplist(new Uint8Array()), {
		message: 'Expected a path to a binary plist file, but got an empty Uint8Array.'
	});
});

test('fail when it takes no arguments', async () => {
	await assert.rejects(async () => readBplist(), {
		name: 'RangeError',
		message: 'Expected 1 argument (<string|Buffer|Uint8Array|URL|integer>), but got no arguments instead.'
	});
});

test('fail when it takes too many arguments', async () => {
	await assert.rejects(async () => readBplist('0', '1'), {
		name: 'RangeError',
		message: 'Expected 1 argument (<string|Buffer|Uint8Array|URL|integer>), but got 2 arguments instead.'
	});
});
