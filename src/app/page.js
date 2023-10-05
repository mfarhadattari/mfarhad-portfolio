import About from "@/components/About";
import Contact from "@/components/Contract";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

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
    </div>
  );
}
