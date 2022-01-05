import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Appointment from './components/pages/Appointment';
import Payment from './components/pages/Payment';
import { toast } from 'react-toastify';
import Washerlogin from './components/pages/Washerlogin';
import Getorders from './components/pages/Getorders';
import Adminpage from './components/pages/Adminwash';
import Servicesss from './components/pages/Servicesss';
import ServicesAdmin from './components/pages/SevicesAdmin';
import AdminUpdate from './components/AdminUpdate';
import Adminpack from './components/pages/Adminpack';
import Adminwasherdetails from './components/pages/Adminwasherdetails';


function App() {
  return (
    <>
      <Router>
        <Navbar />
       <Routes>
          <Route path='/' exact element={<Home/>}  />
          <Route path='/services' exact element={<Services/>} />
          <Route path='/Login' exact element={<Login/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
          <Route path='/appointment' exact element={<Appointment/>} />
          <Route path='/payment' exact element={<Payment/>} />
          <Route path='/washer' exact element={< Washerlogin/>}/>
          <Route path='/orders' exact element={<Getorders />}/>
          <Route path='/adminwash' exact element={<Adminpage />}/>
          <Route path='/servicesss' exact element={<Servicesss/>}/>
          <Route path='/servicesAdmin' exact element={<ServicesAdmin/>}/>
          <Route path='/update' exact element={<AdminUpdate />}/>
          <Route path='/addpacks' exact element={<Adminpack />}/>
          <Route path='/allwashers' exact element={<Adminwasherdetails />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
