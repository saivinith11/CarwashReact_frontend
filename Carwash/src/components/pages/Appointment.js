
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
const Appointment = () => {
    let navigate = useNavigate();
    const [carName, setcarName] = useState("")
    const [model, setModel] = useState("")
    const [washerName, setWasherName] = useState("")
    const [washpackageId, setWashpackageId] = useState("")
    const [prefferedDate, setprefferedDate] = useState("")
    const [contactNo, setcontactNo] = useState("")
   
    const handlecarnameChange = (e) => {
        setcarName(e.target.value)
      }
    const handlemodelChange = (e) => {
        setModel(e.target.value)
      } 
    const handlenameChange = (e) => {
        setWasherName(e.target.value)
      }
    const changewasherHandler = (e) => {
        setWashpackageId(e.target.value)
      }
    const changedateHandler = (e) => {
        setprefferedDate(e.target.value)
      }
    const  changecontactHandler = (e) => {
        setcontactNo(e.target.value)
      }

    const  handleSubmit= (e) =>{
       
        const data = {
              carName: carName,
              model: model,
              washerName:washerName,
              washpackageId:washpackageId,
              prefferedDate:prefferedDate,
              contactNo:contactNo,
            }
            axios.post('http://localhost:8085/order/addorder', data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      navigate('/payment')
    e.preventDefault()
    }

       
        return(
          <>
        <form className='form' onSubmit={handleSubmit}>
         <div>
           <h1>Booking Details</h1>
                        <label> CarName</label>
                        <input  type='text' value={carName} onChange={handlecarnameChange}/>
                    </div>
                    <div>
                        <label>Model</label>
                        <input  type='text' value={model}onChange={handlemodelChange}/>
                    </div>
                    <div>
                        <label>Name</label>
                        <input  type='text'value={washerName} onChange={handlenameChange}/>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                    <label>washpack</label>
                        <select className="contactDetails" name="washpackId" value={washpackageId} onChange={changewasherHandler} >
                            <option className="opt1">Service Types</option>
                            <option>1499</option>
                            <option>2499</option>
                            <option>3999</option>
                        </select>
                    </div>
                    <div >
                        <label>Date</label>
                        <input type="date" name="Date" value={prefferedDate} onChange={changedateHandler} />
                    </div>
                    <div >
                        <label>Contact</label>
                        <input type="text"  value={contactNo} onChange={changecontactHandler} />
                    </div>

                    <div>
                        <button className='submit' value="submit">submit</button>
                    </div>
                </form>
          </>
        )
    }
    
  export default Appointment;