import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Event from "../Events/Event";
import Event_Page from "../Events/Event_Page";
import { GET_API_ENDPOINT, EVENTS, PRIVATE, PUBLIC } from "../../config";
import "./Home.css";

const Home = (props) => {
  // Determines if the user has clicked on a specific card - triggers modal
  const [clicked, changeClicked] = useState(false);
  // State to keep track of the info of the clicked modal
  const [modalInfo, changemodalInfo] = useState({});
  // List of all events
  const [events, changeEvents] = useState([]);
  // True when the API is fetching results false otherwise
  const [loading, changeLoading] = useState(true);

  // Change occurs when user logs in and out
  useEffect(async () => {
    // Trigger loading icon and making calls to the API
    changeLoading(true);
    var temp = [];
    for (let pos = 1; pos <= EVENTS; ++pos) {
      const res = await fetch(GET_API_ENDPOINT(pos));
      const data = await res.json();
      console.log("data -> ", pos, data);
      if (props.login || data.data.event.permission === PUBLIC) {
        temp.push(data);
      }
    }
    changeEvents(temp);
    changeLoading(false);
  }, [props.login]);
  return (
    <div className="home">
      {clicked ? (
        <Event_Page
          info={modalInfo}
          clicked={clicked}
          changeClicked={changeClicked}
          login={props.login}
        />
      ) : (
        <></>
      )}
      <p className="heading">Events</p>
      <div className="events_grid">
        {loading ? <CircularProgress /> : <></>}
        {events.map((event) => (
          <Event
            info={event.data.event}
            changeClicked={changeClicked}
            changemodalInfo={changemodalInfo}
          />
        ))}
      </div>
      {!props.login ? (
        <p className={!props.login ? "login_prompt" : "no_prompt"}>
          <>
            Login to see more<></>
            <b> exciting events!</b>
          </>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
