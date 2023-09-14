import { useIngredientsContext } from '@/context/IngredientsContext';
import fetchRecipe from '@/utils/data/fetchRecipe';
import { useEffect, useState } from 'react';

export function useGenerateRecipe() {
  const { state, dispatch } = useIngredientsContext();
  const { ingredientsList } = state;

  const [loading, setLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<string>();
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const element = document.getElementById('recipe');
    if (element && recipe) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [loading]);

  function generateRecipe() {
    setLoading(true);
    setError(null);
    fetchRecipe(ingredientsList)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return { recipe, generateRecipe, loading, error };
}
