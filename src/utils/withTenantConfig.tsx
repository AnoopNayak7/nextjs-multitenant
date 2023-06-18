import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { loadTenantConfig } from '../utils/config';

interface TenantConfig {
  id: any,
  name: string,
  color: string,
  subdomain: string
}

export interface WithTenantConfigProps {
  tenantConfig: TenantConfig;
}

const withTenantConfig = (WrappedComponent: React.ComponentType<WithTenantConfigProps>) => {
  const WithTenantConfig: React.FC<WithTenantConfigProps> & {
    getServerSideProps: GetServerSideProps<WithTenantConfigProps>;
  } = (props) => {
    // Access the tenantConfig from props and use it as needed
    const { tenantConfig } = props;

    return <WrappedComponent {...props} />;
  };

  // Implement the server-side props loading
  WithTenantConfig.getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const hostname = req.headers.host || '';
    const subdomain = hostname.split('.')[0];
    const tenantConfig = loadTenantConfig(subdomain); // Load the configuration for the tenant

    return {
      props: {
        tenantConfig,
      },
    };
  };

  return WithTenantConfig;
};

export default withTenantConfig;
