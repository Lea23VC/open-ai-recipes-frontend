// providers/CounterProvider.tsx
import React, { ReactNode } from 'react';
import { IngredientsProvider } from '../context/IngredientsContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <IngredientsProvider>{children}</IngredientsProvider>;
};

export default AppProvider;
