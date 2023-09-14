import { useIngredientsContext } from '@/context/IngredientsContext';
import fetchRecipe from '@/utils/data/fetchRecipe';
import { useEffect, useState } from 'react';

export function useGenerateRecipe() {
  const { state, dispatch } = useIngredientsContext();
  const { ingredientsList } = state;

  const [loading, setLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<string>();

  useEffect(() => {
    const element = document.getElementById('recipe');
    if (element && recipe) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

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
