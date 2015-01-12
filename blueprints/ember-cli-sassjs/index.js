module.exports = {
  // skip args
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('sass.js', '0.6.0');
  }
};
