import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, and Route
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home'; // Assume this is your home page
// import Gallery from './pages/Banner'; // Create a Gallery component
// import Contact from './pages/ContactUs'; // Create a Contact component
import ContactUs from './pages/ContactUs/ContactUs';
// import Services from './pages2/Services';
import Features from "./pages/Features/Features2"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/features" element={<Features />} />  {/* Servicepage */}
        <Route path="/contact" element={<ContactUs />} />  {/* Contact Us page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
