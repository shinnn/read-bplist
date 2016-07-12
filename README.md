# read-bplist

[![NPM version](https://img.shields.io/npm/v/read-bplist.svg)](https://www.npmjs.com/package/read-bplist)
[![Build Status](https://travis-ci.org/shinnn/read-bplist.svg?branch=master)](https://travis-ci.org/shinnn/read-bplist)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/read-bplist.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/read-bplist.svg)](https://david-dm.org/shinnn/read-bplist)
[![devDependency Status](https://david-dm.org/shinnn/read-bplist/dev-status.svg)](https://david-dm.org/shinnn/read-bplist#info=devDependencies)

A [Node](https://nodejs.org/) module to parse a Binary macOS Plist (.bplist) file

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
readBplist = require('read-bplist');
```

### readBplist(*filePath*)

*filePath*: `String` (a file path to the `.bplist` file)  
Return: [`Promise`](https://promisesaplus.com/) of the parsed data 

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
