import Link from "next/link";
import Button from "./button";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Kai Fuller</h1>
      <div className="sidebar-links">
        <Link href={"/"}>
          <Button text="Home" />
        </Link>
        <Link href={"/about"}>
          <Button text="About" />
        </Link>
        <Link href={"/portfolio"}>
          <Button text="Portfolio" />
        </Link>
      </div>
    </div>
  );
}
