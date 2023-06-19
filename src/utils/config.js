function loadTenantConfig(subdomain) {
  const tenantConfigurations = {
    bpl: require('../customers/bpl/config.json'),
    jio: require('../customers/jio/config.json'),
  };
  if (subdomain in tenantConfigurations) {
    return tenantConfigurations[subdomain];
  }
  return null;
}

module.exports = {
  loadTenantConfig,
};
