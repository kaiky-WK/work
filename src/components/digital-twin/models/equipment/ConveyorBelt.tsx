import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface ConveyorBeltProps {
  position: [number, number, number];
  length?: number;
  active?: boolean;
}

export const ConveyorBelt: React.FC<ConveyorBeltProps> = ({
  position,
  length = 4,
  active = true
}) => {
  const rollersRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (rollersRef.current && active) {
      rollersRef.current.rotation.x += delta * 2;
    }
  });

  return (
    <group position={position}>
      {/* Belt Frame */}
      <Box args={[length, 0.2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#64748b" metalness={0.6} roughness={0.4} />
      </Box>

      {/* Rollers */}
      <group ref={rollersRef}>
        {Array.from({ length: Math.floor(length * 2) }).map((_, i) => (
          <Cylinder
            key={i}
            args={[0.1, 0.1, 0.8]}
            position={[i * 0.5 - length / 2 + 0.25, 0.1, 0]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
          </Cylinder>
        ))}
      </group>
    </group>
  );
};