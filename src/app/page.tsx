'use client';
import RecipeContent from '@/components/content/recipeContent';
import SelectedIngredientsCaption from '@/components/content/selectedIngredientsCaption';
import AllIngredientsSelector from '@/components/selectors/allIngredientsSelectors';
import { useIngredientsContext } from '@/context/IngredientsContext';
import { useGenerateRecipe } from '@/hook/useGenerateRecipe';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  const { recipe, generateRecipe, loading } = useGenerateRecipe();
  const { state } = useIngredientsContext();

  return (
    <main>
      <Box className="">
        <Box className="m-auto max-w-5xl w-full items-center justify-between font-mono text-sm">
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

            <Box className="fixed bottom-14 right-10 z-50">
              <Button
                disabled={state.ingredientsList.length > 0 ? false : true}
                variant="contained"
                onClick={generateRecipe}
              >
                {recipe ? 'Obtener nueva receta' : 'Obtener receta'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <Box>
          <CircularProgress />
        </Box>
      </Backdrop>
    </main>
  );
}
