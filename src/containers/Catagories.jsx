import React from "react";
import "../styles/Catagories.css";
import MiddleButtons from "../components/MiddleButtons";

export default function Catagories() {
  const buttons = [
    {
      class: "active redHover",
      text: "Photo & Videos",
    },
    { text: "Map", class: "redHover" },
    { text: "360 View", class: "redHover" },
  ];
  return (
    <div id="catagories">
      {buttons.map((btn) => (
        <MiddleButtons key={btn.text} text={btn.text} classes={btn.class} />
      ))}
    </div>
  );
}
