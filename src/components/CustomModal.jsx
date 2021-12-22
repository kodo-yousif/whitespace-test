import React from "react";
import { Modal } from "antd";
import "../styles/CustomModal.css";

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
      {props.Selected.map((el) => (
        <div>{el}</div>
      ))}
    </Modal>
  );
}
