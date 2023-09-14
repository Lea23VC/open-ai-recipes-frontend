import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

export default function LoadingBackdrop({ loading }: { loading: boolean }) {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loading}
    >
      <Box>
        <Box className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </Box>
    </Backdrop>
  );
}
