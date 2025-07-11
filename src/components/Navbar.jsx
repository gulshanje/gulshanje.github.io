import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mursu ji
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}
