
import Button from "./button";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Kai Fuller</h1>
      <div className="sidebar-links">
        <Button text="About" />

        <Button text="Education" />

        <Button text="Experience" />

        <Button text="Portfolio" />
      </div>
    </div>
  );
}
