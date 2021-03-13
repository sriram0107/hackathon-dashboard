import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login Modal/Login";
import Footer from "./Footer/Footer";

const Main = () => {
  const [blur, undoBlur] = useState(true);
  const [login, changeLogin] = useState(false);
  const [auth, changeAuth] = useState(false);
  return (
    <div>
      {auth ? <Login changeAuth={changeAuth} changeLogin={changeLogin} /> : ""}
      <Navbar
        blurContent={undoBlur}
        blur={blur}
        login={login}
        changeLogin={changeLogin}
        auth={auth}
        changeAuth={changeAuth}
      />
      <div className={blur ? "HP blur_content" : "HP content"}>
        <Home login={login} />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
