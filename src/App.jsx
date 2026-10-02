import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Challenges from './pages/Challenges';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import Profile from './pages/Profile';
import BodyGoals from './pages/BodyGoals';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Toast />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/body-goals" element={<BodyGoals />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
