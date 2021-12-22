import React from "react";
import ShareIcon from "../assets/ShareIcon.svg";
import HeartIcon from "../assets/HeartIcon.svg";

export default function NavigationRightIcons() {
  return (
    <div className="nav_right">
      <div className="icons">
        <img src={ShareIcon} alt="share icon" />
        <span>Share</span>
      </div>
      <div className="icons">
        <img src={HeartIcon} id="heart_icon" alt="heart icon" />
      </div>
    </div>
  );
}
