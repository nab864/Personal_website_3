import Job from "../Components/job";

export default function Experience() {
  return (
    <div className="portfolio">
      <h1>Experience</h1>
      <Job
        title={["Research Assistant"]}
        employmentDates={["July 2023 - Present"]}
        companyName="Prieto Battery"
        jobDescription={[
          [
            "Manufactures and improves the performance of fast-charging three-dimensional battery cells.",
            "Developed and maintains Python scripts to automate the generation and data entry of Excel spreadsheets, leveraging API calls to interact with the company's SQL database. This solution streamlined data retrieval, improved accuracy, and reduced manual workload by 25%.",
            "Formulated and improved cathode cell slurry that requires less solvent, facilitating substantial reductions in both total deposition times, as well as electronic resistance across the cell, and achieving faster charge times.",
          ],
        ]}
        jobSkills={["Python", "SQL", "Data Analysis", "Electrochemistry"]}
        url="https://prieto.com/"
      />
      <Job
        title={["Senior Research Associate"]}
        employmentDates={["March 2022 - September 2022"]}
        companyName="Inscripta"
        jobDescription={[
          [
            "Developed surface chemistry and lipid nanoparticle synthesis processes to facilitate human cell transfection with gene editing reagents for automated, high-throughput CRISPR platform. Resulted in shelf-stable reagents (lasting six months) produced in consolidated process to support wider efforts of three teams and saving hundreds of man hours. Surface chemistry was de-risked 10 months ahead of schedule.",
            "Enhanced analytical techniques for lipoplex morphology quality control, as well as to ascertain transfection and editing efficiency improvements.",
            "Crafted and executed characterization strategies for product and process through capability gap analysis, QC development, QC validation, and QC deployment to wider teams across three sites via training and SOP authorship.",
          ],
        ]}
        jobSkills={["Data Analysis", "Quality Control", "CRISPR"]}
        url="https://www.inscripta.com/"
      />
      <Job
        title={["Chemist II", "R&D Chemist"]}
        employmentDates={["October 2021 - February 2022", "January 2018 - September 2021"]}
        companyName="Access Sensor Technologies"
        jobDescription={[
          [
            "Expanded manufacturing practices for a point-of-care disposable ELISA, capillary-driven microfluidic device used in the detection of COVID-19 antigens and antibodies. Efforts produced significant improvements in flow reproducibility, as well as a 90% increase in device coating uniformity.",
            "Created automated regression models using Microsoft Excel to quantify metal concentrations in aqueous samples from UV-Vis and potentiostat outputs.",
            "Managed field sample collection and data analysis and recommended next steps to research lead pollution in soils resulting in the preparation and acceptance of a peer-reviewed journal article (2021).",
          ],
          [
            "Enhanced and expanded manufacturing of On-Target® microfluidic paper analytical device (µPAD) technologies: reagent ink printing, printer modification and assembly, and assay development for the detection of various metals in aqueous samples.",
            "Directed production of a field kit to characterize heavy metal pollution in soils, coordinating across teams to validate methods and create a prototype. Optimized electrochemical methods for point-of-use detection (cyclic and square wave anodic/cathodic stripping voltammetries) to lower limits of detection and prepare a simple-to-use product.",
            "Improved the manufacturing of carbon electrodes to be used by internal teams, reaching a 95% manufacturing throughput success rate."
          ],
        ]}
        jobSkills={["Data Analysis", "Electrochemistry", "Product Development", "Image Analysis"]}
        url="https://www.accsensors.com/"
      />
    </div>
  );
}
