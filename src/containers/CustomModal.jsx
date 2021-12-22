import React from "react";
import { Modal, Switch } from "antd";
import "../styles/CustomModal.css";
import Navigation from "./Navigation";
import AdditionalData from "../components/AdditionalData";

export default function CustomModal(props) {
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
    </Modal>
  );
}
