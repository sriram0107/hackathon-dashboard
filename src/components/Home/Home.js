import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Event from "../Events/Event";
import EventPage from "../Events/Event_Page";
import { GET_API_ENDPOINT, EVENTS, PUBLIC } from "../../config";
import "./Home.css";

const Home = ({ login, events, changeEvents }) => {
  // Determines if the user has clicked on a specific card - triggers modal
  const [clicked, changeClicked] = useState(false);
  // State to keep track of the info of the clicked modal
  const [modalInfo, changemodalInfo] = useState({});
  // True when the API is fetching results false otherwise
  const [loading, changeLoading] = useState(true);

  // First change occurs when page is rendered and subsequent changes occur when user logs in and out
  useEffect(() => {
    async function fetchData() {
      // Trigger loading icon while making calls to the API
      changeLoading(true);
      var temp = [];
      const res = await fetch(GET_API_ENDPOINT());
      const data = await res.json();
      console.log(data.data.events[1]);
      for (let pos = 0; pos < EVENTS; ++pos) {
        if (login || data.data.events[pos].permission === PUBLIC) {
          temp.push(data.data.events[pos]);
        }
      }
      // sort results in ascending order of starting times
      temp.sort((d1, d2) => {
        return d1.start_time - d2.start_time;
      });
      changeEvents(temp);
      // Turn off loading icon - results are available
      changeLoading(false);
    }
    fetchData();
  }, [login]);
  return (
    <div className="home">
      {/* Conditonal rendering of Event info modal when user clicks on an event */}
      {clicked ? (
        <EventPage
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
        {/* CircluarProgress appears when the API is making calls */}
        {loading ? <CircularProgress /> : <></>}
        {/* Appears as soon as API gets the data */}
        {events.map((event) => (
          <Event
            //To generate a random number as key
            key={Math.floor(Math.random() * 1000) + 1}
            info={event}
            changeClicked={changeClicked}
            changemodalInfo={changemodalInfo}
          />
        ))}
      </div>
      {/* prompt displayed only if user has not logged in */}
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
