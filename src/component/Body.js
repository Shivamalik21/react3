import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/react-splide/css/sea-green';

const Body = () => {
  return (
    <div >
    <div  > <Splide aria-label="My Gallery">
    <SplideSlide >
      <div style={{width:"100%", height:"80vh", padding:"0px" }}><img src="875959_high-resolution-happy-family-1920-1080-wallpapers-full-size_1920x1080_h.jpg" alt="Imag1" style={{width:"100%", }}/>
   
      </div> 
      </SplideSlide>
    <SplideSlide>
   <div style={{width:"100%", height:"80vh", padding:"0px", }}><img src="19.happy-family-lying-row_1098-1101.jpg" alt="Imag2" style={{width:"100%"}}/>
   
   </div>
    </SplideSlide>
  </Splide></div>
  {/* secondDiv in body */}
  <div style={{backgroundColor:"brown",height:"50vh", color:"white",paddingTop:"5%" }}> 
    <h1>Think Health. Think Massage.</h1>
    <p style={{ height:"10vh", width:"55vw", marginLeft:"20%", marginTop:"4%"}}>We are open 9am to 6pm.Monday through Sunday. if would you like to schedule an apointment with us ,Please call us at 987-654-3210 today!</p>
    {/* button */}
    <div style={{marginTop:"3%", display:"flex",justifyContent:"center", gap:"50px"}}><span style={{border:"2px solid white",  padding:"2vh"}} >Learn more about us</span>
    <span style={{border:"2px solid white",  padding:"2vh"}}>Contact us today</span>
    </div>

  </div>
  {/* ThirdDiv in Body */}
  <div style={{textAlign:"start", margin:"50px 50px 10vh 30px",display:"flex", flexDirection:"column",gap:"5vh"}}>
    <p style={{color:"brown"}}>Are you looking for a professional, registered massage therepist? Sample Massage Therapy has 4 registered mass therapists who can provide clinical massage.</p>
    <p>We are committed to your long term hesith and well-being. Our multi-disciplinary clinic provides a balanced approach to a hes Enhance your neaith and improve your performance with our treatmenta.</p>
<p>We welcome you to come explore all the benefits you'li enjoy as one of our velued guezts. Our professional staff is committed t best massage therapy in Mainland.</p>

  </div>
  <hr></hr>
  {/* FourthDiv in body */}
  <div>
    <h2 style={{color:"brown", marginTop:"50px"}}>Family Wellness Massage Therapy</h2>
    <span style={{}}>987 Main Street, Suite 123,Mainland.Ml12345</span>
    <p> Phone:9876543210</p>
  </div>
  </div>
  )
}

  



export default Body