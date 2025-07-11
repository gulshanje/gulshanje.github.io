import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../services/api';
import { Box, Typography } from '@mui/material';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile().then(setProfile).catch(console.error);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">User Profile</Typography>
      {profile ? (
        <>
          <Typography mt={2}><b>Username:</b> {profile.username}</Typography>
          <Typography><b>Email:</b> {profile.email}</Typography>
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
}
