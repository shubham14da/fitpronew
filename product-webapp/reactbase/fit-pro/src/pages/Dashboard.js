import React from 'react';
import LowerContent from '../component/content/lowerContent/LowerContent';
import RightContent from '../component/content/upperContent/RightContent';
import UpperContent from '../component/content/upperContent/UpperContent';
import Navbar from '../components/NavBar/Navbar';

function Dashboard() {
  
  return (
    <>
    <Navbar/>
        <RightContent />
        <LowerContent />
    </>
  )
}

export default Dashboard