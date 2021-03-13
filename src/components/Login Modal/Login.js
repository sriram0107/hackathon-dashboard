import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./login.css";
import { GUEST_USERNAME, GUEST_PASSWORD } from "../../config";

const Login = ({ changeAuth, changeLogin }) => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
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
      <CloseIcon
        onClick={() => {
          changeAuth(false);
        }}
      />
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
      <button onClick={() => authenticate()}>Login</button>
      <p>{invalid ? "Please try again" : ""}</p>
    </div>
  );
};

export default Login;
