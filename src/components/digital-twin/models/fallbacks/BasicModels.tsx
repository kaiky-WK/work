import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const RobotArmFallback = () => (
  <group>
    <Box args={[1, 3, 1]} position={[0, 1.5, 0]}>
      <meshStandardMaterial color="#4f46e5" />
    </Box>
    <Cylinder args={[0.3, 0.3, 2]} position={[0, 3, 0]}>
      <meshStandardMaterial color="#818cf8" />
    </Cylinder>
  </group>
);

export const MachineFallback = () => (
  <Box args={[2, 2, 2]}>
    <meshStandardMaterial color="#4f46e5" />
  </Box>
);

export const ConveyorFallback = () => (
  <Box args={[4, 0.5, 1]}>
    <meshStandardMaterial color="#4f46e5" />
  </Box>
);