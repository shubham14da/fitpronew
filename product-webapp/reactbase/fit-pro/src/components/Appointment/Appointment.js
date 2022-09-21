import moment from "moment";
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Badge,
  Form,
  Table,
  Card,
} from "react-bootstrap";
import TimePicker from "react-time-picker";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./appointment.css";
import  ExpertNavbar from "../NavBar/ExpertNavbar";
import Navbar from "../NavBar/Navbar";
// import { DatePicker } from "antd";

function Appointment() {
  const preDate = moment(new Date()).format("Y-MM-DD HH:MM A");
  const [startTime, setStartTime] = useState(preDate);
  const [endTime, setEndTime] = useState(preDate);
  const [data, setData] = useState([]);
  const [itemTimes, setItemTimes] = useState([]);
  const [editTime, setEditTime] = useState(true);
  const [addData, setaddData] = useState(false);
  const [currentStartTime, setCurrentStartTime] = useState("");
  const [currentEndTime, setCurrentEndTime] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [startDateField, setStartDateField] = useState(new Date());
  let sr=1
  // const [toggle, setToggle] = useState(false)

  const emailId = window.localStorage.getItem("EmailID");

  const myFunc = async () => {
    await fetch("http://localhost:3000/booking")
      .then((response) => response.json())
      .then((res) => {
        setItemTimes(res);
      })
      .catch((err) => console.log(err));
  };

  var CurrentDate = moment(startDate).format("MM-DD-YYYY");

  useEffect(() => {
    myFunc();
  }, addData);

  useEffect(() => {
    FetchFunc();
  }, data);

  const handleAddStartTime = (time) => {
    setStartTime(time);
  };

  const handleAddEndTime = (time) => {
    setEndTime(time);
  };

  const FetchFunc = () =>
    fetch(`http://${window.location.hostname}:${window.location.port}/appointmentservice/api/slot/expertslot/${emailId}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response)
      })
      .catch((err) => console.log(err));

  const JsonData = {
    expertId: itemTimes.expertId ? itemTimes.expertId : "abcd",
    schedule_Id: itemTimes.appointment_id
      ? itemTimes.appointment_id
      : "adad122",
    Schedule_date: CurrentDate,
    start_Time: startTime,
    end_Time: endTime,
    status: "Booked",
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(JsonData);
    const json = JSON.stringify(JsonData);
    const res = axios.post(`http://${window.location.hostname}:${window.location.port}/appointmentservice/api/slot/newslot`, {
      scheduleId: JsonData.schedule_Id,
      expertId: emailId,
      scheduleDate: JsonData.Schedule_date,
      startTime: JsonData.start_Time,
      endTime: JsonData.end_Time,
      status: "AVAILABLE"
    }
    ).then(res => {
      FetchFunc();
    })
    .catch(err => {});
    setaddData(true);
  };

  const handleDateSelect = () => {
    console.log("Day selected");
  };

  const handleDateSelectField = () => {
    console.log("Days selected");
  };

  const myFunction = (e) => {
    e.preventDefault();
    fetchData.filter((timefilter) => {
      timefilter.expertId == "abcd"
        ? console.log(timefilter.expertId)
        : console.log("nothing");
    });
  };
  const MyFunction1 = () => {
    fetch("http://localhost:3000/AddScheduler")
      .then((res) => res.json())
      .then((response) => setFetchData(response))
      .catch((err) => console.log("err", err));
  };

  var UpdatedDate = moment(startDateField).format("MM-DD-YYYY");
  // console.log(UpdatedDate , "909999990")
  const JsonTable12 = {
    Schedule_date: UpdatedDate,
    expertId: "abcd",
    schedule_Id: "adad122",
    status: "Booked",
    start_Time: currentStartTime,
    end_Time: currentEndTime,
  };

  const handleEdit = (e) => {
    setEditTime(false);
    MyFunction1();
    myFunction(e);
  };

  const handleCancel = (e) => {
    const deleteSlot = axios.delete(`http://${window.location.hostname}:${window.location.port}/appointmentservice/api/slot/delete/${e}`
    ).then(res => {
      FetchFunc()
    })
    .catch(err => {});
  };

  const handleSubmit = (e) => {
    console.log(JSON.stringify(e));
    const id = JsonTable12.id;
    const json = JSON.stringify(JsonTable12);
    const updateData = {
      scheduleId: e.scheduleId,
      expertId: emailId,
      scheduleDate: e.startDate,
      startTime: e.startTime,
      endTime: e.endTime,
      status: "AVAILABLE"
    }

    if (currentStartTime!= "" && currentEndTime!="") {
      console.log("inside if");
      updateData.startTime= currentStartTime;
      updateData.endTime= currentEndTime;
    }
    if (currentStartTime!= "") {
      console.log("inside 2nd");
      updateData.startTime= currentStartTime;
    }
    if (currentEndTime!= "") {
      console.log("inside 3rd");
      updateData.endTime= currentEndTime;
    }
    // if(startDateField!==""&&currentStartTime!==""&&currentEndTime!==""){
    //   updateData = {
    //     scheduleId: e.scheduleId,
    //     expertId: emailId,
    //     scheduleDate: startDateField,
    //     startTime: currentStartTime,
    //     endTime: currentEndTime,
    //     status: "AVAILABLE"
    //   }
    // }
    // else if (startDateField!==""&&currentStartTime!=="") {
    //   updateData.
    // }
    // else if (currentStartTime!==""&&currentEndTime!=="") {
    //   updateData = {
    //     scheduleId: e.scheduleId,
    //     expertId: emailId,
    //     scheduleDate: e.scheduleDate,
    //     startTime: currentStartTime,
    //     endTime: currentEndTime,
    //     status: "AVAILABLE"
    //   }
    // }
    // else {
    //   updateData = {
    //     scheduleId: e.scheduleId,
    //     expertId: emailId,
    //     scheduleDate: e.scheduleDate,
    //     startTime: e.startTime,
    //     endTime: e.endTime,
    //     status: "AVAILABLE"
    //   }
    // }
    const res = axios.put(`http://${window.location.hostname}:${window.location.port}/appointservice/api/slot/update`, updateData, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {})
    .catch(err=> {});
    setEditTime(true);
  };

  return (
    <div>
      <ExpertNavbar/>
      <img
        id="image-pic"
        src="https://spiralscare.com/us/public/images/blog/1597157731_common-orthopedic-surgery-types.jpg"
      />
      <div className="container-fluid">
        
        <Container>
          <Row className="appointment-row p-5" style={{ textAlign: "center" }}>
          
            <Col>

            <Card style={{"background":"transparent"}}>
            <Card.Body >
            <Table>
            <tr>
              <td>
                <h6 style={{ lineHeight: "0px" }}>Start Date</h6>
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    onSelect={handleDateSelect}
                  />
                </div>
              </td>
              <td>
                <h6 style={{ lineHeight: "0px" }}>StartTime</h6>
                <div>
                  <TimePicker
                    value={startTime}
                    onChange={handleAddStartTime}
                  />
                </div>
              </td>
              <td>
                <h6 style={{ lineHeight: "0px" }}>End Time</h6>
                <div>
                  <TimePicker value={endTime} onChange={handleAddEndTime} />
                </div>
              </td>
              <td>
                <div style={{ alignItems: "center" }} className="mt-3">
                  <Button
                    style={{ width: "150px", padding: "11px" }}
                    onClick={handleAdd}
                  >
                    Add
                  </Button>
                </div>
              </td>
            </tr>
          </Table>
            </Card.Body>
            </Card>
            </Col>
          </Row>

          <div>
            {data.map((fields,index) => (
               
              <ListGroup as="ol" key={fields.id} style={{"marginBottom":"15px"}}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                
                    <Row>
                    <Col style={{"marginTop":"2px"}}>
                    <div className="fw-bold">
                    <DatePicker
                      // selected={fields.Schedule_date}
                      value={fields.scheduleDate}
                      disabled={editTime}
                      onChange={(e) => setStartDateField(e)}
                      onSelect={handleDateSelectField}
                    />
                  </div>
                    </Col>
                      <Col>
                        <div style={{ padding: "2px" }}>
                          <TimePicker
                            id="Start"
                            value={fields.startTime}
                            disabled={editTime}
                            onChange={(e) => setCurrentStartTime(e)}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div style={{ marginLeft: "10px", padding: "2px" }}>
                          <TimePicker
                            value={fields.endTime}
                            id="end_time"
                            disabled={editTime}
                            onChange={(e) => setCurrentEndTime(e)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <Badge>
                    <div
                      className="input-icons"
                      style={{ marginLeft: "auto", display: "flex" }}
                    >
                      <span
                        className="input-group-text p-2"
                        id="basic-addon2"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEdit()}
                      >
                        <i className="fas fa-edit mx-3"></i>
                      </span>
                      <span
                        className="input-group-text p-2"
                        id="basic-addon2"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSubmit(fields)}
                      >
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>

                      <span
                        className="input-group-text p-2"
                        id="basic-addon2"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleCancel(fields.scheduleId)}
                      >
                        <i className="fas fa-times mx-3"></i>
                      </span>
                    </div>
                  </Badge>
                </ListGroup.Item>
              
              </ListGroup>
              
            
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Appointment;

// <Col style={{"border":"1px solid black"}}>
// <div>

// <DatePicker
//   selected={startDate}
//   onChange={(date) => setStartDate(date)}
//   onSelect={handleDateSelect}
// />
// </div>
// </Col>
// <Col>
//   <div>
//     <TimePicker value={startTime} onChange={handleAddStartTime} />
//   </div>
// </Col>
// <Col>
//   <div>
//     <TimePicker value={endTime} onChange={handleAddEndTime} />
//   </div>
// </Col>
// <Col>
//   <div style={{ alignItems: "center" }}>
//     <Button style={{ width: "150px" }} onClick={handleAdd}>
//       Add
//     </Button>
//   </div>
// </Col>


// <Card>
//                 <Card.Body>
//                 <div>
//                   <Button className="btn-card" variant="primary" onClick={""}>
//                     <i className="fas fa-pen"></i>
//                   </Button>
//                   </div>
//                   {/* <Button className='btn-card' variant="primary" onClick={handleShow}><i className="fas fa-pen"></i></Button> */}
//                   <div>
//                   <Card.Subtitle>
//                     <div className="fw-bold">
//                       <DatePicker
//                         // selected={fields.Schedule_date}
//                         value={fields.Schedule_date}
//                         onChange={(e) => setStartDateField(e)}
//                         onSelect={handleDateSelectField}
//                       />
//                     </div>
//                   </Card.Subtitle>
//                   <Card.Text>
//                   <div style={{ padding: "2px" }}>
//                               <TimePicker
//                                 id="Start"
//                                 value={fields.start_Time}
//                                 disabled={editTime}
//                                 onChange={(e) => setCurrentStartTime(e)}
//                               />
//                             </div>
//                   </Card.Text>
//                   <Card.Text>
//                   <div style={{ marginLeft: "10px", padding: "2px" }}>
//                               <TimePicker
//                                 value={fields.end_Time}
//                                 id="end_time"
//                                 disabled={editTime}
//                                 onChange={(e) => setCurrentEndTime(e)}
//                               />
//                             </div>
//                   </Card.Text>
//                   </div>
//                 </Card.Body>
//               </Card>