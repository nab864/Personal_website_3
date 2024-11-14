import About from "./Sections/about";
import Experience from "./Sections/experience";
import Education from "./Sections/education";
export default function Home() {
  return (
    <div className="mainsection">
      <About />
      <Education />
      <Experience />
    </div>
  );
}
