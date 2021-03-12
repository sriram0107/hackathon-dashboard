import React, { useState } from "react";
import Event from "../Events/Event";
import Event_Page from "../Events/Event_Page";
import "./Home.css";

const Home = () => {
  const [login, changeLogin] = useState(false);
  return <div className="home">HOME</div>;
};

// Modal that appears when user clicks on sign in
const Login = () => {};

export default Home;
