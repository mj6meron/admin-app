import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./Dashboard.css";


import "./dash.css";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer";
import Landing from "../landing/Landing";
import UserAdmin from "./User/UserAdmin";
import ProductAdmin from "./Product/ProductAdmin";

import AppLayout from '../layouts/AppLayout';



export default function Dashboard() {
  let navigate = useNavigate()
  const [landingShow, setLandingShow] = useState(true)
  const [productsShow, setProductsShow] = useState(false)
  const [usersShow, setUsersShow] = useState(false)


  const allProducts =()=>{
    setLandingShow(false)
    setProductsShow(true)
    setUsersShow(false)
  }

  const allUsers =()=>{
    setLandingShow(false)
    setProductsShow(false)
    setUsersShow(true)
  }

  const logOut =()=>{
    localStorage.clear()
    navigate('/')
    
  }

  console.log('one render')

  return (
    <div className="dashboardBox">



      <div className="adminNavBar">
      <button className="barCell"  onClick={allProducts}>All Products</button>
      <button className="barCell"  onClick={allUsers}>All Users</button>
      <button className="barCell"  onClick={logOut}>Log out</button>
      </div>
      <hr/>

      <div className="dashboardBody">
      {landingShow  && <Landing/>}
      {usersShow  && <UserAdmin/>}
      {productsShow  && <ProductAdmin/>}
      </div>
      
      
    </div>
  )
}