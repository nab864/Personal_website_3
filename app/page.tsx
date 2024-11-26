import About from "./Sections/about";
import Experience from "./Sections/experience";
import Education from "./Sections/education";
import Portfolio from "./Sections/portfolio";
export default function Home() {
  return (
    <div className="mainsection">
      <About />
      <Education />
      <Experience />
      <Portfolio />
    </div>
  );
}
