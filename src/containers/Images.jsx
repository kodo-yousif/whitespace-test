import React, { useEffect, useState } from "react";
import ImagesComponent from "../components/Images";
import "../styles/Images.css";
import axios from "axios";

export default function Images() {
  const [images, setImages] = useState([]);
  useEffect(startUp, []);

  function startUp() {
    axios.get("https://picsum.photos/v2/list?page=2&limit=10").then((res) => {
      setImages(res.data);
    });
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <ImagesComponent album={images} />
    </div>
  );
}
