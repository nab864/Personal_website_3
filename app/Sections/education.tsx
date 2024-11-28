import Degree from "../Components/degree";

export default function Education() {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <Degree
        title="Fullstack Software Development"
        dates="April 2024 - October 2024"
        school="Colorado State University"
        url="/Kai_Zachary_Fuller_CSU.pdf"
      />
      <Degree
        title="Bachelor of Chemistry, ACS Certified"
        dates="August 2015 - December 2017"
        school="Colorado State University"
        url="/Bachelor Degree.pdf"
      />
      <Degree
        title="Associate of Science"
        dates="August 2013 - May 2015"
        school="Northeastern Junior College"
        url= ""
      />
    </div>
  );
}
