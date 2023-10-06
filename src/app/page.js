import About from "@/components/About";
import Contact from "@/components/Contract";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
      <Footer/>
    </div>
  );
}
