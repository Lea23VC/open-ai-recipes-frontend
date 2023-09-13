import API_URL from '@/config/api';
import { IngredientList } from '@/ts/types/ingredients.type';
import axios from 'axios';

export default async function fetchRecipe(ingredientsList: IngredientList[]) {
  const recipeURL = API_URL + 'api/recipe';
  return axios
    .post(recipeURL, {
      ingredientsList,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
