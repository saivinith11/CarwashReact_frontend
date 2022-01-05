import React from 'react'

import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    let navigate = useNavigate();

     function paymentSuccess(){
        toast.success('Appointment Booked Successfully', {
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
           
                    
                        <h1 className='text-center'>PAYMENT</h1>
                        <div className="formDetails">
                            
                            <input type = "text" placeholder='Card Holder Name'/><br/><br/>
                            <input type="text"  placeholder='Card Number'/> <br/> <br/>
                            <input type="text" placeholder='MM/YY' /> <input type="password" placeholder='CVV'/>
                            <br/>
                            <br/>
                            <button onClick={paymentSuccess} className=' paymentButton btn btn-primary'>Pay</button>
                        </div>
                  
        </div>
    )
}

export default Payment