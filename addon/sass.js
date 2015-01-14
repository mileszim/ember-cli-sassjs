import Ember from 'ember';

export default Ember.Object.extend({
  workerInitialized: false,

  init: function() {
    if (!this.get('workerInitialized')) {
      window.Sass.initialize('/assets/sass.js/worker.min.js');
      this.set('workerInitialized', true);
    }
  },

  compile: function(scss) {
    return new Ember.RSVP.Promise(function(resolve) {
      window.Sass.compile(scss, function(css) {
        resolve(css);
      });
    });
  },

  options: function(options) {
    if (options.style)    { options.style    = window.Sass.style[options.style];       }
    if (options.comments) { options.comments = window.Sass.comments[options.comments]; }
    console.log(options);
    return new Ember.RSVP.Promise(function(resolve) {
      window.Sass.options(options, function(response) {
        resolve(response);
      });
    });
  },

  writeFile: function(filename) {
    return new Ember.RSVP.Promise(function(resolve) {
      window.Sass.writeFile(filename, function(success) {
        resolve(success);
      });
    });
  },

  readFile: function(filename) {
    return new Ember.RSVP.Promise(function(resolve) {
      window.Sass.readFile(filename, function(content) {
        resolve(content);
      });
    });
  },

  listFiles: function(filename) {
    return new Ember.RSVP.Promise(function(resolve) {
      window.Sass.listFiles(filename, function(list) {
        resolve(list);
      });
    });
  }

});
