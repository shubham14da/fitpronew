import Appointment from './components/Appointment/Appointment';
import Profile from './components/Profile/Profile';
import VideoCall from './components/videocall/VideoApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { HashRouter,Routes,Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import LoginForm from './pages/Login';
import ExpertSelection from './pages/ExpertSelection';
import Dashboard from './pages/Dashboard';

import FooterComponent from './components/FooterComponent';
import Router from 'react-router-dom';
// import Appointment from './components/Appointment';
// import Profile from './components/Profile';
// import VideoCall from './components/videocall';
// import ExpertSelection from './components/Experts';
// import ModalComponent from "./components/ModalComponent";
// import { useState } from "react";
//  import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/experts" element={<ExpertSelection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </HashRouter>
    
  

  </React.StrictMode>
);


