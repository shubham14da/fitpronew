import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import './modal.css';
import close from '../../assets/close.png'
import axios from "axios";
import { BiTime } from 'react-icons/bi';
import { AiFillCalendar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
// import experts from '../../database/experts'

const Modal = ({ onRequestClose, id }) => {
	const [date, onChange] = useState(new Date());
	const [data, setData] = useState([]);
	const emailId = window.localStorage.getItem("EmailID");
	const [expertProfile, setExpertProfile] = useState({});
	// const data = experts.doctors.AddScheduler.filter(item => item.Expert_Id === id && item.status === "Available")

	// console.log('date',date)

	const customStyles = {
		iconsize:{
			height:"25px"
		}
	}

	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};

	});


		const getAllSlots = () => {
			console.log("inside get slots");
			fetch(`http://${window.location.hostname}:${window.location.port}/appointmentservice/api/slot/expertslot/${id}`)
		.then(res=>res.json())
		.then(jsondata=>setData(jsondata))
		//.then(response=>setData(response))
		.catch(err=>console.log(err));
}

	  useEffect(()=> {
		getAllSlots();
	  }, [])

	const bookAppointment = (item) => {
		// experts.doctors.AddScheduler.find(item => item.schedule_Id === id).status = "Booked";
		// setData(temp)
		// const temp = data.filter(item => item.schedule_Id != id);
		const FetchFunc =
    axios.get(`http://${window.location.hostname}:${window.location.port}/userservice/api/v1/expertprofile/${item.expertId}`)
      .then((res) => res.json())
      .then((response) => 
        setExpertProfile(response)
      )
      .catch((err) => {});
    const res = axios.post(`http://${window.location.hostname}:${window.location.port}/appointmentservice/api/appointment/save`, {
      	appointmentId: "",
		userEmailId: emailId,
		expertEmailId: item.expertId,
		userName: "",
		expertName: expertProfile.firstName + " "+ expertProfile.lastName,
		appointmentSpecialization: "",
		PatientConcern:"",
		startTime:item.startTime,
		endTime:item.endTime,
		appointmentStatus: "BOOKED",
		appointmentDate:item.scheduleDate.substring(6, 10)+"-"+item.scheduleDate.substring(3, 5)+"-"+item.scheduleDate.substring(0, 2),
		bookedOn: new Date()
    }
    ).then(res => {
		toast("Booking Successfull",{type: "success"})
		toast("Email Confirmation sent",{type: "success"})
		const updateSlot = axios.put(`http://${window.location.hostname}:${window.location.port}/appointmentservice/api/slot/update`, {
			scheduleId: item.scheduleId,
			expertId: item.expertId,
			scheduleDate: item.scheduleDate,
			startTime: item.startTime,
			endTime: item.endTime,
			status: "BOOKED"
		  }
		  ).then(res => {
			console.log(res);
			getAllSlots();
		  })
		  .catch(err => {});
		})
    .catch(err => {});
		
	};

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title"></h3>
				<DatePicker onChange={onChange} value={date} />
					{
						data.map(item => {
							return (
								<div key={item.scheduleId} className="booking_list">
									<h5><BiTime style={customStyles.iconsize}/>{item.startTime.substring(11, 19)} - {item.endTime.substring(11, 19)}</h5>
									<h5><AiFillCalendar style={customStyles.iconsize}/>{item.scheduleDate}</h5>
									<button className='btn-book' onClick={() => bookAppointment(item)}>book</button>
								</div>
							);
						})
					}
				<button type="button" className="btn-close-modal" onClick={onRequestClose}>
					<img src={close} height="10%" width="10px" alt="close" />
				</button>
			</div>
			<ToastContainer/>
		</div>
	);
};

export default Modal;