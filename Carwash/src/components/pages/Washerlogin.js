import React from 'react'


import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Washerlogin = () => {
   
    let navigate= useNavigate()
     function paymentSuccess(){
        toast.success('Loggined Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            


    }
    return (
        <div>
         
              
                        -<h1 className='text-center'>WasherLogin</h1>
                        <div className="formDetails">
                            
                            <input type = "text" placeholder=' Washer id'/><br/><br/>
                           <input type="text" placeholder='name'/><br/><br/>
                           <input type="text" placeholder='Location'/>
                            <br/>
                            <br/>
                            <button className="bookBtn"onClick={()=>{navigate('/orders')}} >Submit<i className=""></i></button>
                        </div>
                 
         
        </div>
    )
}

export default Washerlogin;