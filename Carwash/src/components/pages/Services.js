import React from 'react';
/* import '../../App.css'; */


  import { useNavigate } from 'react-router-dom';



export default function Services() {

 

  let navigate= useNavigate()
  return (
<div>

<div className="priceingParent">
            <div className="priceingTitle">
                <div>
                    <p className="c1">AFFORDABLE PRICING FOR EVERYONE</p>
                </div>
                <div className="priceDescription">
                    <p className="c2">
                        Choosing Car wash is a constant process in the life of
                        every motorist. We try to give you Only positive emotions.
                        Entrust your car cleaning to our professionals
                    </p>
                </div>
            </div>


<div className="orderParent" id="paisa">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 orderRow">
                        <div>
    <div>
                                <p className="o1">Rs. 1499</p>
                                <p className="o2">BASIC WASH</p>
                            </div>
                            <div>
                            <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                            <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>clean wheels and tires</p>
                            <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Apply Tire Dressing</p>
                            <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>polish wheels</p>
                            <p><i className="fas fa-times" style={{color:"red"  , marginRight:"15px"}}></i>Interior Vaccum</p>
                            <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Dashboard Clean</p>
                            <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Polish and Wax exterior paints</p>
                            <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                            <button className="bookBtn" onClick={()=>{navigate('/login')}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                           
        </div>
        </div>
        </div>
              </div>
                    </div>    
  </div>

  <div className="orderParent" id="paisa">
  <div className="col-lg-4 orderRow2">
                        <div>
                            <div>
                                <p className="o1">Rs. 2499</p>
                                <p className="o2">DELUXE WASH</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Apply Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>polish wheels</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-times" style={{color:"red" ,marginRight:"15px"}}></i>Polish and Wax exterior paints</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{navigate('/login')}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                             
                            </div>
                        </div>
                    </div>
</div>
<div className="orderParent" id="paisa">
                    <div className="col-lg-4 orderRow3">
                        <div>
                            <div>
                                <p className="o1">Rs. 3299</p>
                                <p className="o2">ULTIMATE WASH</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Apply Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>polish wheels</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Polish and Wax exterior paints</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{navigate('/login')}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
      

            </div>
</div>
  
  );
}
