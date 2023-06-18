import { NextPage } from 'next';
import { WithTenantConfigProps } from '../utils/withTenantConfig';
import Card from '@/@core/components/Card';

const Home: NextPage<WithTenantConfigProps> = ({ tenantConfig }) => {
  const { name, color } = tenantConfig;

  const headingStyle = {
    color: color,
  };

  return (
    <div>
      <h1>Welcome to {name}</h1>
      <h1 style={headingStyle}>Subdomain: {tenantConfig.subdomain}</h1>
      <Card tenantConfig={tenantConfig} />
    </div>
  );
};

export default Home;