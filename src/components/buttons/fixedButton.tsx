import { Box, Button } from '@mui/material';

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
      <Button disabled={disabled} variant="contained" onClick={handleClick}>
        {label}
      </Button>
    </Box>
  );
}
