import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./login.css";
import { GUEST_USERNAME, GUEST_PASSWORD } from "../../config";

const Login = ({ changeAuth, changeLogin, blur, undoBlur }) => {
  const [username, changeUsername] = useState("guest");
  const [password, changePassword] = useState("abcd");
  const [invalid, changeInvalid] = useState(false);
  const authenticate = () => {
    if (username === GUEST_USERNAME && password === GUEST_PASSWORD) {
      changeAuth(false);
      changeInvalid(false);
      changeLogin(true);
    } else {
      changeInvalid(true);
    }
  };
  return (
    <div className="login">
      <div className="close_icon">
        <CloseIcon
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => {
            changeAuth(false);
          }}
        />
      </div>
      <div className="auth_area">
        <h1>Enter your Credentials</h1>
        <input
          type="text"
          placeholder="user:guest password:abcd"
          value={username}
          onChange={(e) => changeUsername(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => changePassword(e.target.value)}
        ></input>
        <ArrowForwardIcon
          style={{ fontSize: "70px", cursor: "pointer", color: "white" }}
          onClick={() => authenticate()}
        />
      </div>
      <h1>{invalid ? "Please try again" : ""}</h1>
    </div>
  );
};

export default Login;
