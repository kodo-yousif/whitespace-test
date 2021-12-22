import React, { useEffect, useState } from "react";
import "../styles/Images.css";
import axios from "axios";

export default function Images() {
  const [images, setImages] = useState([]);
  useEffect(startUp, []);

  function startUp() {
    axios.get("https://picsum.photos/v2/list?page=2&limit=10").then((res) => {
      console.log("done");
      setImages(res.data);
    });
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <ul id="images">
        {images.map((image) => (
          <li key={image.id}>
            <img
              loading="lazy"
              src={image.download_url}
              alt={`taken by author ${image.author}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
