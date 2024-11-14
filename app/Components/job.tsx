"use client";

export default function Job({
  title,
  employmentDates,
  companyName,
  jobDescription,
  jobSkills,
  url,
}: {
  title: string[];
  employmentDates: string[];
  companyName: string;
  jobDescription: string[][];
  jobSkills: string[];
  url: string;
}) {
  const handleOnClick = () => {
    if (url) {
      window.open(url, "_blank")?.focus();
    }
  };
  return (
    <div className={`job${url ? " has_link" : ""}`} onClick={handleOnClick}>
      {title.map((currentTitle, index) => {
          return (
            <>
              <div className="job-header">
                <h2>{title[index]}</h2>
                <h2>{employmentDates[index]}</h2>
              </div>
              <h3 className="company-name">{companyName}</h3>
              <ul>
                {jobDescription[index].map((job) => {
                  return <li>{job}</li>;
                })}
              </ul>
            </>
          )
        })}
      <div className="skills">
        {jobSkills.map((skill) => {
          return <div className="skill">{skill}</div>;
        })}
      </div>
    </div>
  );
}
