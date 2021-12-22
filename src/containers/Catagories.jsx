import React from "react";
import "../styles/Catagories.css";
import MiddleButtons from "../components/MiddleButtons";

export default function Catagories() {
  const buttons = [
    { class: "active", text: "Photo & Videos" },
    { text: "Map" },
    { text: "360 View" },
  ];
  return (
    <div id="catagories">
      {buttons.map((btn) => (
        <MiddleButtons text={btn.text} classes={btn.class} />
      ))}
    </div>
  );
}
