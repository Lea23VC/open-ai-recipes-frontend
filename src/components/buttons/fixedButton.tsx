import { Box, Button, Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
export default function FixedButton({
  handleClick,
  disabled,
  label,
}: {
  handleClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <Box className="fixed bottom-14 right-10 z-50">
      <Button
        className="px-6 py-3"
        disabled={disabled}
        variant="contained"
        onClick={handleClick}
        startIcon={<LocalDiningIcon fontSize="large" />}
      >
        <Typography variant="button" className="font-bold text-base">
          {label}
        </Typography>
      </Button>
    </Box>
  );
}
