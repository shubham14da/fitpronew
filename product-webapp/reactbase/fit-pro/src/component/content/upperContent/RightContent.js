// import logo from './logo.svg';

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Navbar,
  Row,
  Stack,
} from "react-bootstrap";
import "../../../components/Profile/Profile.css";
import { minLengthValidation } from "../../../components/functions/validations";

function RightContent() {
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState("")
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [toggle, setToggle] = useState(true);
  // const [toggle, setToggle] = useState(true)

  const email = window.localStorage.getItem("EmailID");

  // const myfun = () => {
  //   fetch(`http://localhost:30036/userservice/api/v1/expertprofile/${email}`)
  //     .then((res) => res.json())
  //     .then(
  //       (response) => (
  //         setFirstName(response.firstName),
  //         setLastName(response.lastName),
  //         setEmailId(response.emailId),
  //         setPhoneNumber(response.phoneNumber),
  //         setData(response)
  //       )
  //     )
  //     .catch((err) => console.log(err));
  // };

  const getProfile = () => {
    fetch(`http://${window.location.hostname}:${window.location.port}/userservice/api/v1/enthusiatprofile/${email}`)
    .then(res=> res.json())
      .then((response) => (
        setFirstName(response.firstName),
        setLastName(response.lastName),
        setEmailId(response.emailId),
        setPhoneNumber(response.phoneNumber)
      ))
      .catch(err => console.log(err));
      
  }

  const handleSubmit = (e) => {
    setToggle(false)
    e.preventDefault();
    const res = axios.put(`http://${window.location.hostname}:${window.location.port}/userservice/api/v1/enthusiast/${email}`, {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      phoneNumber: phoneNumber,
      photo: "",
      avatarUrl: ""
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    setToggle(true)
  }

  console.log(data,"123");

  useEffect(() => {
    getProfile();
  }, []);

  const handleChangefirstName = (e) => {
    setFirstName(e.target.value);
  };
  console.log(firstName,"8989");
  const handleChangelastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangemail = (e) => {
    setEmailId(e.target.value);
  };
  const handleChangephonenumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleValidationFirstName = () => {
    let validation = false;
    if (!minLengthValidation(firstName, 3)) {
      setFirstNameError("Please enter a Name");
      validation = false;
    } else {
      validation = true;
    }
    return validation;
  };

  const JsonData = {
    id: "1001",
    expert_FirstName: firstName,
    expert_LastName: lastName,
    expert_EmailId: emailId,
    expert_Role: "1",
    expert_PhoneNumber: phoneNumber
  };

//   const handleSubmit = (e) => {
//     setToggle(false)
//     e.preventDefault();
//     console.log(JSON.stringify(JsonData));
//     const id = JsonData.id;
//     const json = JSON.stringify(JsonData);
//     const res = axios.put(`http://localhost:30036/userservice/api/v1/expert/${email}`, {
//       firstName: firstName,
//       lastName: lastName,
//       specialization: specialization,
//       emailId: emailId,
//       phoneNumber: phoneNumber,
//       avatarUrl: ""
//     }, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     setToggle(true)
//   };
  
  const handleEdit = ()=>{
    setToggle(false)
  }

  return (
    <>
    <Navbar/>
    <div className="my-3">
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Row>
                <Col>
                  <Card.Body>
                    <Card.Img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      style={{ width: "400px" }}
                    />
                    <h4>{firstName} {lastName}</h4>
                    <p>
                      <br></br>Hind institute of Medical Science{" "}
                    </p>
                    <h6>USA , CALIFORNIA</h6>

                  </Card.Body>
                </Col>
                <Col>
                  <Card.Body>
                      <Row>
                        <Col>
                          <Button
                            variant="outline-primary"
                            type="submit"
                            onClick={handleEdit}
                          >
                            Edit
                          </Button>
                        </Col>
                      </Row>
                     
                       <div>
                      <Row>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicFirstName"
                          >
                            <Form.Label>FirstName:</Form.Label>
                            <Form.Control
                              type="text"
                              disabled={toggle}
                              placeholder="Enter FirstName"
                              value={firstName}
                              onChange={handleChangefirstName}
                              // onBlur={handleValidationFirstName}
                            />
                           
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicLastName"
                          >
                            <Form.Label>LastName:</Form.Label>
                            <Form.Control
                            disabled={toggle}
                              type="text"
                              placeholder="Enter LastName"
                              value={lastName}
                              onChange={handleChangelastName}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          readOnly
                          value={emailId}
                          onChange={handleChangemail}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPhoneNumber"
                      >
                        <Form.Label>PhoneNumber:</Form.Label>
                        <Form.Control
                          type="text"
                          disabled={toggle}
                          placeholder="Enter number"
                          value={phoneNumber}
                          onChange={handleChangephonenumber}
                        />
                      </Form.Group>
                      </div>
                   
                      <div>
                        <Button
                          variant="outline-primary"
                          className="mb-2"
                          
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default RightContent;