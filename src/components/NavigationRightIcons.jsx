import React from "react";
import ShareIcon from "../assets/ShareIcon.svg";
import HeartIcon from "../assets/HeartIcon.svg";
import Close from "../assets/Close.svg";

export default function NavigationRightIcons(props) {
  return (
    <div className="nav_right">
      <div className="icons">
        <img src={ShareIcon} alt="share icon" />
        <span>Share</span>
      </div>
      <div className="icons">
        <img src={HeartIcon} id="heart_icon" alt="heart icon" />
        {props.additional ? <span>Save</span> : ""}
      </div>
      {props.additional && (
        <div className="icons" onClick={() => props.switch(false)}>
          <img src={Close} id="CloseIcon" alt="closing icon" />
        </div>
      )}
    </div>
  );
}
