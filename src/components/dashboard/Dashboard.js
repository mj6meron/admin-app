import React from "react";
import "./Dashboard.css";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer";
import UserAdmin from "./User/UserAdmin";
import ProductAdmin from "./Product/ProductAdmin";
import AppLayout from '../layouts/AppLayout';



export default function Dashboard() {
  return (
    <div className="dashboardBox">
      We are here in the dashboard!(for testing)
      
      <AppLayout />
      
      
    </div>
  )
}