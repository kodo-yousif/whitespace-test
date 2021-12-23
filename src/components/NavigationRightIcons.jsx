import React, { useState } from "react";
import ShareIcon from "../assets/ShareIcon.svg";
import RedShareIcon from "../assets/RedShareIcon.svg";
import HeartIcon from "../assets/HeartIcon.svg";
import RedHeartIcon from "../assets/RedHeartIcon.svg";
import Close from "../assets/Close.svg";

export default function NavigationRightIcons(props) {
  const [isRed, setChange] = useState(false);
  return (
    <div className="nav_right">
      <div className="icons scrollAnimateIcon">
        <img className="go_go_icon" src={ShareIcon} alt="share icon" />
        <img className="alticon" src={RedShareIcon} alt="red share icon" />
        <span className="redHover">Share</span>
      </div>
      <div
        className={`icons clickAnimateIcon ${
          isRed ? "clickedAnimateIcon" : ""
        }`}
        onClick={() => setChange(!isRed)}
      >
        <img
          className="go_go_icon"
          src={HeartIcon}
          id="heart_icon"
          alt="heart icon"
        />
        <img className="alticon" src={RedHeartIcon} alt="red heart icon" />
        {props.additional ? (
          <span style={{ color: isRed ? "red" : "" }} className="redHover">
            Save
          </span>
        ) : (
          ""
        )}
      </div>
      {props.additional && (
        <div className="icons" onClick={() => props.switch(false)}>
          <img src={Close} id="CloseIcon" alt="closing icon" />
        </div>
      )}
    </div>
  );
}
