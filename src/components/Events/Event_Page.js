import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VideocamIcon from "@material-ui/icons/Videocam";
import PictureTemplate from "../../assets/pictemp.png";
import Moment from "react-moment";
import "moment-timezone";
import "./Events.css";

const EventPage = ({ info, clicked, changeClicked, login }) => {
  return (
    <div className="event_info_modal">
      <div className="close_icon">
        <CloseIcon
          style={{
            color: "black",
            cursor: "pointer",
            fontSize: "30px",
            margin: "10px",
          }}
          onClick={() => {
            changeClicked(false);
          }}
        />
      </div>
      <div className="info_area">
        <h1>{info.name}</h1>
        <text>
          <Moment date={new Date(info.start_time)} format="DD/MM/YY hh:mm" /> -{" "}
          <Moment date={new Date(info.end_time)} format="hh:mm" />
        </text>
      </div>
      <div className="desc">
        <p>{info.description}</p>
      </div>
      <div className="event_footer">
        <div className="speakers">
          <h4>Speakers</h4>
          {info.speakers.length === 0 ? "None" : <></>}
          {info.speakers.map((speaker) => {
            return (
              <div className="speaker">
                <img className="template" src={PictureTemplate} alt="pic" />
                <p>{speaker.name}</p>
              </div>
            );
          })}
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={info.public_url}>
            <YouTubeIcon style={{ color: "red", fontSize: "70px" }} />
          </a>
          {login ? (
            <a target="_blank" rel="noreferrer" href={info.private_url}>
              <VideocamIcon style={{ color: "black", fontSize: "70px" }} />
            </a>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
