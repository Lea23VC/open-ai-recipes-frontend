import { Dispatch } from 'react';
import { IngredientList } from './ingredients.type';

export interface IngredientsState {
  ingredientsList: IngredientList[];
}

export type IngredientsAction =
  | { type: 'UPDATE'; payload: IngredientList }
  | {
      type: 'OBTAIN_RECIPE';
      payload: IngredientList[];
    }
  | {
      type: 'RESET';
    };

export interface IngredientsContextType {
  state: IngredientsState;
  dispatch: Dispatch<IngredientsAction>;
}
