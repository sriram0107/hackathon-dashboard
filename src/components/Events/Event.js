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
      <text>
        {`${new Date(info.start_time)}` - `${new Date(info.end_time)}`}
      </text>
      <p>{info.name}</p>
    </div>
  );
};

export default Event;
