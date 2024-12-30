import React from 'react';
import { useModelWithFallback } from '../../hooks/useModelWithFallback';
import { MODEL_PATHS } from '../../constants/modelPaths';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';
import { WarehouseFallback } from '../fallbacks/WarehouseFallback';

export const WarehouseScene = ({ metrics }: { metrics: MetricsProps }) => {
  const { model: warehouse, error: warehouseError } = useModelWithFallback(MODEL_PATHS.warehouse);
  const { model: forklift, error: forkliftError } = useModelWithFallback(MODEL_PATHS.forklift);
  const { model: shelves, error: shelvesError } = useModelWithFallback(MODEL_PATHS.shelves);

  return (
    <group>
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="库存周转"
        status={metrics.efficiency < 85 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.maintenance}
        label="库存水平"
        status={metrics.maintenance < 80 ? 'warning' : 'normal'}
      />

      {/* Main Warehouse */}
      {warehouse && !warehouseError ? (
        <primitive object={warehouse.scene.clone()} scale={[1, 1, 1]} />
      ) : (
        <WarehouseFallback />
      )}

      {/* Storage Shelves */}
      {[-6, 0, 6].map((x) => (
        <group key={x} position={[x, 0, 0]} scale={0.8}>
          {shelves && !shelvesError ? (
            <primitive object={shelves.scene.clone()} />
          ) : (
            <Box args={[3, 6, 1]}>
              <meshStandardMaterial color="#64748b" />
            </Box>
          )}
        </group>
      ))}

      {/* Forklift */}
      {forklift && !forkliftError ? (
        <primitive object={forklift.scene.clone()} position={[0, 0, 4]} scale={0.6} />
      ) : (
        <Box args={[2, 1.5, 3]} position={[0, 0.75, 4]}>
          <meshStandardMaterial color="#475569" />
        </Box>
      )}
    </group>
  );
};