import React from "react";
import SingleImage from "./SingleImage";
export default function Images(props) {
  return (
    <div>
      <ul id="images">
        {props.album.map((image) => (
          <SingleImage
            key={image.id}
            Switch={props.SetSwitch}
            Select={props.SetSelect}
            id={image.id}
            src={image.download_url}
            author={image.author}
          />
        ))}
      </ul>
    </div>
  );
}
