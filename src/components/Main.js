import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

const Main = () => {
  const [blur, undoBlur] = useState(true);
  return (
    <div>
      <Navbar blurContent={undoBlur} blur={blur} />
      <div className={blur ? "HP blur_content" : "HP content"}>
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
