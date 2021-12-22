import React, { useEffect } from "react";
import "../styles/Images.css";
import axios from "axios";

export default function Images() {
  useEffect(startUp, []);

  function startUp() {
    console.log("slaw");
  }

  return <div id="images">images</div>;
}
