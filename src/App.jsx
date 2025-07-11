import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route
      path="/login"
      element={
        token ? <Navigate to="/dashboard" /> : <Login />
      }
    /> */}
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/portfolio" element={ <Portfolio /> } />
      <Route path="/gallery" element={ <Gallery /> } />
      {/* <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
    </Routes>
      <Footer />
    </Router>
  );
}

export default App;
