// pages/[tenant].tsx
import { GetServerSideProps } from 'next';
import { loadTenantConfig } from './../utils/config';

interface TenantProps {
  tenantConfig: any; 
}

const TenantPage = ({ tenantConfig }: TenantProps) => {
  return (
    <div>
      <h1 className={`text-[${tenantConfig.color}]`}>Welcome to {tenantConfig.name}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TenantProps> = async ({ params }) => {
  const tenant = params?.tenant as string;
  const tenantConfig = loadTenantConfig(tenant);
  
  return {
    props: {
      tenantConfig,
    },
  };
};

export default TenantPage;
