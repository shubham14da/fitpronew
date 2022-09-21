import React, {useEffect, useState} from 'react';
import './experts.css';
import experts from '../../database/experts';
import avatar from '../../assets/avatar.png';
import Modal from "../modal/Modal";
import Pagination from '../pagination/Pagination';
import Navbar from '../../components/NavBar/Navbar';


function ExpertList({expert}) {

    const [isModalOpen, setModalIsOpen] = useState(false); 
    // const [expertList, setExpertList] = useState([])
    const [expertId, setExpertId] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8)
    const [ListData, setListData] = useState([8]);
    const [expertEmailId, setExpertEmailId] = useState("");

    const [expertListData, setExpertListData] = useState([])

     
	const toggleModal = (id) => {
		setModalIsOpen(!isModalOpen);
        //setExpertId(expertListData.filter(item =>console.log(item,"111") ))
        setExpertEmailId(id)
        // console.log(expertId)
	};

    // item.Expert_Id === id && item.status === "Available"

    useEffect(() => {
    fetch(`http://${window.location.hostname}:${window.location.port}/userservice/api/v1/experts`)
    .then(res=>res.json())
    .then(response=>setExpertListData(response))
    .catch(err=>console.log(err));
  }, []);
// console.log(expertListData,"1234");
// // const doctor = expertListData ;
// console.log(experts,"feu");
    useEffect(() => {
        if(expert === 'Allergists'){
            setListData(expertListData.filter(item => item.specialization === "physician"))
        }
        else if(expert === 'Anesthesiologists'){
            setListData(expertListData.filter(item => item.specialization === "Anesthesiologists"))
        }
        else if(expert === 'Cardiologists'){
            setListData(expertListData.filter(item => item.specialization === "Cardiologists"))
        }
        else if(expert === 'Dermatologists'){
            setListData(expertListData.filter(item => item.specialization === "Dermatologists"))
        }
        else if(expert === 'Gastroenterologists'){
            setListData(expertListData.filter(item => item.specialization === "Gastroenterologists"))
        }
        else{
            setListData(expertListData)
            console.log('okay', ListData)
        }
    }, [expert])
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = ListData.slice(indexOfFirstPost , indexOfLastPost)
console.log(expertListData,"1211");
    const paginate = (number) => {
        setCurrentPage(number)
    }

    console.log(ListData,"aaa");

    console.log('pagenumber', currentPage)
    return (
        <div className=''>
            <div className='list_of_experts'>
            {isModalOpen && <Modal onRequestClose={toggleModal} id={expertEmailId}/>}
            {
                expertListData?.map((item, index) => {
                    return (
                        <div className='each_expert' key={index}>
                            <img src={avatar} height="50px" width="50px" alt="avatar"/>
                            <h3>{item.firstName} </h3>
                            {/* <h5>{item.expert_lastName}</h5> */}
                            {/* <h5>{item.expert_role}</h5> */}
                            <h5>{item.specialization}</h5>
                            {/* <h5>{item.expert_phoneNumber}</h5> */}
                            <h5>{item.educationalQualification}</h5>
                            <h5>{item.aboutMe}</h5>
                            {/* <h5>{item.expert_experience}</h5> */}



                            {/* <p> {item.Appointment_specialization} </p> */}
                            <button onClick={() => toggleModal(item.emailId)}>Book Appointment</button>
                        </div>
                        );
                })
            }
            </div>
            {/* <Pagination postsPerPage={postsPerPage} totalPost={setListData.length} paginate={paginate}/> */}
            </div>
    );
    }

export default ExpertList;
