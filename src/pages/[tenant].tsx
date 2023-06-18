// pages/[tenant].tsx
import { GetServerSideProps } from 'next';
import { loadTenantConfig } from './../utils/config';

interface TenantProps {
  tenantConfig: any; // Adjust the type according to your configuration
}

const TenantPage = ({ tenantConfig }: TenantProps) => {
  // Use the tenantConfig in your component
  return (
    <div>
      <h1 className={`text-[${tenantConfig.color}]`}>Welcome to {tenantConfig.name}</h1>
      {/* Render the rest of your component */}
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
