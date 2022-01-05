import React, { useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import {  toast } from 'react-toastify';



const SignUp = () => {

  const [name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPasword] = useState("")
  const [confrimPassword, setConfirm] = useState("")
  const [emailid, setEmail] = useState("")
  

  let navigate= useNavigate()

  const inputnameHandler = (e) => {
    setName(e.target.value)
  }
  const inputusernameHandler = (e) => {
    setUserName(e.target.value)
  }
  const inputemailidHandler = (e) => {
    setEmail(e.target.value)
  }
  const inputcontactHandler = (e) => {
    setContact(e.target.value)
  }
  const inputpasswordHandler = (e) => {
    setPasword(e.target.value)
  }
  const inputconfirmHandler = (e) => {
    setConfirm(e.target.value)
  }

  const handleSubmit = (e) => {
    
    toast.success('Submitted Successfully',{

      position:'top-center'

  });
    const data = {
      confirmpassword: confrimPassword,
      password: password,
      username: username,
      contact: contact,
      emailId: emailid,
      name: name
    }
    
    axios.post('http://localhost:8081/carwash/adduser', data)
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
          <h2 className='title'> Create Account</h2>
          <form className='form' onSubmit={handleSubmit}>
            <div className='input'>
              <label>name:  </label>
              <input type='text' value={name} onChange={inputnameHandler}  />
              
            </div>
            <div className='input'>
              <label>Username:  </label>
              <input type='text' value={username} onChange={inputusernameHandler}  />
             
            </div>
            <div className='input'>
              <label>email id:  </label>
              <input type='text' value={emailid} onChange={inputemailidHandler} />
            </div>
            <div classname='input'>
              <label>contact: </label>
              <input type='text' value={contact} onChange={inputcontactHandler} />
            </div>
            <div className='input'>
              <label>password:  </label>
              <input type='password' value={password} onChange={inputpasswordHandler} />
            </div>
            <div className='input'>
              <label> confirm password:  </label>
              <input type='password' value={confrimPassword} onChange={inputconfirmHandler} />
            </div>

            <div >
              <button className='submit'value="submit" >submit</button>
            </div>
            <p>Do u have an account ?<a href='/login'>Login</a></p><br></br>
            <p>If your a washer then?<a href='/washer'>Login</a></p>
           
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;