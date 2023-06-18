function loadTenantConfig(subdomain) {
  // Map subdomains to their corresponding configurations
  const tenantConfigurations = {
    bpl: require('../customers/bpl/config.json'),
    jio: require('../customers/jio/config.json'),
    // Add more subdomains and their configurations as needed
  };

  // Check if the subdomain exists in the tenantConfigurations object
  if (subdomain in tenantConfigurations) {
    return tenantConfigurations[subdomain];
  }

  // Handle the case when the subdomain does not have a configuration
  // You can return a default configuration or throw an error, as per your requirements
  return null;
}

module.exports = {
  loadTenantConfig,
};
