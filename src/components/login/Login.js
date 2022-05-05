import React, { useState } from "react";

export default function Login() {
  let [email, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Loging in with ${email} and ${password}`);
  }

  function updateEmail(event) {
    setUsername(event.target.value);
    console.log(email)
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={updateEmail}  required/>
      <input type="password" placeholder="Password" onChange={updatePassword}  required/>
      <input type="submit" value="Login" />
    </form>
  )
}