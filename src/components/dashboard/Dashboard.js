import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./Dashboard.css";
import AccessDenied from '../accessDenied/AccessDenied';


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
  if (!localStorage.getItem('auth-token')){
    return (<AccessDenied/>)
  }


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

      <div>
        <h1>About Dashboard of StudentHub</h1>
      <div>
      <table className="table-intro">
  <thead>
    <tr>
      <th>
      <img 
      src="https://roimedia.group/wp-content/uploads/2020/01/sub-services-img2.png"
      alt="new"
      />
      </th>
      <th>
      <img 
      src="https://roimedia.group/wp-content/uploads/2020/01/sub-services-img1.png"
      alt="new"
      />
      </th>
      <th>
      <img 
      src="https://roimedia.group/wp-content/uploads/2019/11/services_2.png"
      alt="new"
      />
      </th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td className="table-text">Login and Logout</td>
       <td className="table-text">Data display and statistics</td>
       <td className="table-text">Add and Update functions</td>
     </tr>
     <tr>
       <td>Usage</td>
       <td>Characteratics</td>
       <td>Instruction</td>
     </tr>
     <tr>
       <td className="table-text">In Login page, there is only designated administrator can login here. 
         After logout, the token will be clear that means no one can go back without login again.</td>
       <td className="table-text">To show Data and statistics, the Admin can check the details of users and products. Meanwhile, the basic statistics will show the survey of Data.</td>
       <td className="table-text">As an Admin, you are capable to add a new user and change the existed users' login email and password. 
         Furthermore, it is possible that you can designate a registered user as Admin.</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
   
      </div>
      </div>
      
    </div>
  )
}