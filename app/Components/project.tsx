"use client";

export default function Project({
  title,
  img,
  url,
}: {
  title: string;
  img: string;
  url: string;
}) {
  const handleOnClick = () => {
    window.open(url, "_blank")?.focus();
  };
  return (
    <div className="project">
      <h2>{title}</h2>
      <div className="img-container" onClick={handleOnClick}>
        <img src={img} alt="KnowItAll" />
        <div className="blur-container">
          <h1>Visit</h1>
        </div>
      </div>
    </div>
  );
}
