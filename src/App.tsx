import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import CareerGoals from './pages/CareerGoals';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;