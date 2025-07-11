import { useState } from 'react';
import { registerUser } from '../services/api';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [msg, setMsg] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setMsg('Registered successfully. You can now log in.');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <TextField name="username" label="Username" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button type="submit" variant="contained" fullWidth>Register</Button>
      {msg && <Typography mt={2}>{msg}</Typography>}
    </Box>
  );
}
