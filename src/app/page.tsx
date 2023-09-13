'use client';

import SelectedIngredientsCaption from '@/components/content/selectedIngredientsCaption';
import AllIngredientsSelector from '@/components/selectors/allIngredientsSelectors';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Box className="pb-10">
          <AllIngredientsSelector />
        </Box>
        <Box>
          <SelectedIngredientsCaption />
        </Box>
      </Box>
    </main>
  );
}
