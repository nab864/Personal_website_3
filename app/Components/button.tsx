"use client";

import { useEffect, useState } from "react";

export default function Button({ text }: { text: string }) {
  const [elementPosition, setElementPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  useEffect(() => {
    const element = document.getElementsByClassName(text.toLowerCase())[0];
    const coordinates = element.getBoundingClientRect();
    setElementPosition(coordinates.y);
  }, []);

  useEffect(() => {
    setCurrentPosition(window.scrollY);
  }, [currentPosition]);

  const handleClick = () => {
    window.scroll(0, elementPosition);
  };
  return (
    <button
      className={currentPosition < 10 ? "active" : ""}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
