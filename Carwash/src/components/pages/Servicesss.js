import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';
import { useNavigate } from 'react-router-dom';


const Servicesss = (props) => {
  const [order, setProducts] = useState([]);
  let navigate = useNavigate();
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('http://localhost:8082/admin/allpacks')
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
  <h1 className='header'>Wash packs</h1>
  <div className='item-container'>
    {order.map((order) => (
      <div className='card' key={order.id} >
          <h3>id: {order.id} </h3>
        <h3>NAME: {order.name}</h3>
        <h3>COST: {order.cost} </h3>
        <h3>DESCRIPTION: {order.description} </h3>
        
        <button className="bookBtn"  onClick={()=>{navigate('/appointment')}} >ORDERNOW <i className="fas fa-arrow-right rightArw"></i></button>
        
      </div>
    ))}
  </div>
</div>
  );
};
export default Servicesss;