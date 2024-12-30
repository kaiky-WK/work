import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { MonitoringOverlay } from './monitoring/MonitoringOverlay';

interface SceneProps {
  children: React.ReactNode;
  metrics: any;
}

const Scene: React.FC<SceneProps> = ({ children, metrics }) => {
  return (
    <div className="w-full h-[600px] bg-slate-900 rounded-lg overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          shadows
          camera={{ position: [15, 15, 15], fov: 50 }}
          gl={{ antialias: true }}
        >
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1} 
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          {children}
          <MonitoringOverlay metrics={metrics} />
          <OrbitControls 
            minDistance={10}
            maxDistance={30}
            maxPolarAngle={Math.PI / 2}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene;