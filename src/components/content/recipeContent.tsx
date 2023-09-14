'use client';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function RecipeContent({
  recipe,
  error,
}: {
  recipe: string;
  error: string | null | undefined;
}) {
  const StyledHTMLBox = styled(Box)(({ theme }) => ({
    '*': {
      fontFamily: 'Roboto, sans-serif',
      color: theme.palette.text.primary,
    },
    '& h1': {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: '2.5rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.0rem',
      },
    },

    '& h2, & h3': {
      paddingTop: '1.4rem',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingBottom: '1.7rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '1.0rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.90rem',
      },
    },

    '& ul, & ol': {
      listStyle: 'disc',
      listStylePosition: 'inside',
      fontSize: '1.2rem',
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
      paddingTop: '1.2rem',
      fontSize: '1.2rem',
    },
  }));

  return (
    <Box>
      <Box className="pb-5">
        <Typography
          className="font-roboto text-black text-3xl font-bold"
          variant="h3"
        >
          Resultado:
        </Typography>
      </Box>
      {!error ? (
        <StyledHTMLBox>
          <div dangerouslySetInnerHTML={{ __html: recipe }} />
        </StyledHTMLBox>
      ) : (
        <Typography variant="body1" className="text-base text-black">
          No se ha podido generar la receta. Intente nuevamente.
        </Typography>
      )}
    </Box>
  );
}
