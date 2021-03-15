import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Event from "../Events/Event";
import Event_Page from "../Events/Event_Page";
import { GET_API_ENDPOINT, EVENTS, PRIVATE, PUBLIC } from "../../config";
import "./Home.css";

const Home = ({ login, events, changeEvents }) => {
  // Determines if the user has clicked on a specific card - triggers modal
  const [clicked, changeClicked] = useState(false);
  // State to keep track of the info of the clicked modal
  const [modalInfo, changemodalInfo] = useState({});
  // True when the API is fetching results false otherwise
  const [loading, changeLoading] = useState(true);
  // stores the search results
  const [search, changeSearch] = useState([]);

  // Change occurs when user logs in and out
  useEffect(async () => {
    // Trigger loading icon and making calls to the API
    changeLoading(true);
    var temp = [];
    for (let pos = 1; pos <= EVENTS; ++pos) {
      const res = await fetch(GET_API_ENDPOINT(pos));
      const data = await res.json();
      console.log("data -> ", pos, data);
      if (login || data.data.event.permission === PUBLIC) {
        temp.push(data);
      }
    }
    // sort results in ascending order of starting times
    temp.sort((d1, d2) => {
      return d1.data.event.start_time - d2.data.event.start_time;
    });
    changeEvents(temp);
    // Turn off loading icon - results are available
    changeLoading(false);
  }, [login]);
  return (
    <div className="home">
      {clicked ? (
        <Event_Page
          info={modalInfo}
          clicked={clicked}
          changeClicked={changeClicked}
          login={login}
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
      {!login ? (
        <p className={!login ? "login_prompt" : "no_prompt"}>
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
