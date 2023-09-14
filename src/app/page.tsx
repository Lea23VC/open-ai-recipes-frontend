'use client';
import FixedButton from '@/components/buttons/fixedButton';
import RecipeContent from '@/components/content/recipeContent';
import SelectedIngredientsCaption from '@/components/content/selectedIngredientsCaption';
import LoadingBackdrop from '@/components/feedback/loadingBackdrop';
import AllIngredientsSelector from '@/components/selectors/allIngredientsSelectors';
import { useIngredientsContext } from '@/context/IngredientsContext';
import { useGenerateRecipe } from '@/hook/useGenerateRecipe';
import Box from '@mui/material/Box';

export default function Home() {
  const { recipe, generateRecipe, loading } = useGenerateRecipe();
  const { state } = useIngredientsContext();

  return (
    <main>
      <Box className="">
        <Box className="m-auto max-w-2xl px-6 lg:px-0  lg:max-w-5xl items-center justify-between font-mono text-sm">
          <Box
            className="bg-white rounded-lg p-10 my-20"
            style={{ position: 'relative' }}
          >
            <Box className="pb-10">
              <AllIngredientsSelector />
            </Box>

            <Box className="pb-10">
              <SelectedIngredientsCaption />
            </Box>

            {recipe && (
              <Box className="pb-10" id="recipe">
                <RecipeContent recipe={recipe} />
              </Box>
            )}

            <FixedButton
              disabled={state.ingredientsList.length > 0 ? false : true}
              handleClick={generateRecipe}
              label={recipe ? 'Obtener nueva receta' : 'Obtener receta'}
            />
          </Box>
        </Box>
      </Box>
      <LoadingBackdrop loading={loading} />
    </main>
  );
}
