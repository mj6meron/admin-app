import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  let [email, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  const handleSubmit=async (event)=> {
    event.preventDefault();
    console.log("token check", localStorage.getItem("auth"));
    console.log(`Here is the email: ${email}, and password: ${password}`);
    await axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("here res -> ", response.data);
        localStorage.setItem("auth-token", response.data.token)
        navigate('/dashboard')
      })
      .catch(function (error) {
        setErrorMessage(error.response.data.error);
      })
  }

  function updateEmail(event) {
    setUsername(event.target.value);
    //console.log(email)
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="loginBox">
      <div className="header">
        <img
          className="adminLogo"
          src="https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png"
          alt=""
        />
        <p className="adminP">Admin Login</p>
      </div>

      <form onSubmit={handleSubmit} className="loginForm">
        <label className="label">
          <p className="labelP">Email: </p>
          <input
            className="inputLogin"
            type="email"
            placeholder="Email"
            onChange={updateEmail}
            required
          />
        </label>
        <label className="label">
          <p className="labelP">Password: </p>
          <input
            className="inputLogin"
            type="password"
            placeholder="Password"
            onChange={updatePassword}
            required
          />
        </label>
        <label className="submitLabel">
          <p className="errorMessage">{errorMessage}</p>
          <button className="buttonLogin" type="submit">
            Login
          </button>
        </label>
      </form>
    </div>
  );
}
