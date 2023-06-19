import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { loadTenantConfig } from '../utils/config';

interface TenantConfig {
  id: any,
  name: string,
  color: string,
  subdomain: string,
  menudirection: string
}

export interface WithTenantConfigProps {
  tenantConfig: TenantConfig;
}

const withTenantConfig = (WrappedComponent: React.ComponentType<WithTenantConfigProps>) => {
  const WithTenantConfig: React.FC<WithTenantConfigProps> & {
    getServerSideProps: GetServerSideProps<WithTenantConfigProps>;
  } = (props) => {
    const { tenantConfig } = props;

    return <WrappedComponent {...props} />;
  };

  WithTenantConfig.getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const hostname = req.headers.host || '';
    const subdomain = hostname.split('.')[0];
    const tenantConfig = loadTenantConfig(subdomain);

    return {
      props: {
        tenantConfig,
      },
    };
  };

  return WithTenantConfig;
};

export default withTenantConfig;
