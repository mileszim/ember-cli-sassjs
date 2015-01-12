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
  }

});
