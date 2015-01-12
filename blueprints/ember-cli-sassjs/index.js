module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('sass.js', '0.6.0');
  }
};
