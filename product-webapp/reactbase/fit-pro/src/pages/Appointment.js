import React, {useState} from 'react';
import './appointment.css';
import calander from '../assets/calendar.png';
import close from '../assets/close.png'
import Navbar from '../components/NavBar/Navbar';

function Appointment() {
  const [apppointments, setApppointments] = useState([])
  const [appointmentDetails, setAppointmentDetails] = useState({
    "noOfApp": "one",
    "appTime": "1pm - 2pm"
  });

  const handleChange = (e) => {
    setAppointmentDetails({
      ...appointmentDetails,
      [e.target.name]: e.target.value,
    })
    console.log(appointmentDetails)
  }

  const DeleteAppoinement = (index) => {
      let temp = apppointments.filter(item => apppointments.indexOf(item) !== index);
      setApppointments(temp)
      console.log('newData', apppointments)
      console.log(temp)
  }

  const addAppoitment = (e) => {
      e.preventDefault();
      appointmentDetails.id = apppointments.length + 1
      let newList = [...apppointments, appointmentDetails];
      setApppointments(newList);
      console.log(apppointments);
  }

  return (
    <>
    <Navbar/>
      <div className='appointment'>
        <div className='appointment_upper_content'>
          <img src={calander} height="200px" width="200px"/>
          <form onSubmit={addAppoitment}>
              <select value={appointmentDetails.noOfApp} name="noOfApp" onChange={(e) => handleChange(e)}>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
              <select value={appointmentDetails.appTime} name="appTime" onChange={(e) => handleChange(e)}>
                <option value="12pm - 1pm">12pm - 1pm</option>
                <option value="1pm - 2pm">1pm - 2pm</option>
                <option value="2pm - 3pm">2pm - 3pm</option>
                <option value="3pm - 4pm">3pm - 4pm</option>
                <option value="4pm - 5pm">4pm - 5pm</option>
                <option value="5pm - 6pm">5pm - 6pm</option>
              </select>
              <input type="submit" value="Add" className='button_add'/>
            </form>
        </div>
        <div className='appointment_mid_content'>
          <h3 style={{'margin-bottom':'20px', 'textAlign': 'center'}}>Appointment Details</h3>
          <table>
          <tr>
            <th>Appointment Number</th>
            <th>Appointment Time</th>
          </tr>
          {
            apppointments.length > 0 ?
            apppointments.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.noOfApp}</td>
                  <td>{item?.appTime}</td>
                  <td onClick={() => DeleteAppoinement(index)}><img src={close} height="10px" width="10px" alt="delete"/></td>
                </tr>
              )
            })
            : 
            <tr></tr>
          }
          </table> 
        </div>
      </div>
    </>
  )
}

export default Appointment