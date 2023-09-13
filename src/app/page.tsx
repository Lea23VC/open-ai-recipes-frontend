'use client';
import RecipeContent from '@/components/content/recipeContent';
import SelectedIngredientsCaption from '@/components/content/selectedIngredientsCaption';
import AllIngredientsSelector from '@/components/selectors/allIngredientsSelectors';
import { useGenerateRecipe } from '@/hook/useGenerateRecipe';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  const { recipe, generateRecipe, loading } = useGenerateRecipe();

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
              <Box className="pb-10">
                <RecipeContent recipe={recipe} />
              </Box>
            )}

            <Box>
              <Backdrop
                sx={{
                  color: '#fff',
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
              >
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              </Backdrop>
            </Box>
            <Box className="fixed bottom-14 right-10 z-50">
              <Button variant="contained" onClick={generateRecipe}>
                Obtener receta
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
