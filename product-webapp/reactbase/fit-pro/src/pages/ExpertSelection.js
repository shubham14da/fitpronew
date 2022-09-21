import React, { useState, useEffect } from 'react';
import ExpertList from '../component/expertList/ExpertList';
import Navbar from '../components/NavBar/Navbar';
import './expertlist.css';

function ExpertSelection() {
    const [expert, setExpert] = useState("");
    const emailId = window.localStorage.getItem("EmailID");
    const role = window.localStorage.getItem("Role");
    const handleChange = (e) => {
        setExpert(e.target.value)
    }

    const [user, setUser] = useState({})

    useEffect(() => {
        
            fetch(`http://${window.location.hostname}:${window.location.port}/userservice/api/v1/enthusiatprofile/${emailId}`)
            .then(res => res.json())
            .then(res => setUser(res))
            .catch(err => console.log(err))
        
        
    }, [])

    // console.log('test')

    return (
        <>
        <Navbar/>
        <div className='expertList'>
            <div className='choose_expert'>
                <h1>Welcome {user.firstName}</h1>
                <div style={{'display':'flex', 'flex-direction':'row', 'align-items':'center', 'justify-content':'center'}}>
                    <p>Expert:</p>
                    <select value={expert} onChange={(e) => handleChange(e)}>
                        <option value="Dietician"> Dietician </option>
                        <option value="Physician"> Physician </option>
                        <option value="Allergists"> Allergists </option>
                        <option value="Anesthesiologists"> Anesthesiologists </option>
                        <option value="Cardiologists"> Cardiologists </option>
                        <option value="Dermatologists"> Dermatologists </option>
                    </select>
                </div>
            </div>
            <ExpertList expert={expert}/>
        </div>
        </>
    );
}

export default ExpertSelection;