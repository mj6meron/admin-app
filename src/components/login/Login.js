import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from '../tools/useFetch'
import axios from 'axios';
import './Login.css'

export default function Login() {
  let navigate = useNavigate();
  let [email, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("")

  function handleSubmit (event) {
    event.preventDefault();
    console.log("token check",localStorage.getItem('auth'))
    console.log(`Here is the email: ${email}, and password: ${password}`)
    axios.post('http://localhost:5500/api/login', {
      "email" : email,
      "password": password
    })
    .then(response=>{
      
      console.log('here res -> ', response.data)
      localStorage.setItem('auth-token', response.data.token);
      navigate(response.data.redirect)
    })
    .catch(function (error) {
      setErrorMessage(error.response.data.error)
      
    })
    //navigate('/dashboard')
  }


useEffect(() => {
  axios
      .get('http://localhost:5500/api/allProducts')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);


  function updateEmail(event) {
    setUsername(event.target.value);
    //console.log(email)
  }

  function updatePassword(event) {
    setPassword(event.target.value);
 
  }

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={updateEmail}  required/>
        <input type="password" placeholder="Password" onChange={updatePassword}  required/>
        <p>{errorMessage}</p>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}