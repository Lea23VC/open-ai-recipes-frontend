import { useIngredientsContext } from '@/context/IngredientsContext';
import fetchRecipe from '@/utils/data/fetchRecipe';
import { useState } from 'react';

export function useGenerateRecipe() {
  const { state, dispatch } = useIngredientsContext();
  const { ingredientsList } = state;

  const [loading, setLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<string>();

  function generateRecipe() {
    setLoading(true);
    fetchRecipe(ingredientsList)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return { recipe, generateRecipe, loading };
}
