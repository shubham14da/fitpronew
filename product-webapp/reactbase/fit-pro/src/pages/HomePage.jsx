import React, { useState } from 'react'
import { Button, Card, Carousel, Col, Container, ListGroup, Row, Toast } from 'react-bootstrap';
import homepage from '../image/Homepage.jpg';
import pic1 from  '../image/Aerobics.png';
import pic2 from '../image/Aruyvedic.png';
import pic3 from '../image/Careercounsellor.png';
import pic4 from '../image/cosmetologist.png';
import pic5 from '../image/Counsellor.png';
import pic6 from '../image/Dermatologist.png';
import pic7 from '../image/Fitness instructor.png';
import pic8 from '../image/Gynaecologist.png';
import pic9 from '../image/nutritionist.png';
import pic10 from '../image/physician.png';
import pic11 from '../image/Physiotherapist.png';
import pic12 from '../image/yoga34.png';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
// import Nav from 'react-bootstrap/Nav';
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
 
};

const customStyles = {
     maintext:{
        margin: "30px 30px auto",
        fontWeight:'bold',
        // borderSpacing:'0 15px',
    },
    button:{
        fontWeight:'bold',
    // backgroundColor : "#2c116a"  ,
    backgroundColor: "#0d6efd",
    paddingLeft : "12px",
    paddingRight : "12px",
    borderRadius : "50px",
    color:"white",
    position:"absolute",

},
  showMoreText:{
    marginLeft:"20px"
  },
  p:{
      margin: "10px 30px auto",
      lineHeight: "28px",
      fontSize: "14px",
      color: "#cacdd2",
      // position: "fixed",
      // left: 0,
     
      // width: "95%",
      // backgroundColor: "#2c116a",
  },
  headerOne:{
    backgroundColor: "rgb(173,216,230)",
    padding: "2px",
    marginTop: "1px",
  },
  headerTwo:{
    backgroundColor: "rgb(173,216,230)",
    padding: "2px",
    marginTop: "1px",
  },
  headerThree:{
    backgroundColor: "rgb(173,216,230)",
    padding: "2px",
    marginTop: "1px",
  },
  headerFour:{
    backgroundColor: "rgb(173,216,230)",
    padding: "2px",
    marginTop: "1px",
  },
  img:{
      marginTop :"6px",
      textAlign: "center",
     marginBottom:"10px",
  },
  detailsTop:{
      borderTopRightRadius: "50px",
      padding:"10px",
      marginTop :"20px",
      color: "#ffff",
      // backgroundColor: "#2c116a",
      backgroundColor: "#0d6efd",
  },
  detailsLeft:{
      borderTopLeftRadius: "50px",
      padding:"10px",
      marginTop :"20px",
      color: "#ffff",
      // backgroundColor: "#2c116a",
      backgroundColor: "#0d6efd",
  },
  details:{
      // bottom: 0,
      borderRadius: "50px",
      marginTop :"20px",
      padding:"10px",
      color: "#ffff",
      // backgroundColor: "#6434d2",
      background: "rgb(2,0,36)",
    //  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(216,182,235,1) 35%, rgba(0,212,255,1) 100%)",
    background: " linear-gradient(blue, rgb(117, 113, 237))",
  },
  container:{
    marginBottom:"100px",
  },
  singleImg:{
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width:"90%",
    height:"600px"
  },
  text:{
  marginTop:"40px",
  }
}



