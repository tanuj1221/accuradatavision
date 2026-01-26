import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TrafficSurvey from './pages/TrafficSurvey';
import PeopleCounting from './pages/PeopleCounting';
import ParkingManagement from './pages/ParkingManagement';
import SafetyMonitoring from './pages/SafetyMonitoring';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Fire and forget tracking request
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: location.pathname,
        userAgent: navigator.userAgent
      })
    }).catch(err => console.error("Tracking error:", err));
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traffic-survey" element={<TrafficSurvey />} />
        <Route path="/people-counting" element={<PeopleCounting />} />
        <Route path="/parking-management" element={<ParkingManagement />} />
        <Route path="/safety-monitoring" element={<SafetyMonitoring />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin1221" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
