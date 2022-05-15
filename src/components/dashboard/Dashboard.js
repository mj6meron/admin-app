<<<<<<< Updated upstream
import React from "react";
import "./Dashboard.css";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer";
import UserAdmin from "./User/UserAdmin";
import ProductAdmin from "./Product/ProductAdmin";
import AppLayout from '../layouts/AppLayout';
=======
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./Dashboard.css"
import "./dash.css";
import Landing from "../landing/Landing";
import UserAdmin from "./User/UserAdmin";
import ProductAdmin from "./Product/ProductAdmin";
>>>>>>> Stashed changes



export default function Dashboard() {
  return (
    <div className="dashboardBox">
<<<<<<< Updated upstream
      We are here in the dashboard!(for testing)
      
      <AppLayout />
      
      
=======



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
>>>>>>> Stashed changes
    </div>
  )
}