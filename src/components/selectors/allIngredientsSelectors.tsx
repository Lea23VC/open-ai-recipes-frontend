import { useFetchIngredients } from '@/hook/useFetchIngredients';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IngredientsSelector from './ingredientsSelector';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useIngredientsContext } from '@/context/IngredientsContext';

export default function AllIngredientsSelector() {
  const { ingredients } = useFetchIngredients();
  const { state, dispatch } = useIngredientsContext();

  return (
    <Box>
      <Box className="pb-10">
        <Typography
          className="font-roboto text-black text-3xl font-bold"
          variant="h3"
        >
          Seleccione los ingredientes
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {ingredients?.map((ingredient, index) => (
          <Grid item key={index} xs={12} lg={6}>
            <Box className="pb-3">
              <Typography
                variant="h4"
                className="!text-base font-robot text-black font-semibold"
              >
                {ingredient.label}
              </Typography>
            </Box>
            <Box className="pb-6">
              <IngredientsSelector ingredientList={ingredient} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box>
        <Button
          onClick={() => {
            dispatch({
              type: 'RESET',
            });
          }}
          variant="contained"
          className="bg-purple-500 text-white"
        >
          Limpiar ingredientes
        </Button>
      </Box>
    </Box>
  );
}
