// App.jsx
import React from 'react';
import Navbar from './Components/Navbar'; // Adjust the path if needed
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Skill from './Components/Skill';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
