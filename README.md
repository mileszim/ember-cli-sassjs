# ember-cli-sassjs

Ember addon for [https://github.com/medialize/sass.js](Sass.js from medialize).

## Installation

`ember install:addon ember-cli-sassjs`

## Usage

Import `Sass` from 'sassjs' wherever you need to run the compile function. Sass.js will initialize its worker the first time you include it.

`Sass.compile()` returns a promise, returning compiled css from the worker asynchronously.

For example:

```javascript
import
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
