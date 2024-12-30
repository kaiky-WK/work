import React from 'react';
import { SceneContainer } from '../models/shared/SceneContainer';
import { ProductionLine } from '../models/manufacturer/ProductionLine';

export const ManufacturerTwin = () => {
  const metrics = {
    efficiency: 87.2,
    quality: 98.1,
    maintenance: 75.3,
    production: 95.5
  };

  return (
    <div className="space-y-6">
      <SceneContainer>
        <ProductionLine metrics={metrics} />
      </SceneContainer>
    </div>
  );
};