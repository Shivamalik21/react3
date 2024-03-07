import React from 'react'

const Header = () => {
  return (
    < >
    <h1 style={{textAlign:"start", fontStyle:"italic", fontFamily:"sans-serif", color:"brown", fontSize:"40px"}}>Family Wellness</h1>
    <p style={{textAlign:"start"}}>MASSAGE THERAPY</p>
        <ul style={{display:"flex",listStyle:"none" ,gap:"14vw", fontSize:"22px", backgroundColor:"lightgray",height:"40px",padding:" 0px ",marginBottom:"0px" }}>
        <li style={{padding:"0px 50px 0px 50px", backgroundColor:"brown", color:"white"}}>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>FaQ</li>
        <li>Contact</li>
    </ul>
    
    </>
  )
}

export default Header