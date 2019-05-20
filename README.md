# read-bplist

[![npm version](https://img.shields.io/npm/v/read-bplist.svg)](https://www.npmjs.com/package/read-bplist)
[![Build Status](https://travis-ci.com/shinnn/read-bplist.svg?branch=master)](https://travis-ci.com/shinnn/read-bplist)
[![codecov](https://codecov.io/gh/shinnn/read-bplist/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/read-bplist)

A [Node.js](https://nodejs.org/) module to parse a Binary macOS Plist (.bplist) file

```javascript
import readBplist from 'read-bplist';

(async () => {
  const data = await readBplist('path/to/your.bplist');
  //=> {some: 'properties'}
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

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

[ISC License](./LICENSE) © 2019 Watanabe Shinnosuke
