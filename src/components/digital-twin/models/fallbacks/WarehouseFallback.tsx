import React from 'react';
import { Box } from '@react-three/drei';

export const WarehouseFallback = () => (
  <group>
    <Box args={[15, 8, 20]} position={[0, 4, 0]}>
      <meshStandardMaterial color="#475569" metalness={0.4} roughness={0.6} />
    </Box>
    <Box args={[4, 1, 2]} position={[0, 0.5, 8]}>
      <meshStandardMaterial color="#64748b" />
    </Box>
  </group>
);