# jstransformer-php-runtime

[PHP Runtime](https://github.com/glayzzle/php-runtime) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-php-runtime/master.svg)](https://travis-ci.org/jstransformers/jstransformer-php-runtime)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-php-runtime/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-php-runtime)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-php-runtime/master.svg)](http://david-dm.org/jstransformers/jstransformer-php-runtime)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-php-runtime.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-php-runtime.svg)](https://www.npmjs.org/package/jstransformer-php-runtime)

## Installation

    npm install jstransformer-php-runtime

## API

```js
var php-runtime = require('jstransformer')(require('jstransformer-php-runtime'));

php-runtime.render('blah').body
//=> 'blah'
```

## License

MIT
