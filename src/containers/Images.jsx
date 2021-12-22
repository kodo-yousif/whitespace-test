import React, { useEffect, useState } from "react";
import ImagesComponent from "../components/Images";
import "../styles/Images.css";
import axios from "axios";
import CustomModal from "../components/CustomModal";

export default function Images() {
  const [images, setImages] = useState([]);
  const [ModalSwitch, SetSwitch] = useState(false);
  const [Selected, SetSelect] = useState([]);
  useEffect(startUp, []);

  function startUp() {
    axios.get("https://picsum.photos/v2/list?page=2&limit=10").then((res) => {
      setImages(res.data);
    });
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <ImagesComponent
        album={images}
        SetSwitch={SetSwitch}
        SetSelect={SetSelect}
      />
      <CustomModal
        SetSwitch={SetSwitch}
        switch={ModalSwitch}
        Selected={Selected}
      />
    </div>
  );
}
