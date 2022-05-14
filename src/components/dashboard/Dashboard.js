import React from "react";
import "./Dashboard.css";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer";
import UserAdmin from "./User/UserAdmin";
import ProductAdmin from "./Product/ProductAdmin";
import AppLayout from '../layouts/AppLayout';



export default function Dashboard() {




  const allProducts =()=>{}

  const allUsers =()=>{}

  const logOut =()=>{}

  return (
    <div className="dashboardBox">
      Hey, Welcome to the admin page!



      <div>
      <button onClick={allProducts}>All Products</button>
      <button onClick={allUsers}>All Users</button>
      <button  onClick={logOut}>Log out</button>
      </div>
      
      <ProductAdmin />
      
      
    </div>
  )
}