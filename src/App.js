import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import CyberSecurity from './Pages/Services/CyberSecurity/CyberSecurity';
import Blogs from './Pages/Blogs/Blogs';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/cyber-security" element={<CyberSecurity />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;