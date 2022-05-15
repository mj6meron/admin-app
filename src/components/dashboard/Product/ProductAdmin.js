import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTimes, FaPen} from 'react-icons/fa'
import AccessDenied from '../../accessDenied/AccessDenied';
import './productStyle.scss'

const ProductAdmin = () => {
    
const [Product, setProducts] = useState([]);

const url = 'http://localhost:5500/api/allProducts';


useEffect(() => {
  fetchProducts();
}, []);

//show users
const fetchProducts = () => {
  axios
    .get(`${url}`,{
      headers: {
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    .then((res) => {
  
      console.log(res);
      setProducts(res.data.products);
    })
    .catch((err) => {
      console.log(err);
    });
    
};

if (!localStorage.getItem('auth-token')){
  return(
     <AccessDenied/>
  )
}

return (
  <div id = 'main-container'>

    <div id ='content'>
      <h1 className='header-title'>Product Data:</h1>
      <h2>Statistics: {Product.length} products that registered in DataBase</h2>
      <div className='item-container'>
        {Product.map((product, index) => (
          <div className='card' key={index}>
            <h4>Production:  {product.title}</h4>
            <p>Price:  {product.cost}</p>
            <p style={{width: 280}}>Description: {product.description}</p>
          </div>
        ))}
    </div>
      </div>
    </div>
  );
};
export default ProductAdmin;