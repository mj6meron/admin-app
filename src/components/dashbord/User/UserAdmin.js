import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTimes, FaPen} from 'react-icons/fa'

const UserAdmin = () => {
    
const [User, setUsers] = useState([]);

const url = 'http://localhost:5500/api/allUsers';

useEffect(() => {
  fetchUsers();
}, []);

//show users
const fetchUsers = () => {
  axios
    .get(`${url}`)
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
    await fetch('http://localhost:5500/api/deleteUser',{
        method:'DELETE',
        headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
        body: JSON.stringify({"user_id": _id})
      
    })
    console.log('Delete is working', _id)
    setUsers(User.filter((user)=>user._id !==_id))
    
    .then((result)=>{
      
        result.json().then((res)=>{
        res.header("Access-Control-Allow-Origin", "*"); 
        console.log('Delete is working', _id);
        console.warn(res)
        })
    })

  
  }  
//


return (
    <div>
      <h1>User Data:</h1>
      <div className='item-container'>
        {User.map((user, index) => (
          <div className='card' key={index}>
            
            <h4>
                {user.email}
            </h4>
            <p style={{width: 200}}>{user.registration_date}</p>
            <FaPen style={ {color:'green'} }/>
            <FaTimes style={ {color:'red'}} onClick={() => deleteUser(user._id)}/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserAdmin;