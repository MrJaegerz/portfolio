import './styles/styles.css'

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


export default function App() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <Navbar />
      <main>
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
      </main>
    </div>

  );
}
