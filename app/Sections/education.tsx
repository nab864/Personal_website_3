import Degree from "../Components/degree";

export default function Education() {
  return (
    <div className="education section" id="education">
      <h1>Education</h1>
      <Degree
        title="Fullstack Software Development"
        dates="Apr. 2024 - Oct. 2024"
        school="Colorado State University"
        url="/Kai_Zachary_Fuller_CSU.pdf"
      />
      <Degree
        title="Bachelor of Chemistry"
        dates="Aug. 2015 - Dec. 2017"
        school="Colorado State University"
        url="/Bachelor Degree.pdf"
      />
      <Degree
        title="Associate of Science"
        dates="Aug. 2013 - May 2015"
        school="Northeastern Junior College"
        url=""
      />
    </div>
  );
}
