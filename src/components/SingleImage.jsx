import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function SingleImage(props) {
  return (
    <LazyLoadImage
      effect="blur"
      src={props.src}
      alt={`taken by author ${props.author}`}
    />
  );
}
