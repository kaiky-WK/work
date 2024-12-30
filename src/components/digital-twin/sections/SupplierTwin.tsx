import React from 'react';
import { SceneContainer } from '../models/shared/SceneContainer';
import { WarehouseScene } from '../models/supplier/WarehouseScene';

export const SupplierTwin = () => {
  const metrics = {
    efficiency: 82.5,
    quality: 94.8,
    maintenance: 88.9,
    production: 91.2
  };

  return (
    <div className="space-y-6">
      <SceneContainer>
        <WarehouseScene metrics={metrics} />
      </SceneContainer>
    </div>
  );
};