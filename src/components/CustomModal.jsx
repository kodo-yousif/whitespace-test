import React from "react";
import { Modal } from "antd";

export default function CustomModal(props) {
  return (
    <div id="custom">
      <Modal
        title="Basic Modal"
        visible={props.switch}
        onCancel={() => props.SetSwitch(false)}
        footer={false}
      >
        {props.Selected.map((el) => (
          <div>{el}</div>
        ))}
      </Modal>
    </div>
  );
}
