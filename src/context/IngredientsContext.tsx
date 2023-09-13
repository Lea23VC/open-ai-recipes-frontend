import ingredientsReducer from '@/reducers/ingredientsReducer';
import {
  IngredientsContextType,
  IngredientsState,
} from '@/ts/types/reducers.type';
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

const CounterContext = createContext<IngredientsContextType | undefined>(
  undefined,
);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialState: IngredientsState = { ingredientsList: [] };

  const [state, dispatch] = useReducer(ingredientsReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): IngredientsContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
