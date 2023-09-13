import { useIngredientsContext } from '@/context/IngredientsContext';
import getAllIngredientsFromList from '@/utils/getAllIngredientsFromList';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function SelectedIngredientsCaption() {
  const { state, dispatch } = useIngredientsContext();
  const { ingredientsList } = state;

  const allIngredients = getAllIngredientsFromList(ingredientsList);

  return (
    <Box>
      <Box className="pb-4">
        <Typography variant="h6" className="text-black font-roboto">
          Ingredientes seleccionados:
        </Typography>
      </Box>
      <Grid container columnSpacing={5} rowSpacing={2}>
        {allIngredients.map((ingredient, index) => (
          <Grid item key={index}>
            <Typography variant="body1" className="text-black font-roboto">
              {ingredient}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
