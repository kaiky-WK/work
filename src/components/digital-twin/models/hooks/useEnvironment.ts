import { useMemo } from 'react';

export const useEnvironment = () => {
  const fog = useMemo(() => ['#f1f5f9', 10, 20], []);
  
  return {
    fog,
  };
};