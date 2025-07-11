import { useEffect, useState } from 'react';
import {
  Box, Paper, Typography, TextField, Button,
  FormControlLabel, Checkbox
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: '', password: '' });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  // 🔐 Auto login if token exists
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  useEffect(() => {
    const savedUsername = localStorage.getItem('rememberedUsername');
    if (savedUsername) {
      setForm(prev => ({ ...prev, email: savedUsername }));
      setRemember(true);
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckbox = (e) => setRemember(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      login(data.token);

      if (remember) {
        localStorage.setItem('rememberedUsername', form.email);
        localStorage.setItem('token', data.token);
      } else {
        localStorage.removeItem('rememberedUsername');
        sessionStorage.setItem('token', data.token);
      }

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        height: '75vh',
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          minWidth: 360,
          width: '100%',
          maxWidth: 400,
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          bgcolor: 'white',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight={600}>
          User Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={handleCheckbox}
                color="primary"
              />
            }
            label="Remember me"
          />
          {error && (
            <Typography color="error" mt={1}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              borderRadius: '999px',
              fontWeight: 600,
              textTransform: 'none',
              py: 1.3,
              fontSize: '1rem',
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
