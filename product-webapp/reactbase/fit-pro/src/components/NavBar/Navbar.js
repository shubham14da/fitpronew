import React from 'react'
import { useNavigate } from 'react-router';
import LOGO from "./handshake.png";

import "./navbar.css"
export default function Navbar() {
    
  const navigate=useNavigate();


  const handlelogout=()=>{
    localStorage.clear()
    navigate("/")
  }

  const handleClickLogo=()=>{
    navigate("/dashboard")
  }
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/#/dashboard" >
    <img src={LOGO} style={{"width":"70px", marginLeft:"50px"}} onClick={handleClickLogo}/>
    
    </a>
    <h4>Fit Pro</h4>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=""></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        </li>
      </ul>
      <form class="d-flex">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" style={{color: "black", marginRight:"50px"}} aria-current="page" href="/#/dashboard"><h5>Profile</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/#/experts"  style={{"color":"black", marginRight:"50px"}}><h5>Expert</h5></a>
      </li>
      <li class="nav-item">
        
      </li>
    </ul>
       
        <button class="btn btn-outline-info" type="submit" onClick={handlelogout}>Signout</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
