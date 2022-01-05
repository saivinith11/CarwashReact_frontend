
import React, { useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import {  toast } from 'react-toastify';


const Adminpack = () => {

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")
  const [description, setDescription] = useState("")
 
  let navigate= useNavigate()
  const inputidHandler = (e) => {
    setId(e.target.value)
  }
  const inputnameHandler = (e) => {
    setName(e.target.value)
  }
  const inputcostdHandler = (e) => {
    setCost(e.target.value)
  }
  const inputdescriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  
 

  const handleSubmit = (e) => {
    toast.success('Submitted Successfully',{

      position:'top-center'

  });
    const data = {
      id:id,
      name: name,
      cost:cost,
      description:description
    }
    axios.post('http://localhost:8082/admin/addpack', data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      
    e.preventDefault()
  }

  return (
    <>
      <div className='in'>
        <div className='container'>
          <h2 className='title'> Add packs</h2>
          <form className='form' onSubmit={handleSubmit}>
            <div className='input'>
              <label>id:  </label>
              <input type='text' value={id} onChange={inputidHandler} />
            </div>
            <div className='input'>
              <label>name:  </label>
              <input type='text' value={name} onChange={inputnameHandler} />
            </div>
            <div className='input'>
              <label>cost:  </label>
              <input type='text' value={cost} onChange={inputcostdHandler} />
            </div>
            <div classname='input'>
              <label>Descripton: </label>
              <input type='text' value={description} onChange={inputdescriptionHandler} />
            </div>
            

            <div >
              <button className='submit'value="submit" >submit</button>
            </div>
            
           
          </form>
        </div>
      </div>
    </>
  )
}

export default Adminpack;