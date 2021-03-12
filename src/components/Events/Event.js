import React from "react";
import "./Events.css";
import { ColorScheme } from "../../config";

const Event = ({ info }) => {
  return (
    <div
      style={{ backgroundColor: ColorScheme[info.event_type] }}
      className="event"
    >
      {info.name}
      {info.event_type}
    </div>
  );
};

export default Event;
