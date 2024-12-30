import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ManufacturerTwin } from './sections/ManufacturerTwin';
import { SupplierTwin } from './sections/SupplierTwin';
import { DistributorTwin } from './sections/DistributorTwin';
import { EnterpriseTwin } from './sections/EnterpriseTwin';

const roleComponents = {
  manufacturer: {
    title: '生产设备数字孪生',
    component: ManufacturerTwin,
  },
  supplier: {
    title: '供应链数字孪生',
    component: SupplierTwin,
  },
  distributor: {
    title: '销售网络数字孪生',
    component: DistributorTwin,
  },
  enterprise: {
    title: '企业运营数字孪生',
    component: EnterpriseTwin,
  },
};

export const DigitalTwin = () => {
  const { user } = useAuth();
  const content = user ? roleComponents[user.role] : null;

  if (!content) return null;

  const TwinComponent = content.component;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{content.title}</h2>
      <TwinComponent />
    </div>
  );
};