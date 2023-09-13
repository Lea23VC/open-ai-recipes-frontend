'use client';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function RecipeContent({ recipe }: { recipe: string }) {
  const StyledHTMLBox = styled(Box)(({ theme }) => ({
    '& h1': {
      color: 'white',
      fontSize: '2.5rem',
      paddingBottom: '2rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
  }));

  return (
    <Box>
      <Box className="pb-5">
        <Typography variant="h3">Contenido de la receta</Typography>
      </Box>
      <StyledHTMLBox>
        <div dangerouslySetInnerHTML={{ __html: recipe }} />
      </StyledHTMLBox>
    </Box>
  );
}
