import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTimes, FaPen} from 'react-icons/fa'

const ProductAdmin = () => {
    
const [Product, setProducts] = useState([]);

const url = 'http://localhost:5500/api/allProducts';

useEffect(() => {
  fetchProducts();
}, []);

//show users
const fetchProducts = () => {
  axios
    .get(`${url}`)
    .then((res) => {
  
      console.log(res);
      setProducts(res.data.products);
    })
    .catch((err) => {
      console.log(err);
    });
    
};

//delete a user

//


return (
    <div>
      <h1>Product Data:</h1>
      <div className='item-container'>
        {Product.map((product, index) => (
          <div className='card' key={index}>
            
            <h4>
                {product.title}
                {product.cost}
            </h4>
            <p style={{width: 200}}>{product.description}</p>
            <FaPen style={ {color:'green'} }/>
            <FaTimes style={ {color:'red'}}/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductAdmin;