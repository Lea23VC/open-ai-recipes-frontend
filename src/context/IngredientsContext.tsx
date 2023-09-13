'use client';

import ingredientsReducer from '@/reducers/ingredientsReducer';
import {
  IngredientsContextType,
  IngredientsState,
} from '@/ts/types/reducers.type';
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

const IngredientsContext = createContext<IngredientsContextType | undefined>(
  undefined,
);

export const IngredientsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialState: IngredientsState = { ingredientsList: [] };

  const [state, dispatch] = useReducer(ingredientsReducer, initialState);

  return (
    <IngredientsContext.Provider value={{ state, dispatch }}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredientsContext = (): IngredientsContextType => {
  const context = useContext(IngredientsContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
