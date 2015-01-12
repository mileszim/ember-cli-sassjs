/* jshint node: true */
'use strict';

module.exports = {
  name: 'sassjs',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    this._super.included(target);
    target.import('bower_components/sass.js/dist/sass.worker.js');
    this.pickFiles('bower_components/sass.js', {
      srcDir: '/dist', destDir: '/assets/sass.js', files: ['worker.min.js']
    });
  }
};
