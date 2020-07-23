import React from "react";

import close from "../../icons/close.png";
import online from "../../icons/online.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={online} alt="online image" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img className="closeIcon" src={close} alt="close image" />
      </a>
    </div>
  </div>
);

export default InfoBar;
