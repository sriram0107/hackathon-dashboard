import React, { useState } from "react";
import "./Events.css";
import { ColorScheme } from "../../config";

const Event = ({ info, changeClicked, changemodalInfo }) => {
  return (
    <div
      style={{ backgroundColor: ColorScheme[info.event_type] }}
      className="event"
      onClick={() => {
        changeClicked(true);
        changemodalInfo(info);
      }}
    >
      <p>{info.name}</p>
    </div>
  );
};

export default Event;
