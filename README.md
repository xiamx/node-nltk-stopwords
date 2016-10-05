# node-nltk-stopwords
A node module exposing nltk stopwords corpora and provide utility functions for removing stopwords

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

If a string input is passed, stopwords.remove will return a string, if an array input is passed instead, the resulting return value will also be an array.