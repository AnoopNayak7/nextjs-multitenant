import { NextPage } from "next";
import { WithTenantConfigProps } from "../utils/withTenantConfig";
import Card from "@/@core/components/Card";
import CommonLayout from "../@core/layouts/index";
import { useEffect } from "react";

const Home: NextPage<WithTenantConfigProps> = ({ tenantConfig }) => {
  if (!tenantConfig) {
    return <div>Loading...</div>;
  }
  const { name, color } = tenantConfig;

  const headingStyle = {
    color: color,
  };
  return (
    <CommonLayout tenantConfig={tenantConfig}>
      <h1>Welcome to {name}</h1>
      <h1 style={headingStyle}>Subdomain: {tenantConfig.subdomain}</h1>
      <div className="grid grid-cols-4 mt-10">
        <Card tenantConfig={tenantConfig} />
      </div>
    </CommonLayout>
  );
};

export default Home;
