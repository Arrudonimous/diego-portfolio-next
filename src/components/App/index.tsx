
import Experience from '@/sections/Experience';
import '../../styles/main.css';
import Header from '../Header';
import AboutMe from '@/sections/AboutMe';
import Potfólio from '@/sections/Portfolio';
import Skills from '@/sections/Skills';
import Career from '@/sections/Career';
import Recomendations from '@/sections/Recomendations';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <>
      <div className="my-8 mx-6 md:my-9 md:mx-36" id="App">
        <Header />
        <Experience />
        <AboutMe />
        <Potfólio />
        <Skills />
        <Career />
        <Recomendations />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
