import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
          <LazyLoadImage
            key={image.id}
            preview={false}
            effect="blur"
            //   loading="lazy"
            src={image.download_url}
            alt={`taken by author ${image.author}`}
          />
        ))}
      </ul>
    </div>
  );
}
