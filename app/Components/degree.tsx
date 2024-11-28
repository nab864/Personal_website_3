"use client";

import { headers } from "next/headers";
import { useRouter } from "next/navigation";

interface DegreeProps {
  title: string;
  dates: string;
  school: string;
  url: string;
}

export default function Degree({
  title,
  dates,
  school,
  url,
}: DegreeProps) {
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      window.open(url);
    }
  };
  return (
    <div className={`degree${url ? " has_link" : ""}`} onClick={handleOnClick}>
      <div className="degree-header">
        <h2>{title}</h2>
        <h2>{dates}</h2>
      </div>
      <h3 className="school-name">{school}</h3>
    </div>
  );
}
