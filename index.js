/* jshint node: true */
'use strict';

var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'sassjs',

  included: function(app) {
    this._super.included(app);
    app.import('bower_components/sass.js/dist/sass.worker.js');
  },

  treeForPublic: function(tree) {
    var workerTree = pickFiles('bower_components/sass.js', {
      srcDir: '/dist', destDir: '/assets/sass.js', files: ['worker.min.js']
    });

    if (tree) {
      return this.mergeTrees([tree, workerTree]);
    } 
    return workerTree;
  }
};
