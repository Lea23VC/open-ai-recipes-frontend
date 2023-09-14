import { IngredientsAction, IngredientsState } from '@/ts/types/reducers.type';

export default function ingredientsReducer(
  state: IngredientsState,
  action: IngredientsAction,
) {
  switch (action.type) {
    case 'UPDATE':
      const updatedIngredientsList = [...state.ingredientsList];
      const index = updatedIngredientsList.findIndex(
        (item) => item.key === action.payload.key,
      );

      if (index !== -1) {
        if (action.payload.ingredients.length > 0) {
          updatedIngredientsList[index] = {
            ...updatedIngredientsList[index],
            ingredients: action.payload.ingredients,
          };
        } else {
          updatedIngredientsList.splice(index, 1);
        }
      } else {
        updatedIngredientsList.push(action.payload);
      }

      return {
        ...state,
        ingredientsList: updatedIngredientsList,
      };

    case 'RESET':
      return {
        ...state,
        ingredientsList: [],
      };

    default:
      return state;
  }
}
