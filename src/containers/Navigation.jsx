import React from "react";
import NavigationRightIcons from "../components/NavigationRightIcons";
import "../styles/Navigation.css";

export default function Navigation(props) {
  return (
    <div id="navigation" style={props.MoreStyle}>
      <span className="redHover">Empire World</span>
      <NavigationRightIcons
        additional={props.additional}
        switch={props.switch}
      />
    </div>
  );
}
