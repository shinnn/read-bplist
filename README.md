# read-bplist

[![npm version](https://img.shields.io/npm/v/read-bplist.svg)](https://www.npmjs.com/package/read-bplist)
[![Build Status](https://travis-ci.org/shinnn/read-bplist.svg?branch=master)](https://travis-ci.org/shinnn/read-bplist)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/read-bplist.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)

A [Node.js](https://nodejs.org/) module to parse a Binary macOS Plist (.bplist) file

```javascript
const readBplist = require('read-bplist');

readBplist('path/to/your.bplist').then(data => {
  data: //=> {some: 'properties'}
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install read-bplist
```

## API

```javascript
const readBplist = require('read-bplist');
```

### readBplist(*filePath*)

*filePath*: `string` (a file path to the `.bplist` file)  
Return: `Promise<Object>`

## License

Copyright (c) 2016 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
