import React from 'react';
import { Box } from '@react-three/drei';
import { createBuildingMaterial } from '../materials/MaterialLibrary';

interface WarehouseProps {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
}

export const Warehouse: React.FC<WarehouseProps> = ({
  position,
  scale,
  color
}) => {
  const material = createBuildingMaterial(color);

  return (
    <Box
      args={[1, 1, 1]}
      position={position}
      scale={scale}
      castShadow
      receiveShadow
    >
      <primitive object={material} attach="material" />
    </Box>
  );
};