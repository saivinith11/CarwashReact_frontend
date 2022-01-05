import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Getorders = () => {
  const [order, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('http://localhost:8084/wash/allwashers')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

return (
  <div className='bg'>
  <h1 className='header'>Washer details</h1>
  <div className='item-container'>
    {order.map((order) => (
      <div className='card' key={order.id} >
        <h3>id:{order.id}</h3>
        <h3>NAME: {order.name}</h3>
        <h3>LOCATION: {order.location} </h3>
      </div>
    ))}
  </div>
</div>
  );
};
export default Getorders;