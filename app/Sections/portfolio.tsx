import Project from "../Components/project"

export default function Portfolio() {

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="projects-container">
        <Project title="KnowItAll (Trivia)" img="/KnowItAll.png" url="https://knowitall-trivia.netlify.app/"/>
        {/* <Project /> */}
      </div>
    </div>
  )
}