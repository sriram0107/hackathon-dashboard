import React, { useState } from "react";
import Event from "../Events/Event";
import Event_Page from "../Events/Event_Page";
import { getEvent } from "../../config";
import "./Home.css";

const template = [
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "Microsoft API Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
  {
    data: {
      event: {
        id: 3,
        name: "MAPI Workshop",
        event_type: "workshop",
        permission: "public",
        start_time: 1610449200000,
        end_time: 1610452800000,
        description:
          "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
        speakers: [{ name: "Microsoft", profile_pic: null }],
        public_url: "https://youtu.be/M3GQs6fEjs4",
        private_url: "https://hopin.com/events/hack-the-north-2020",
        related_events: [1, 2, 4],
      },
    },
  },
];

const Home = (props) => {
  const [clicked, changeClicked] = useState(false);
  const [modalInfo, changemodalInfo] = useState({});
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
        {template.map((event) => (
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
            Login to see more
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
