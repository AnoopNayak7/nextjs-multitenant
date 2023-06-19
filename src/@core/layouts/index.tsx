import React from "react";
import { WithTenantConfigProps } from "../../utils/withTenantConfig";
import HorizontalSidebar from "../components/menu/HorizontalSidebar";
import VerticalSidebar from "../components/menu/VerticalSidebar";

const CommonLayout: React.FC<WithTenantConfigProps | any> = ({ tenantConfig, children }) => {
  return (
    <div className="">
      {tenantConfig?.menudirection === "horizontal" ? (
        <div className="flex">
          <div className="w-[14%]"><HorizontalSidebar  tenantConfig={tenantConfig}/></div>
          <div className="w-[86%] m-5">{children}</div>
        </div>
      ) : (
        <div className="">
          <VerticalSidebar  tenantConfig={tenantConfig}/>
          <div className="m-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default CommonLayout;
