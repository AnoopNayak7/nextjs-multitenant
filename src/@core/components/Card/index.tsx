import React from 'react'
import { WithTenantConfigProps } from '../../../utils/withTenantConfig';

const index:React.FC<WithTenantConfigProps> = ({tenantConfig}) => {
  const headingStyle = {
    color: tenantConfig?.color,
  };
  return (
    <div className='border border-gray-300 p-5 rounded-md'>
        <span>Card components </span>
        <div style={headingStyle} className='font-semibold text-xl'>{tenantConfig.name}</div>
    </div>
  )
}

export default index