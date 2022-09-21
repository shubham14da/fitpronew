import React, { useState } from "react";
import { Button} from "react-bootstrap";
 import { Link ,useNavigate} from "react-router-dom";
import jwt from 'jwt-decode'
import ModalComponent from "../components/ModalComponent";
import HomePage from "./HomePage";
import Snackbar from "./Snackbar";
import { ToastContainer, toast } from 'react-toastify';
const axios = require("axios");

const LoginForm = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit= ()=>{
    axios
      .post(`http://${window.location.hostname}:${window.location.port}/authenticationservice/api/v1/authenticateUser`, {
        userEmailId: email,
        password: password
      })
      .then((resp) => {
        if(resp.data !==null){
          const decodedToken = jwt(resp.data);
          window.localStorage.setItem("JWT_Token", resp.data);
          window.localStorage.setItem("EmailID", decodedToken.userEmailId);
          if(decodedToken.userRole.localeCompare("ENTHUSIAST")==0)
          {
            toast("Login Successfull",{type: "success"})
            navigate("/experts")
            window.localStorage.setItem("Role", decodedToken.userRole);
          }
          else{
            toast("Login Successfull",{type: "success"})
            navigate("/profile")
            window.localStorage.setItem("Role", decodedToken.userRole);
            // window.location.href = "/interviewers";
          }

        };
      })
      .catch((error) => {
        toast("Invalid Credentials ",{type: "error"})
      });
  };

  return (
    <>
    <HomePage/>
    <ModalComponent show={true} navigate={navigate}>
    <h1><center style={{color:"#0d6efd",fontWeight:"bold",}}>Login</center></h1>
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter Email" 
          value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Enter Password" 
          value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button variant="primary" className="w-100 mb-3" onClick={handleSubmit}>
          Login
        </button>
        <p>Not registered ?  <Link  to="/signup">SignUp</Link></p>
    </div>
    </div>
    </ModalComponent>
    <ToastContainer />
    </>

  );
};

export default LoginForm;


