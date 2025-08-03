import Footer from "../../sections/Footer";
import Header from "@/components/Header";
import Experience from "../../sections/Experience";
import AboutMe from "../../sections/AboutMe";
import Potfolio from "../../sections/Portfolio";
import Skills from "../../sections/Skills";
import Career from "../../sections/Career";
import Recomendations from "../../sections/Recomendations";
import Contact from "../../sections/Contact";
import { useTranslations } from "next-intl";

export default function Home() {

  return (
    <>
      <div className="my-8 mx-6 md:my-9 md:mx-36" id="App">
        <Header />
        <Experience />
        <AboutMe />
        <Potfolio />
        <Skills />
        <Career />
        <Recomendations />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
