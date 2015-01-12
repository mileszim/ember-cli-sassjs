/* jshint node: true */
'use strict';

var path = require('path');


module.exports = {
  name: 'sassjs',

  included: function(app, parentAddon) {
    this._super.included(target);
    app.import('bower_directory/sass.js/dist/sass.worker.js');
  },

  treeForApp: function(tree) {
    var sassjsTree = this.pickFiles('bower_directory/sass.js', {
      srcDir: '/dist', destDir: '/assets/sass.js', files: ['worker.min.js']
    });

    return this.mergeTrees([tree, sassjsTree]);
  }
};
