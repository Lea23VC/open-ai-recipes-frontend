'use client';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function RecipeContent({ recipe }: { recipe: string }) {
  const StyledHTMLBox = styled(Box)(({ theme }) => ({
    '*': {
      fontFamily: 'Roboto, sans-serif',
      color: theme.palette.text.primary,
    },
    '& h1': {
      fontSize: '2.2rem',
      fontWeight: 700,
      paddingBottom: '1rem',
      lineHeight: '2.5rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },

    '& h2, & h3': {
      paddingTop: '1.8rem',
      fontSize: '2rem',
      fontWeight: 700,
      paddingBottom: '1.7rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },

    '& ul, & ol': {
      listStyle: 'disc',
      listStylePosition: 'inside',
      fontSize: '1rem',
      fontWeight: 400,
      paddingBottom: '2rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },

    '& li': {
      paddingBottom: '0.3rem',
    },

    '& p': {
      fontSize: '1rem',
    },
  }));

  return (
    <Box>
      <Box className="pb-5">
        <Typography variant="h3" className="font-roboto text-black">
          Contenido de la receta
        </Typography>
      </Box>
      <StyledHTMLBox>
        <div dangerouslySetInnerHTML={{ __html: recipe }} />
      </StyledHTMLBox>
    </Box>
  );
}
