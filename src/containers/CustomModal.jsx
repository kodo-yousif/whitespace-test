import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "../styles/CustomModal.css";
import Navigation from "./Navigation";
import AdditionalData from "../components/AdditionalData";
import ImagesComponent from "../components/Images";
import Catagories from "./Catagories";
import axios from "axios";

export default function CustomModal(props) {
  const [album, setalbum] = useState([]);
  useEffect(getimages, [props.Selected]);

  function getimages() {
    setalbum([]);
    let counter = 0;
    let temp = [];
    props.Selected.forEach((imageId) => {
      axios
        .get(`https://picsum.photos/id/${imageId}/info`)
        .then((res) => {
          counter++;
          temp = [...temp, res.data];
        })
        .catch(() => {
          counter++;
        })
        .finally(() => {
          if (counter === 3) setalbum(temp);
        });
    });
  }
  return (
    <Modal
      wrapClassName="customModal"
      closable={false}
      title="Basic Modal"
      visible={props.switch}
      onCancel={() => props.SetSwitch(false)}
      footer={false}
      width="90vw"
    >
      <Navigation
        switch={props.SetSwitch}
        additional={true}
        MoreStyle={{ border: "none" }}
      />
      <AdditionalData />
      <Catagories />
      <ImagesComponent album={album} />
    </Modal>
  );
}
