import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTimes, FaPen} from 'react-icons/fa'

const UserAdmin = () => {
    
const [users, setUsers] = useState([]);

useEffect(() => {
  fetchUsers();
}, []);
const fetchUsers = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setUsers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

return (
    <div>
      <h1>User Data:</h1>
      <div className='item-container'>
        {users.map((product) => (
          <div className='card' key={product.id}>
            
            <h4>{product.brand}</h4>
            <p>{product.item}</p>
            <FaPen style={ {color:'green'} }/>
            <FaTimes style={ {color:'red'} }/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserAdmin;