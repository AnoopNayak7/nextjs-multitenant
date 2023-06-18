import React from 'react'
import { WithTenantConfigProps } from '../../../utils/withTenantConfig';
const index:React.FC<WithTenantConfigProps> = ({tenantConfig}) => {
  return (
    <div className='border border-gray-800 p-5'>
        <span>Card components :::::</span>
        <span>{tenantConfig.name}</span>
    </div>
  )
}

export default index