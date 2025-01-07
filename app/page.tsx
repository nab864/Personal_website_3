import About from "./Sections/about";
import Experience from "./Sections/experience";
import Education from "./Sections/education";
import Portfolio from "./Sections/portfolio";
export default function Home() {
  return (
    <div className="mainsection">
      <h1 className="mobile-name">Kai Fuller</h1>
      <About />
      <Education />
      <Experience />
      <Portfolio />
    </div>
  );
}
