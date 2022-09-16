// import LoginForm from "./pages/Login";
// import Signup from "./pages/Signup";
// // import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
// import { useState } from "react";
// import ModalComponent from "./components/ModalComponent";
// import { FiMenu } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
// import { Form } from "react-bootstrap";
// import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";
// import HomePage from "./pages/HomePage";
// import Dashboard from './pages/Dashboard';
// import './app.css';
// import {Route, Routes, BrowserRouter} from 'react-router-dom'
// import Appointment from './pages/Appointment';
// import ExpertSelection from './pages/ExpertSelection';
// import Navbar from './component/navbar/Navbar';
// import Footer from './component/footer/Footer';


//   function App() {
//     const [checkSignUp, setcheckSignUp] = useState("");
//     const [show, setShow] = useState(false);
  
//     const data = [
//        { title: "Consultation" },
//       { title: "Health Check packages" },
//        { title: "Bookings" },
//        { title: "Savings" },
//     ];
//   return (
//     <></>
//   )
// }
// export default App;

import LoginForm from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Form } from "react-bootstrap";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
function App() {
 const [checkSignUp, setcheckSignUp] = useState("");
 const [show, setShow] = useState(false);

 const data = [
    { title: "Consultation" },
   { title: "Health Check packages" },
    { title: "Bookings" },
    { title: "Savings" },
 ];

  return (
 <></>
); }

export default App;

