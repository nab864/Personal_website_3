import Link from "next/link";
import Button from "./button";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Kai Fuller</h1>
      <div className="sidebar-links">
        <Link href={"#top"} className="link">
          <Button text="About" />
        </Link>
        <Link href={"#education"} className="link">
          <Button text="Education" />
        </Link>
        <Link href={"#experience"} className="link">
          <Button text="Experience" />
        </Link>
        <Link href={"#portfolio"} className="link">
          <Button text="Portfolio" />
        </Link>
      </div>
    </div>
  );
}
