import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import {FaTimes, FaPen} from 'react-icons/fa'
import AddUser from './AddUser';
import Header from '../../layouts/Header';
import AccessDenied from '../../accessDenied/AccessDenied';
import './userStyle.scss'



const UserAdmin = () => {


const navigate = useNavigate()
    
const [User, setUsers] = useState([]);


const [showAddUser, setShowAddUser] = useState(false)
const [showUpdateUser, setShowUpdateUser] = useState(false)

const url = '/api/allUsers';


useEffect(() => {
  fetchUsers();
}, []);

//show users
const fetchUsers = () => {
  axios
    .get(`${url}`,{
      headers: {
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    .then((res) => {
    //const allUsers = res.data.users;
    //fetchUsers(allUsers)
      console.log(res);
      setUsers(res.data.users);
      
    })
    .catch((err) => {
      console.log(err);
    });
    
};

//delete a user
const deleteUser= async (_id)=>{  

    axios.delete("/api/deleteUser", {
      headers: {
        'auth-token': localStorage.getItem('auth-token')
      },
      data: {
        "user_id": _id
      }
    })
    .then((response) => {
      console.log("here res -> ", response.data);
    })
    .catch(function (error) {
      if (error)console.log(error.response.data.error);
    });
    setUsers(User.filter((user)=>user._id !==_id))
  }  

//Add Users
const addUser = async (user) => {
  
  const res = await fetch('/api/addUser', {
    
    method: 'POST',
    mode: 'cors',
    headers:{
     'Content-type': 'application/json',
     'auth-token': localStorage.getItem('auth-token')
    },
      body:JSON.stringify(user),
})

  const data =await res.json()

  setUsers ([...User, data])
  fetchUsers()
  
}

function openUpdate(currentUser) {
  setShowUpdateUser(true);
  console.log(currentUser)
  setUsers((prevInput) => { //ref: l19 setUpdatedItem
    return {
      ...prevInput,
      _id: currentUser,
    
    };
  });
  navigate('/updateUser',{
    state: {
      user: currentUser,
    }
  })
}





if (!localStorage.getItem('auth-token')){
  return(
     <AccessDenied/>
  )
}

return (
  <div id ='main-content'>
  <div id='content'>
     <Header onAdd ={()=> setShowAddUser(!showAddUser)} />
      {showAddUser && <AddUser onAdd ={addUser}/>}
      
      <h2>Statistics : {User.length} users that registered in DataBase</h2>
      <div className='item-container'>
        {User.map((user, index) => (
          
        <div className='card' key={index}> 

            <h4>Email: {user.email}</h4><br/>
            <p style={{width: 'fit-content'}}>HashPass: {user.password}</p>
            <p style={{width: 'fit-content'}}>Time of Registration: {user.registration_date}</p>
            <p style={{width: 'fit-content'}}>Admin Status: {String(user.is_admin)}</p>
            
            <FaPen style={ {color:'green'}} onClick={()=>openUpdate(user)}/>
            <FaTimes style={ {color:'red'}} onClick={() => deleteUser(user._id)}/>
          </div>
        ))}    
    </div>
    </div>
    </div>
  );
};
export default UserAdmin;