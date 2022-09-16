import React from 'react'


const customStyles = {
  footer:{
       backgroundColor: "black",
        color:"white"
 },
 icon:{
  padding: "8px",
  borderRadius: "18px",
   backgroundColor: "rgb(18 21 24)",
    // backgroundColor: "black",

 },
 footerinside:{
  padding: "35px",
 },
 lefticon:{
  padding: "8px",
     backgroundColor: "rgb(18 21 24)",
    // backgroundColor:"black",
    // color:"#7c7ce2"
 },
 widthEdgiest:{
   width:"10%"
 }
}

export default function FooterComponent() {

  return (
   <>
   <footer  style={customStyles.footer}>
    <div className="container">

    <div className="row m-4" style={customStyles.footerinside}>

       <div className="col-md-5">

        <div className="row">
          <div className="col-md-3" style={customStyles.widthEdgiest}>
          <i class="fa-solid fa-location-dot " style={customStyles.icon}></i>
          </div>
          <div className="col-md-7">
          <p>
           21 Revolution Street <br/>
           <b>Paris, France</b>
         </p>
          </div>

         </div>

         <div className="row">
          <div className="col-md-3" style={customStyles.widthEdgiest}>
          <i class="fa-solid fa-phone" style={customStyles.icon}></i>
          </div>
          <div className="col-md-7">
          <p>
           <b>+080-900-5566</b>
         </p>
          </div>

       </div>

         <div className="row">
          <div className="col-md-3" style={customStyles.widthEdgiest}>
          <i class="fa-solid fa-envelope" style={customStyles.icon}></i>
          </div>
          <div className="col-md-7">
           <a style={{color:"white"}}>fitpro@company.com</a>
          </div>
         </div>
    </div>

       <div className="col-md-4">
        <div className="row">
           <h3>About the company</h3>
         </div>
         <div className="row">
          <p>
          HealthCare Application
           {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias possimus laudantium cupiditate mollitia odit! */}
         </p>
         </div>
        </div> 

       
         <div className="col-md-3">
         <div className="row">
          <div className="col-sm-3" style={customStyles.widthEdgiest}>
          <i class="fa-brands fa-facebook-f" style={customStyles.lefticon}></i>
          </div>
          <div className="col-sm-3" style={customStyles.widthEdgiest}>
          <i class="fa-brands fa-twitter" style={customStyles.lefticon}></i>
          </div>
          <div className="col-sm-3" style={customStyles.widthEdgiest}>
          <i class="fa-brands fa-linkedin-in" style={customStyles.lefticon}></i>
          </div>
          <div className="col-sm-3" style={customStyles.widthEdgiest}>
          <i class="fa-brands fa-github" style={customStyles.lefticon}></i>
          </div>
           <div className="col-sm-3" style={customStyles.widthEdgiest}> 
          <i class="fa-brands fa-instagram" style={customStyles.lefticon}></i>
          </div> 
         </div>
        
         

       </div>
    </div>
    </div>
  </footer>
   </>
  )
}
