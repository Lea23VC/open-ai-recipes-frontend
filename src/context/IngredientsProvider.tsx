// providers/CounterProvider.tsx
import React, { ReactNode } from 'react';
import { CounterProvider } from '../context/IngredientsContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <CounterProvider>{children}</CounterProvider>;
};

export default AppProvider;
