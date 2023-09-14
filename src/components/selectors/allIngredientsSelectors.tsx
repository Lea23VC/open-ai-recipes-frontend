import { useFetchIngredients } from '@/hook/useFetchIngredients';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IngredientsSelector from './ingredientsSelector';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useIngredientsContext } from '@/context/IngredientsContext';
import Skeleton from '@mui/material/Skeleton';

export default function AllIngredientsSelector() {
  const { ingredients } = useFetchIngredients();
  const { state, dispatch } = useIngredientsContext();

  return (
    <Box>
      <Box className="pb-10">
        <Typography
          variant="h3"
          className="font-roboto text-black text-3xl font-bold"
        >
          Seleccione los ingredientes
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {ingredients && ingredients.length > 1
          ? ingredients.map((ingredient, index) => (
              <Grid item key={index} xs={12} lg={6}>
                <Box className="pb-3">
                  <Typography
                    variant="h4"
                    className="text-base font-robot text-black font-semibold"
                  >
                    {ingredient.label}
                  </Typography>
                </Box>
                <Box className="pb-6">
                  <IngredientsSelector ingredientList={ingredient} />
                </Box>
              </Grid>
            ))
          : new Array(8).fill(null).map((_, index) => (
              <Grid item key={index} xs={12} lg={6}>
                <Box className="pb-3">
                  <Skeleton
                    className="rounded"
                    variant="rectangular"
                    width={100}
                    height={20}
                    animation="wave"
                  />
                </Box>
                <Box className="pb-6">
                  <Skeleton
                    className="rounded"
                    variant="rectangular"
                    width={'100%'}
                    height={55}
                    animation="wave"
                  />
                </Box>
              </Grid>
            ))}
      </Grid>

      <Box>
        <Button
          onClick={() => {
            dispatch({ type: 'RESET' });
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
