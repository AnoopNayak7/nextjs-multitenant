import { WithTenantConfigProps } from "@/utils/withTenantConfig";
import Link from "next/link";
import React from "react";

const VerticalSidebar: React.FC<WithTenantConfigProps | any> = ({tenantConfig}) => {
  const headingStyle = {
    color: tenantConfig?.color,
  };
  return (
    <div className="flex items-center gap-16 mb-10 bg-gray-100 p-5">
      <div style={headingStyle} className="font-bold text-2xl">{tenantConfig?.name}</div>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/"}>Announcement</Link>
      <Link href={"/"}>Settings</Link>
      <Link className="text-blue-800" href={"/"}>Logout</Link>
    </div>
  );
};

export default VerticalSidebar;
