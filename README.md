# read-bplist

[![npm version](https://img.shields.io/npm/v/read-bplist.svg)](https://www.npmjs.com/package/read-bplist)
[![Build Status](https://travis-ci.com/shinnn/read-bplist.svg?branch=master)](https://travis-ci.com/shinnn/read-bplist)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/read-bplist.svg)](https://coveralls.io/github/shinnn/read-bplist?branch=master)

A [Node.js](https://nodejs.org/) module to parse a Binary macOS Plist (.bplist) file

```javascript
import readBplist from 'read-bplist';

(async () => {
  const data = await readBplist('path/to/your.bplist');
  //=> {some: 'properties'}
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm]https://docs.npmjs.com/about-npm/).

```
npm install read-bplist
```

## API

```javascript
import readBplist from 'read-bplist';
```

### readBplist(*path*)

*path*: `string | Buffer | Uint8Array | URL` (a file path) or `integer` (a file descriptor)
Return: `Promise<Object>`

## License

Copyright (c) 2016 - 2019 [Watanabe Shinnosuke](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
