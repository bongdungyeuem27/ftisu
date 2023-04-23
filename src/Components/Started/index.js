import React, { useState, useRef, useEffect } from "react";
import "./started.css";
import background from "./background.jpg";

export default function Index() {
  const [windowSize, setWindowSize] = useState(window.screen.width);
  useEffect(() => {
    const resize = () => {
      // setWindowSize(document.body.offsetWidth)
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <section
      id="getstarted"
      className="row dark-scheme"
      style={{
        position: "relative",
        boxSizing: "border-box",
        backgroundPosition: "center",
        background: `url(${background})`,
        minHeight: 700,
        backgroundSize: "cover",
      }}
    ></section>
  );
}
