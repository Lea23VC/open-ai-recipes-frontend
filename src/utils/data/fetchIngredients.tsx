import API_URL from '@/config/api';
import { IngredientList } from '@/ts/types/ingredients.type';
import axios from 'axios';

export default async function fetchIngredients() {
  const ingredientsURL = API_URL + 'api/ingredients';
  return axios
    .get<{ data: IngredientList[] }>(ingredientsURL)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
