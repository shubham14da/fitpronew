import logo from './logo.svg';
import './App.css';
import React,{useState , useEffect} from 'react';
import axios from 'axios';


function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [jsonRes, setJsonRes] = useState("")


  const myfun = ()=>{
   fetch("http://localhost:3000/fitPro")
   .then(res => res.json())
   .then(response => setJsonRes(response))
   .catch(err => console.log(err))
  }
  console.log(jsonRes[0]);
  useEffect(() => {
    myfun()
  }, [])

  const handleChangefirstName = (e)=>{
   setFirstName(e.target.value);
  
  }
  const handleChangelastName = (e)=>{
    setLastName(e.target.value);
   
   }
   const handleChangemail = (e)=>{
    setEmailId(e.target.value);
   
   }
   const handleChangephonenumber = (e)=>{
    setPhoneNumber(e.target.value);
   
   }
   const handleChangespecialization = (e)=>{
    setSpecialization(e.target.value);
   
   }

 
  const handleSubmit = (e) =>{
  e.preventDefault();

  const json =  JSON.stringify({  });
  const res =  axios.post('http://localhost:3000/posts', json, {
  headers: {
    'Content-Type': 'application/json'
  }
});
  
  console.log("333" , res)
  }
  
  
  return (
    <div className="App">
    <div>
    <label>FirstName: </label>
    <input type="text" placeholder='firstname' id="firstname" onChange={handleChangefirstName} value={firstName}/>
    </div>
    <div>
    <label>LastName: </label>
    <input type="text" placeholder='lastname' id="lastname" onChange={handleChangelastName} value={lastName}/>
    </div><div>
    <label>Email: </label>
    <input type="email" placeholder='email' id="email" onChange={handleChangemail} value={emailId}/>
    </div><div>
    <label>PhoneNumber: </label>
    <input type="text" placeholder='phoneNumber' id="phoneNumber" onChange={handleChangephonenumber} value={phoneNumber}/>
    </div><div>
    <label>Specialization: </label>
    <input type="text" placeholder='specialization' id="specialization" onChange={handleChangespecialization} value={specialization}/>
   </div>
    <button onClick={handleSubmit}>Submit</button>
    
      
    </div>
  );
}

export default App;
