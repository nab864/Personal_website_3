import Job from "../Components/job";

export default function Experience() {
  return (
    <div className="portfolio">
      <h1>Experience</h1>
      <Job
        title="Research Assistant"
        employmentDates="July 2023 - Present"
        companyName="Prieto Battery"
        jobDescription={[
          "Job Description 1",
          "Job Description 2",
          "Job Description 3",
        ]}
        jobSkills={["Python", "Data Analysis", "Electrochemistry"]}
      />
    </div>
  );
}
