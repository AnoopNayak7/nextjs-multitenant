import { WithTenantConfigProps } from "@/utils/withTenantConfig";
import Link from "next/link";
import React from "react";

const HorizontalSidebar: React.FC<WithTenantConfigProps | any> = ({
  tenantConfig,
}) => {
  const headingStyle = {
    color: tenantConfig?.color,
  };
  return (
    <div className="pt-10 px-5 flex flex-col gap-5 bg-gray-100 h-[100vh]">
      <div style={headingStyle} className="font-bold text-black text-2xl">{tenantConfig?.name}</div>
      <hr/>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/"}>Announcement</Link>
      <Link href={"/"}>Settings</Link>
      <Link href={"/"}>Logout</Link>
    </div>
  );
};

export default HorizontalSidebar;
