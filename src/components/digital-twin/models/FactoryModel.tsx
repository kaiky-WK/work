import React from 'react';
import Scene from './Scene';
import { MainFactory } from './buildings/MainFactory';
import { OfficeBuilding } from './buildings/OfficeBuilding';
import { Warehouse } from './buildings/Warehouse';
import { Chimney } from './elements/Chimney';
import { SolarPanels } from './elements/SolarPanels';
import { Ground } from './environment/Ground';
import { Lighting } from './environment/Lighting';

interface FactoryModelProps {
  color?: string;
  status?: 'normal' | 'warning' | 'error';
}

export const FactoryModel: React.FC<FactoryModelProps> = ({
  color = '#4f46e5',
  status = 'normal',
}) => {
  return (
    <Scene>
      <Lighting />
      <MainFactory color={color} status={status} />
      <OfficeBuilding color={color} />
      <Warehouse color={color} />
      <Chimney position={[0.5, 1.5, 0]} />
      <Chimney position={[-0.5, 1.5, 0]} />
      <SolarPanels position={[0, 1, -1]} />
      <Ground />
    </Scene>
  );
};