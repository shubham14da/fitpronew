import React from 'react'
import { useNavigate } from 'react-router'
import LOGO from "./handshake.png"
import "./navbar.css"
export default function ExpertNavbar() {
    const navigate = useNavigate();
    

  const handlelogout=(e)=>{
  localStorage.clear();
  navigate("/")
  }

  const handleClickLogo = ()=>{
    // navigate("/#/profile")
    navigate("/profile")
    console.log("clicked");
  }
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark expertsNav">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/#/profile" >
    <img src={LOGO} style={{"width":"70px", marginLeft:"50px"}}/>
    </a>
    <h4>Fit Pro</h4>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/navbar1"></a>
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
        <a class="nav-link active" aria-current="page" href="/#/profile" style={{color: "black", marginRight:"50px"}}><h5>Profile</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/#/appointment" aria-current="page" style={{color: "black", marginRight:"50px"}}><h5>AddAppointment</h5></a>
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
