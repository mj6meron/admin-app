import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useLocation} from 'react-router-dom';
export default function UpdateUser() {
  const location = useLocation();
  let navigate = useNavigate();
  let [email, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isAdmin, setIsAdmin] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");

  let user = {
    user_id: location.state.user._id,
    email: location.state.user.email,
    password: "Enter new password",
    isAdmin: location.state.user.is_admin,
  };

  const handleIsAdmin = (choice) => {
    if (choice == "admin") {
      return true;
    }
    return false;
  }


  


  const prepareUpdate=()=>{
    if (email && password && isAdmin){return {email, password, is_admin: handleIsAdmin(isAdmin) }}
    if (!email && !password && !isAdmin) {setErrorMessage('You need to input at least one entry for update')}
    if (email && !password && !isAdmin){return {email}}
    if (!email && password && !isAdmin){return {password}}
    if (!email && !password && isAdmin){return {is_admin: handleIsAdmin(isAdmin)}}
    if (email && password && !isAdmin){return {email, password}}
    if (email && !password && isAdmin){return {email, is_admin: handleIsAdmin(isAdmin)}}
    if (!email && password && isAdmin){return {password, is_admin: handleIsAdmin(isAdmin)}}
}

  function handleSubmit(event) {
    event.preventDefault();
    let updateDetails = prepareUpdate();
    console.log(updateDetails);
    axios
      .patch("http://localhost:5500/api/updateUser", {
        ...updateDetails,
        user_id: user.user_id,
      })
      .then((response) => {
        console.log("here res -> ", response.data);
        localStorage.setItem("auth-token", response.data.token);
        navigate(response.data.redirect);
      })
      .catch(function (error) {
        setErrorMessage(error.response.data.error);
      });
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  function updateIsAdmin(event) {
    setIsAdmin(event.target.value);
  }
  /**
 if (!localStorage.getItem('auth-token')){
     return(
         <div>You have no token</div>
     )
 }
 */

 const handleBack =()=>{
   navigate('/dashboard')
 }

  return (
    <div className="loginBox">
      <br/><hr/>
      <div className="header">
        <br/><br/>
      <button className="buttonLogin" onClick={handleBack}>Back</button>
        <p className="adminP">Update User</p>
        <br/><br/>
      </div>
      <hr/><br/>
      <form onSubmit={handleSubmit} className="loginForm">
        <label className="label">
          <p className="labelP"> Email - </p>
          <input
            className="inputLogin"
            type="text"
            placeholder={user.email}
            onChange={updateUsername}
          />
        </label>
        <label className="label">
          <p className="labelP">New Password - </p>
          <input
            className="inputLogin"
            type="password"
            placeholder={user.password}
            onChange={updatePassword}
          />
        </label>
        <label className="label">
          <p className="labelP">Admin - </p>
          <select className="inputLogin" onChange={updateIsAdmin}>
            <option value="notAdmin">No</option>
            <option value="admin">Yes</option>
          </select>
        </label>
        <label className="submitLabel">
          <p className="errorMessage">{errorMessage}</p>
          <button className="buttonLogin" type="submit">Update</button>
        </label>
      </form>
    </div>
  );
}
