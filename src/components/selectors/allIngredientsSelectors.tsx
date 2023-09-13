import { useFetchIngredients } from '@/hook/useFetchIngredients';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IngredientsSelector from './ingredientsSelector';
import Grid from '@mui/material/Grid';

export default function AllIngredientsSelector() {
  const { ingredients, loading, called } = useFetchIngredients();

  return (
    <Box>
      <Box className="pb-10">
        <Typography variant="h3">Seleccione los ingredientes</Typography>
      </Box>

      <Grid container spacing={3}>
        {ingredients?.map((ingredient, index) => (
          <Grid item key={index} xs={12} lg={6}>
            <Box className="pb-4">
              <Typography variant="h4" className="!text-base">
                {ingredient.label}
              </Typography>
            </Box>
            <Box className="pb-6">
              <IngredientsSelector ingredientList={ingredient} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
