import React from 'react'
import "./Restaurtant.css"
import Business from "../Assets/Business.png"
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function Restaurtant() {

 const Navigate = useNavigate ();

//function to open the popup
    const handleLoginClick = () =>{
     Navigate('/'); //redirect to home page
   };
  return (
    <div>
     <div>
        <h1>Partner with Zomato
        at 0% commission for the 1st month!</h1>
        <p>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
       <img src={Business} alt="" srcset="" />
     </div>
      <RxCross2 className="cross-icons"title="cross" onClick={handleLoginClick}/>
    </div>
  )
}

export default Restaurtant
