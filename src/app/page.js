import About from "@/components/About";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Projects/>
    </div>
  );
}
