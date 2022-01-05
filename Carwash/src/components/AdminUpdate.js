import React, { useState } from "react";
import axios from 'axios';

const AdminUpdate = () => {
    const [updateid, setupdateid] = useState("");
    const [updatename, setupdateName] = useState("");
    const [updatecost, setUpdatecost] = useState("");
    const [updatedesc, setUpdateDesc] = useState("");
    
    const updateAdmin = () => {
        const data = {
            id: updateid,
            name: updatename,
            cost: updatecost,
            description: updatedesc
        }
        axios.put(`http://localhost:8082/admin/updatepacks/${updateid}`, data)
            .then(function (response) {
                if (response) {
                    console.log(response)
                }

            })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (
        <>
             <div className='in'>
        <div className='container'>
          <h2 className='title'> Update</h2>
          <form className='form' >
          <div className='input'>
            <input type="text" placeholder='id' value={updateid} onChange={(e) => setupdateid(e.target.value)} /><br /><br />
            <input type="text" placeholder='name' value={updatename} onChange={(e) => setupdateName(e.target.value)} /><br /><br />
            <input type="text" placeholder='cost' value={updatecost} onChange={(e) => setUpdatecost(e.target.value)} /><br /><br />
            <textarea placeholder='description' value={updatedesc} onChange={(e) => setUpdateDesc(e.target.value)} />
            <br />
            <br />
            <button className="bookBtn" onClick={updateAdmin} >Submit<i className=""></i></button>
            </div>
            </form>
            </div>
            </div>
        </>
    )
}
export default AdminUpdate;