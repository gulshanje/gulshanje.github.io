import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 2,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Mursu ji</Typography>
    </Box>
  );
}
