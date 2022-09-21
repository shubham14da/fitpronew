import React, { useEffect, useState } from "react";
import { Button , Toast} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import ModalComponent from "../components/ModalComponent";
import HomePage from "./HomePage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {

//   const navigate = useNavigate();

//   const loginForm=()=>{
//     navigate('/login')
//   }

 
const Signup = () => {
  // const [signUpRole, setsignUpRole] = useState("user");
  const navigate = useNavigate()
  const [show, setShow] = useState("")
  const [signUpRole, setsignUpRole] = useState("ENTHUSIAST");

  
  const userSchema = yup.object({
    email: yup.string().email('Must be a valid email').required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    password: yup.string().required('Password is required').min(8, "Minimum 8 characters required"),
    confirmPassword: yup.string()
      .test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
      }),
      // phoneNumber: yup.number().typeError("Phone number should be valid format").required("Phone number is required")
  
  }).required();

  const expertSchema = yup.object({
    email: yup.string().email('Must be a valid email').required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    password: yup.string().required('Password is required').min(8, "Minimum 8 characters required"),
    confirmPassword: yup.string()
      .test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
      }),
    // phoneNumber: yup.number().required("Phone number is required").typeError("Phone number should be valid format")
  
  }).required();


  const { register,reset, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(signUpRole === "ENTHUSIAST" ? userSchema : expertSchema)
  });

  const onSubmit = async(values) => {
    console.log(values);
    // const url = signUpRole === "user" ? "http://localhost:3003/users" : signUpRole === "expert" ? "http://localhost:3003/experts" : "";
    const url = signUpRole === "ENTHUSIAST" ? `http://${window.location.hostname}:${window.location.port}:30036/userservice/api/v1/saveEnthusiast` : signUpRole === "EXPERT" ? `http://${window.location.hostname}:${window.location.port}/userservice/api/v1/saveExpert` : "";
    const data =  signUpRole === "ENTHUSIAST" ? {emailId:values.email, firstName:values.firstName, lastName:values.lastName, phoneNumber:"", avatarUrl:"", photo:""} : {emailId:values.email, firstName:values.firstName,role:"", lastName:values.lastName, specialization: values.specialization, phoneNumber:"", avatarUrl:"", photo:"",experience:"",educationalQualification:"",aboutMe:""};
    await axios.post(url,data).then(res => {
      console.log(res,'res')
      axios.post(`http://${window.location.hostname}:${window.location.port}/authenticationservice/api/v1/createUser`,{
        userEmailId: values.email,
        password: values.password,
        userRole: signUpRole
      }).then(res => {
        toast("Successfully registered",{type: "success"})

        reset()
      }).catch(err=> {
        toast("Failed to register",{type: "error"})

      })
    }).catch(err => {
      console.log(err)
      toast("Failed to register",{type: "error"})

    })
  }

  useEffect(() => {
   reset()
  }, [signUpRole])
  
  return (
    <>
     <HomePage/>
     <ModalComponent show={true} navigate={navigate}>
     <h1><center style={{color:"#0d6efd",fontWeight:"bold",}}>SignUp</center></h1>
    <div className="w-100 d-flex justify-content-center align-items-center">
      <form className="w-50" onSubmit = {handleSubmit(onSubmit)}>
        <div className="mb-2">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              checked={signUpRole === "ENTHUSIAST"}
              onChange={(e) => setsignUpRole(e.target.value)}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="ENTHUSIAST"
            />
            <label class="form-check-label" for="inlineRadio1">
              User
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              checked={signUpRole === "EXPERT"}
              onChange={(e) => setsignUpRole(e.target.value)}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="EXPERT"
            />
            <label class="form-check-label" for="inlineRadio2">
              Expert
            </label>
          </div>
        </div>
        <>
          {signUpRole === "ENTHUSIAST" ? (
            <>
               
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name *
                </label>
                <input type="text" {...register('firstName')} name="firstName"  class="form-control" id="firstName" placeholder="Enter First Name" />
                <div id="emailHelp" className="form-text text-danger">{errors?.firstName?.message}</div>
              </div>

              <div class="mb-3">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input type="text"  {...register('lastName')} name="lastName"  class="form-control" id="lastName" placeholder="Enter Last Name" />
                <div id="emailHelp" className="form-text text-danger">{errors?.lastName?.message}</div>
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Email *
                </label>
                <input type="text" {...register('email')} name="email" class="form-control" id="formGroupExampleInput" placeholder="Enter Email" />
                <div id="emailHelp" className="form-text text-danger">{errors?.email?.message}</div>
              </div>


              <div class="mb-3">
                <label for="password" class="form-label">
                  Password *
                </label>
                <input type="password"  {...register('password')} name="password"  class="form-control" id="password" placeholder="Enter Password" />
                <div id="emailHelp" className="form-text text-danger">{errors?.password?.message}</div>
              </div>

              <div class="mb-3">
                <label for="confirmPassword" class="form-label">
                  Confirm Password *
                </label>
                <input type="password"  {...register('confirmPassword')} name="confirmPassword"  class="form-control" id="confirmPassword" placeholder="Confirm Password" />
                <div id="emailHelp" className="form-text text-danger">{errors?.confirmPassword?.message}</div>
              </div>

            
            </>
          ) : signUpRole === "EXPERT" ? (
            <>
              {/* <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Email *
                </label>
                <input type="text"  {...register('email')} name="email"  class="form-control" id="formGroupExampleInput" placeholder="Enter Email" />
                <div id="emailHelp" className="form-text text-danger">{errors?.email?.message}</div>
              </div> */}
             
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name *
                </label>
                <input type="text"  {...register('firstName')} name="firstName"  class="form-control" id="firstName" placeholder="Enter First Name" />
                <div id="emailHelp" className="form-text text-danger">{errors?.firstName?.message}</div>
              </div>

              <div class="mb-3">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input type="text"  {...register('lastName')} name="lastName"  class="form-control" id="lastName" placeholder="Enter Last Name" />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Email *
                </label>
                <input type="text"  {...register('email')} name="email"  class="form-control" id="formGroupExampleInput" placeholder="Enter Email" />
                <div id="emailHelp" className="form-text text-danger">{errors?.email?.message}</div>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                  Password *
                </label>
                <input type="password"  {...register('password')} name="password"   class="form-control" id="password" placeholder="Enter Password" />
                <div id="emailHelp" className="form-text text-danger">{errors?.password?.message}</div>
              </div>

              <div class="mb-3">
                <label for="confirmPassword" class="form-label">
                  Confirm Password *
                </label>
                <input type="password"  {...register('confirmPassword')} name="confirmPassword"  class="form-control" id="confirmPassword" placeholder="Confirm Password" />
                <div id="emailHelp" className="form-text text-danger">{errors?.confirmPassword?.message}</div>
              </div>

              {/* <div class="mb-3">
                <label for="role" class="form-label">
                  Role
                </label>
                <input type="text"  {...register('role')} name="role"  class="form-control" id="role" placeholder="Enter Role" />
              </div> */}

              <div class="mb-3">
                <label for="specialization" class="form-label">
                  Specialization
                </label>
                 
                {/* <input type="text"  {...register('specialization')} name="specialization"  class="form-control" id="specialization" placeholder="Enter Specialization"/>  */}
                <select  name="specialization"  class="form-control" id="specialization" {...register('specialization')}>
                
                <option  value="Aerobics" >Aerobics</option>
                <option  value="Ayurvedic" >Ayurvedic</option>
                 <option  value="career counseller" >Career Counsellor</option>
                 <option value="cosemetologist" >Cosematologist</option>
                 <option  value="counsellor" >Counseller</option>
                 <option  value="Dermatologist" >Dermatologist</option>
                  <option  value="Fitness instructor">Fitness Instructor</option>
                 <option value="Gynaecologist">Gynaecologist</option>
                 <option value="nutritionist">Nutritionist</option>
                 <option value="physician">Physician</option>
                  <option value="physiotherapist">Physiotherapist</option>
                     <option value="yoga">Yoga</option>
                </select>   
               
              </div>

              {/* <div class="mb-3">
                <label for="phoneNumber" class="form-label">
                  Phone Number *
                </label>
                <input type="text"  {...register('phoneNumber')} name="phoneNumber"  class="form-control" id="phoneNumber" placeholder="Enter PhoneNumber" />
                <div id="emailHelp" className="form-text text-danger">{errors?.phoneNumber?.message}</div>
              </div> */}

              {/* <div class="mb-3">
                <label for="educationQualification" class="form-label">
                  Education Qualification
                </label>
                <input
                  type="text"
                  {...register('educationQualification')} name="educationQualification" 
                  class="form-control"
                  id="educationQualification"
                  placeholder="Enter Education Qualification"
                />
              </div> */}

              {/* <div class="mb-3">
                <label for="aboutMe" class="form-label">
                  About me
                </label>
                <input type="text"  {...register('aboutMe')} name="aboutMe"  class="form-control" id="aboutMe" placeholder="About me" />
              </div> */}

              {/* <div class="mb-3">
                <label for="experience" class="form-label">
                  Experience
                </label>
                <input type="text"  {...register('experience')} name="experience"  class="form-control" id="experience" placeholder="Experience" />
              </div> */}
            </>
          ) : null}
        </>

        <Button variant="primary" className="w-100 mb-3" type="submit">
          Register
        </Button>
        <p>
          Already registered ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
     </ModalComponent>
     <ToastContainer />
 
     </>
  );
};

export default Signup;
