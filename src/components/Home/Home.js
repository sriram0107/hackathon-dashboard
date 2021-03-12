import React, { useState } from "react";
import Event from "../Events/Event";
import Event_Page from "../Events/Event_Page";
import { getEvent } from "../../config";
import "./Home.css";

const template = [
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "activity" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "activity" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "activity" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "activity" },
  { name: "micros", event_type: "workshop" },
  { name: "micros", event_type: "tech_talk" },
  { name: "micros", event_type: "workshop" },
];

const Home = () => {
  const [login, changeLogin] = useState(false);
  const event_map = () => {
    template.map((event) => {
      return <Event info={event} />;
    });
  };
  return (
    <div className="home">
      <p className="heading">Events</p>
      <div className="events_grid">
        {template.map((event) => (
          <Event info={event} />
        ))}
      </div>
      {!login ? (
        <p className="login_prompt">
          <>
            Login to see more <b>exciting events!</b>
          </>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

// Modal that appears when user clicks on sign in
const Login = () => {};

export default Home;
