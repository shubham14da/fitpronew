import axios from 'axios';
import React, {useState, useEffect} from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import './upperContent.css';


function UpperContent() {
  const [data, setData] = useState({});
  const emailId = window.localStorage.getItem("EmailID");
  
  const [displayData, setDisplayData] = useState({
    "firstname": "Anurag",
    "lastname": "Bista",
    "email" : "Anuragbista007@gmail.com",
    "phone": "1234567890"
  })

    
    

  return (
    <div className='upper_content'>
        <LeftContent data={data} displayData={displayData} setDisplayData={setDisplayData}/>
        <RightContent/>
    </div>
  )
}

export default UpperContent
