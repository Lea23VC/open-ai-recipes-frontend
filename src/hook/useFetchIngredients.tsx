import { useEffect, useState } from 'react';
import { IngredientList } from '@/ts/types/ingredients.type';
import fetchIngredients from '@/utils/data/fetchIngredients';

export function useFetchIngredients() {
  const [ingredients, setIngredients] = useState<IngredientList[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setCalled(true);
      setLoading(true);
      try {
        const response = await fetchIngredients();
        setIngredients(response.data);
      } catch (error) {}
      setLoading(false);
    };

    fetchData();
  }, []);

  return { ingredients, loading, called };
}
