import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Getorders = () => {
  const [order, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('http://localhost:8085/order/allorders')
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
  <h1>Order details</h1>
  <div className='item-container'>
    {order.map((order) => (
      <div className='card' key={order.id} >
        <h3>CARNAME :{order.carName}</h3>
        <h3>MODEL : {order.model}</h3>
        <h3>WASHPACKID : {order.washpackageId} rupees</h3>
        <h3>PREFFEREDDATE : {order.prefferedDate} </h3>
        <h3>CONTACTNO : {order.contactNo} </h3>
        <h3>WASHERNAME : {order.washerName} </h3>
        <button className="bookBtn" >ConfirmOrder <i className=""></i></button>
      </div>
    ))}
  </div>
</div>
  );
};
export default Getorders;