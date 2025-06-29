import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import CareerGoals from './pages/CareerGoals';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Hobbies from './pages/Hobbies';

const App = () => {
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection) return;
      const homeBottom = homeSection.getBoundingClientRect().bottom;
      setNavbarHidden(homeBottom <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar hidden={navbarHidden} />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <CareerGoals />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton visible={navbarHidden} />
    </div>
  );
};

export default App;
