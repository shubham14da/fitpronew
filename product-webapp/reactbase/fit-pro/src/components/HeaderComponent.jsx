import React from "react";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import handShake from "../image/handshake.png";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

// const customStyles = {
//   logo: {
//     marginRight: "2%",
//     display: "inline",
//      color:"#0d6efd",
//     // color: "black",
//     // height:"100px",
    
//   },
//   items: {
//     marginRight: "20px",
//     marginLeft: "20px",
//     fontWeight: "bold",
//     color:"black",
//     height:"100px",
//   },
//   button: {
//     fontWeight: "bold",
//     backgroundColor: "#0d6efd",
//     // backgroundColor:"black",
//     // paddingLeft: "12px",
//     // paddingRight: "12px",
//     borderRadius: "50px",
//      color: "white",
//     // color:"#0d6efd",
//     // position:'fixed', top:'0', right:'0', 
//     position: 'relative',
//     left: '20px',
//   },
//   // button: {
//   //        fontWeight: "bold",
//   //        backgroundColor: "#2c116a",
//   //        paddingLeft: "12px",
//   //        paddingRight: "12px",
//   //        borderRadius: "50px",
//   //        color: "white",
//   //     },
// };

const customStyles = {
  logo: {
    marginRight: "2%",
    display: "inline",
  },
  items: {
    marginRight: "20px",
    marginLeft: "20px",
    fontWeight: "bold",
  },
  button: {
    fontWeight: "bold",
    backgroundColor: "",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "50px",
    color: "#0d6efd",
    cursor:"pointer",
  },
};

export default function HeaderComponent({
  setcheckSignUp,
  checkSignUp,
  setShow,
}) {
  const navigate = useNavigate();
  const openLoginPage = () => {
    // setcheckSignUp("login");
    // setShow(true);
    navigate('/login')

  };
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "700px;" }}>
            <img style={customStyles.logo} src={handShake} width="30px" />
            FitPro
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={customStyles.items}>Home</Navbar.Text>
            <Navbar.Text style={customStyles.items}>Doctor</Navbar.Text>
            <Navbar.Text style={customStyles.items}>Services</Navbar.Text>
            <Navbar.Text style={customStyles.items}>Review</Navbar.Text>
            <Navbar.Text style={customStyles.button}>
             <span onClick={openLoginPage} className="cursor-pointer">Login/Signup</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    // <>
    //   <Navbar>
    //     <Container >
    //       <Navbar.Brand href="#home" style={{ fontWeight: '700px', }}>
    //         <img style={customStyles.logo} src={handShake} width="30px" />
    //         Health
    //       </Navbar.Brand>
    //       <Navbar.Toggle />
    //       <Navbar.Collapse className="justify-content-end">
    //         <Navbar.Text style={customStyles.items}>Home</Navbar.Text>
    //         <Navbar.Text style={customStyles.items}>Doctor</Navbar.Text>
    //         <Navbar.Text style={customStyles.items}>Services</Navbar.Text>
    //         <Navbar.Text style={customStyles.items}>Review</Navbar.Text>
    //         <Navbar.Text style={customStyles.button}>
    //           <span onClick={openLoginPage} className="cursor-pointer">Login/Signup</span>
    //         </Navbar.Text>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  );
}


// import React from "react";
// import { Modal } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import handShake from "../images/handshake.png";
// import Navbar from "react-bootstrap/Navbar";

// const customStyles = {
//   logo: {
//     marginRight: "2%",
//     display: "inline",
//   },
//   items: {
//     marginRight: "20px",
//     marginLeft: "20px",
//     fontWeight: "bold",
//   },
//   button: {
//     fontWeight: "bold",
//     backgroundColor: "#2c116a",
//     paddingLeft: "12px",
//     paddingRight: "12px",
//     borderRadius: "50px",
//     color: "white",
//   },
// };

// export default function HeaderComponent({
//   setcheckSignUp,
//   checkSignUp,
//   setShow,
// }) {
//   const openLoginPage = () => {
//     setcheckSignUp("login");
//     setShow(true);
//   };
//   return (
//     <>
//       <Navbar>
//         <Container>
//           <Navbar.Brand href="#home" style={{ fontWeight: "700px;" }}>
//             <img style={customStyles.logo} src={handShake} width="30px" />
//             Health
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text style={customStyles.items}>Home</Navbar.Text>
//             <Navbar.Text style={customStyles.items}>Doctor</Navbar.Text>
//             <Navbar.Text style={customStyles.items}>Services</Navbar.Text>
//             <Navbar.Text style={customStyles.items}>Review</Navbar.Text>
//             <Navbar.Text style={customStyles.button}>
//               <span onClick={openLoginPage} className="cursor-pointer">Login/Signup</span>
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }
