import React from "react";
import "./Dashbord.css";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer";
import UserAdmin from "./User/UserAdmin";
//import FeaturedProducts from "../test/FeaturedProducts";



export default function Dashbord() {
  return (
    <div className="dashbordBox">
      We are here in the dashbord!(for testing)
      <Header/>
      <UserAdmin/>
      
      <Footer/>
    </div>
  )
}