export default function HomePage() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const handleClick = () => {
      window.open("https://dribbble.com/shots/17529559-Medical-Healthcare-service-web-design");
    };

    

  return (
    <>
    <HeaderComponent/>
    <Container style={customStyles.container}>
        <Row>
            <Col style={customStyles.maintext}>
               <h1 >
                 {/* For Private <br/> Clinics and <br/>
                 medical centers */}
                   Serving Your<br/>
                  Health Needs is <br/>
                 Our Priority.
               </h1>
               {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam facere debitis, labore et tempora earum illo, odit ipsam at asperiores maxime quia praesentium similique sed quis numquam alias esse dolores expedita doloremque temporibus molestiae, assumenda accusantium. Repudiandae, veniam. Rerum, sint!</p> */}
               <p style={{fontSize:'25px'}}>Good health is a state of mental,physical and social well being
                and it does not just mean the absence of disease!
                </p>
               <Button style={customStyles.button} onClick={handleClick}>Get Appointment</Button>
                {/* <span style={customStyles.showMoreText} >Show More</span> */}
            </Col>
            <Col>
            <img src={homepage} width="100%"/>
            </Col>
        </Row>
        <p style={customStyles.details}>
      <Row >
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic1} width="100px"  />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6'>Aerobics</span><br/>
               {/* exercise with stretching and improving all elements of fitnes */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row >
            <Col style={customStyles.img}>

                <img  style={customStyles.logo} src={pic2} width="140px"  />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Ayurvedic</span><br/>
              {/* traditional medicine of India and seeks to treat and integrate body, mind. */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row  >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic3} width="120px"/>
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Career counsellor</span><br/>
              {/* someone whose job is to give people advice and information about what type of work they can do   */}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{marginBottom:"15px"}}>
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic4} width="80px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >cosemetologist</span><br/>
              {/* the cosmetic treatment of the skin, hair, and nails. */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col >
          <Row  >
            <Col style={customStyles.img}>

                <img  style={customStyles.logo} src={pic5} width="180px" />
            </Col>
            <Col>
              <p style={customStyles.text}>

              <span className='h6' >Counsellor</span><br/> 
              {/* Lorem, ipsum dolor sit amet consectetur */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic6} width="80px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Dermatologist</span><br/>
              {/* medical doctor that specializes in conditions that affect your skin, hair, and nail */}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{marginBottom:"20px"}}>
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic7} width="120px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Fitness instructor</span><br/>
              {/* activities relating to keeping healthy and strong, especially through exercise */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col >
          <Row >
            <Col style={customStyles.img}>

                <img  style={customStyles.logo} src={pic8} width="80px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Gynaecologist</span><br/> 
              {/* doctor skilled in the treatment of women's diseases, especially those of the reproductive organs */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic9} width="100px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Nutritionist</span><br/>
              {/* A nutritionist is an expert on food, nourishment, and health. */}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic10} width="100px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Physician</span><br/>
              {/* one who specializes in diagnosis and medical treatment as distinct from surgery */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col >
          <Row style={{marginBottom:"10px"}}>
            <Col style={customStyles.img}>

                <img  style={customStyles.logo} src={pic11} width="100px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Physiotherapist</span><br/> 
              {/* treatment that focuses on physical methods to prevent injuries such as massage, heat treatment and different form of exercises  */}
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row >
            <Col style={customStyles.img}>
                <img  style={customStyles.logo} src={pic12} width="70px" />
            </Col>
            <Col>
              <p style={customStyles.text}>
              <span className='h6' >Yoga</span><br/>
              {/* Lorem, ipsum dolor sit amet consectetur */}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
   </p> 
 

   <center><h1 style={{margin:'20px',padding:'20px'}}>FitPro Vision</h1></center>
   <Row>

     {/* <Card >
        {/* <Card.Header>Header</Card.Header> */}
        {/* <Card.Body > */}
          {/* <Card.Title><h1>Fitpro Vision:</h1></Card.Title><br/> */}
          {/* style={{fontSize:'30px',width:'35rem', height:'20rem',padding:'25px',margin:'25px',}} */}
          {/* <Card.Text >
         FitPro mission is to “make health easy”.Through our products and services, we want to enable people to significantly improve their overall health, 
         reduce the risk of lifestyle diseases and enable a long, disease free life.
          </Card.Text> */}
        {/* </Card.Body> */}
      {/* </Card> */} 
     <p style={{fontSize:'30px',width:'35rem', height:'20rem',padding:'25px',margin:'25px',}} >
      FitPro mission is to “make health easy”.Through our products and services, we want to enable people to significantly improve their overall health, 
         reduce the risk of lifestyle diseases and enable a long, disease free life.
      </p>
      <Card  style={{ width: '40rem',float:'right',height:'25rem',borderRadius: '50px'}}>      
   <Card.Img  style={{ width: '40rem',float:'right',height:'25rem',borderRadius: '50px',marginLeft: "-12px"}} variant="top" src="https://fellow.app/wp-content/uploads/2021/09/360-feedback.jpg" />
  </Card> 
    </Row>
    <Row>
    <center><h1 style={{margin:'20px',padding:'20px'}}>Features</h1></center>
    </Row>









      {/* <center> <h1 style={{margin:'20px',padding:'20px',}}>Features </h1> </center> */}
          {/* <h3>For Active Lifestyle</h3> */}
      
     
      
      <Card  style={{ width: '25rem',float:'center',margin:'0 auto',marginTop:'5px',}}>
        <center><Card.Header style={customStyles.headerOne}>Consult Doctors Online</Card.Header>
        <Card.Body  style={{borderTopColor:'red',}}>
          <Card.Title></Card.Title>
          <Card.Text>
         <center>Get the Best Guidance for Any Health Issue with Instant Online Doctor Consultation.Most Trusted Doctors from the Comfort of Your Home. Video, Audio, Chat Option.</center>
          </Card.Text>
        </Card.Body></center>
      </Card>
      <br />

      <Card style={{ width: '25rem',float:'left', marginTop: "-57px",}}>
      <center> <Card.Header style={customStyles.headerTwo}>Book Top Quality Surgery</Card.Header></center> 
      <Card.Body>
          <Card.Title ></Card.Title>
          <Card.Text style={{borderColor: 'red'}}>
          <center>Specialist knowledge for accurate diagnosis of a patient's condition. · Good communication skills – for speaking to your medical team, your patients.</center> 
          </Card.Text>
        </Card.Body>
      </Card>
      <br />


      <Card  style={{ width: '25rem',float:'right' ,marginTop: "-80px",}}>
       <center> <Card.Header style={customStyles.headerThree}>Health Care Packages</Card.Header></center>
        <Card.Body>
          <Card.Title style={{borderColor: 'red'}}></Card.Title>
          <Card.Text>
           <center> helps to secure your health through preventive health check-up packages that offer comprehensive screening to best protect your defense . </center>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card  style={{ width: '25rem',float:'center' ,margin:'0 auto',marginTop:'5px',}}>
      {/* <Card style={{ width: '25rem',float:'left', marginTop: "-57px",}}> */}
         <center><Card.Header style={customStyles.headerFour}>At home live workouts</Card.Header></center> 
        <Card.Body>
          <Card.Title style={{borderColor: 'red'}}></Card.Title>
          <Card.Text>
         <center> Online exercise classes are instructional workouts offered via livestream or on-demand that you can watch and follow along with at home. </center>  
          </Card.Text>
        </Card.Body>
      </Card> 
      <br />

     

     
   


     </Container>
     <FooterComponent/>
     </>
  )
}

