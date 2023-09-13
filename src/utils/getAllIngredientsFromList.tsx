import { IngredientList } from '@/ts/types/ingredients.type';

export default function getAllIngredientsFromList(
  ingredientsList: IngredientList[],
) {
  const allIngredients: string[] = [];
  ingredientsList.forEach((item) => {
    allIngredients.push(...item.ingredients);
  });
  return allIngredients;
}
