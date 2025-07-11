import axios from 'axios';


export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const logoutUser = async () => {
  try {
    await api.post('/logout');
  } catch (error) {
    console.error(error);
  }
};

const api = axios.create({
  baseURL: 'https://mursuji.pythonanywhere.com',
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
