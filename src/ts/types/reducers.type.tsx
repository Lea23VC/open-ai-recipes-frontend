import { Dispatch } from 'react';
import { IngredientList } from './ingredients.type';

export interface IngredientsState {
  ingredientsList: IngredientList[];
}

export type IngredientsAction = { type: 'UPDATE' };

export interface IngredientsContextType {
  state: IngredientsState;
  dispatch: Dispatch<IngredientsAction>;
}