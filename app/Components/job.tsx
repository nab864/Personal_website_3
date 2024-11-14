export default function Job({
  title,
  employmentDates,
  companyName,
  jobDescription,
  jobSkills
}: {
  title: string;
  employmentDates: string;
  companyName: string;
  jobDescription: string[];
  jobSkills: string[]
}) {

  const test = jobDescription.forEach((job) => {
    return <li>{job}</li>
  })
  return (
    <div className="job">
      <div className="job-header">
        <h2>{title}</h2>
        <h2>{employmentDates}</h2>
      </div>
      <h3 className="company-name">{companyName}</h3>
      <ul>
        {jobDescription.map((job) => {
          return <li>{job}</li>
        })}
      </ul>
      <div className="skills">
        {jobSkills.map(skill => {
          return <div className="skill">{skill}</div>
        })}
      </div>
    </div>
  );
}
