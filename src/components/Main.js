import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login Modal/Login";
import Footer from "./Footer/Footer";

const Main = () => {
  // This state handled page blurring when the navbar opens in responsive mode
  const [blur, undoBlur] = useState(true);
  // This state determines whether the user has logged in or not
  const [login, changeLogin] = useState(false);
  // This state is set true when the authentication process is ongoing - helps keep track of login modal
  const [auth, changeAuth] = useState(false);
  // List of all events
  const [events, changeEvents] = useState([]);
  return (
    <div>
      {/* Conditional rendering of Login modal when user clicks on login in navbar */}
      {auth ? (
        <Login
          changeAuth={changeAuth}
          changeLogin={changeLogin}
          blur={blur}
          undoBlur={undoBlur}
        />
      ) : (
        ""
      )}
      <Navbar
        blurContent={undoBlur}
        blur={blur}
        login={login}
        changeLogin={changeLogin}
        auth={auth}
        changeAuth={changeAuth}
        changeEvents={changeEvents}
      />
      <div className={blur ? "HP blur_content" : "HP content"}>
        <Home login={login} events={events} changeEvents={changeEvents} />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
