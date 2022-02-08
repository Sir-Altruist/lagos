import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Amount from './pages/amount';
import Landing from './pages/Landing';
import Bece from './pages/forms/Bece';
import Junior from './pages/forms/Junior';
import Model from './pages/forms/Model';
import Public from './pages/forms/Public';
import Admin from './pages/Admin'
// import Confirmation2 from "./pages/confimation2";
// import Confirmation3 from "./pages/confirmation3";

const App = () => {

  return (
    <div className="app-parent-Container">
       <Router>
        <Routes>
          <Route exact path='/' element={<Landing />}  />
          <Route path="/cbspayment" element={<Amount/>} />
          {/* <Route path="/confirm2" element={<Confirmation2/>} /> */}
          {/* <Route path="/confirm3" element={<Confirmation3/>} /> */}
          <Route path='/requisition/bece' element={<Bece />}  />
          <Route path='/requisition/junior' element={<Junior />}  />
          <Route path='/requisition/model' element={<Model />}  />
          <Route path='/requisition/public' element={<Public />}  />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
