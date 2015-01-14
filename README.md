# ember-cli-sassjs

Ember addon for [Sass.js from medialize](https://github.com/medialize/sass.js).

## Installation

`ember install:addon ember-cli-sassjs`

## Usage

Import `Sass` from 'sassjs' wherever you need to run the compile function. Sass.js will initialize its worker the first time you include it.

`Sass.compile()` returns a promise, returning compiled css from the worker asynchronously.

For example:

```javascript
...
import Sass from 'sassjs';

export default Ember.Controller.extend({
  actions: {
    convertSCSS: function(scss) {
      var _this = this;
      Sass.compile(scss).then(function(css) {
        _this.set('myCSS', css);
      });
    }
  }
});
...
```


### Options

To use options, set them on the Sass object, and call your compile function afterwards:

```javascript
Sass.options({
  // format output: nested, expanded, compact, compressed
  style: 'compressed',

  // add line comments to output: none, default
  comments: 'none'
});

Sass.compile(scss).then(function(css) {
  console.log(css);
});
```
