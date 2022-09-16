import React, { useEffect, useState } from 'react';
import './upperContent.css';
import dp from '../../../assets/avatar.png';

function LeftContent({data, displayData}) {
  console.log(JSON.stringify(data));
  const [avatar, setAvatar] = useState(dp)

  return (
    <div className='left_content subcontent'>
        <div className='profile'>
          <img className='profile_avatar' src={avatar} alt="avatar" height="300px" width="300px"/>
        </div>
        <h6>{data?.firstname.toUpperCase()}</h6>
        <p>{data?.emailId}</p>
        <p>{data?.phone}</p>
    </div>
  )
}

export default LeftContent;