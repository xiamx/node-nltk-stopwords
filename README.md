# node-nltk-stopwords
A node module exposing nltk stopwords corpora and provide utility functions for removing stopwords

[![Homepage](https://img.shields.io/badge/Home-Page-green.svg)](http://xiamx.github.io/node-nltk-stopwords)
[![GitHub tag](https://img.shields.io/github/tag/xiamx/node-nltk-stopwords.svg?maxAge=2592000)](https://github.com/xiamx/node-nltk-stopwords)
[![npm](https://img.shields.io/npm/v/nltk-stopwords.svg?maxAge=2592000)](https://www.npmjs.com/package/nltk-stopwords)
[![license](https://img.shields.io/npm/l/nltk-stopwords.svg?maxAge=2592000)](https://github.com/xiamx/node-nltk-stopwords/blob/master/LICENSE)

## Usage
```bash
npm install --save nltk-stopwords
```

```javascript
var stopwords = require('nltk-stopwords')

// let's load english stopwords
var english = stopwords.load('english')

// Remove stopwords from a sentence
stopwords.remove("A sentence can not be without stopwords", english)
// This should output
// 'A sentence without stopwords'

// You can also pass a string of language in the second parameter, `stopwords.remove` will handle stopword loading.
stopwords.remove("J'essaye de trouver un bon example", "french")
// This should output
// "J'essaye trouver bon example"
```


By default, the sentence is tokenized by whitespace. You can also pass an array of tokenized string instead.

```javascript
stopwords.remove([ 'A', 'sentence', 'can', 'not', 'be', 'without', 'stopwords' ], english)
// This should output 
// [ 'A', 'sentence', 'without', 'stopwords' ]

```

If a string input is passed, `stopwords.remove` will return a string, if an array input is passed instead, the resulting return value will also be an array.