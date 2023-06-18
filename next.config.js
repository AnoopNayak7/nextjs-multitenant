// next.config.js
const { loadTenantConfig } = require('./src/utils/config.js');

const headers = async () => {
  // Load tenant config and customize headers based on the config
  const tenantConfig = loadTenantConfig(process.env.TENANT);
  
  // Check if tenantConfig is null and provide a default configuration
  const defaultConfig = { id: 'default-tenant' };
  const config = tenantConfig || defaultConfig;
  
  return [
    {
      source: '/',
      headers: [
        {
          key: 'x-tenant-id',
          value: config.id,
        },
      ],
    },
  ];
};

module.exports = {
  async headers() {
    return headers();
  },
};
