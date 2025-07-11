import React from 'react';
import { BrowserRouter   as Router, Routes, Route, Navigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import './assets/styles/Main.css'
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import Gallary from './pages/Gallary';
import UserList from './pages/UserList';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AuthRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};

function App() {
  return (
   
    <Router>
       <AuthProvider>
      <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route 
            path="/login" 
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            } 
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
        </Routes>
        </AuthProvider>
    </Router>

  );
}

export default App;