import React from 'react'
import "./Zomatoapp.css";
import { useState } from "react";
import Mobilephone from"../Assets/Mobilephone.jpg";
import Playstore from "../Assets/appstore/Playstore.jpg";
import Appstore from "../Assets/appstore/Appstore.jpg"


function ZomatoApp() {
    // State for the selected option and input value
    const [contactMethod, setContactMethod] = useState("email");
    const [inputValue, setInputValue] = useState("");
  
    // Handle radio button change
    const handleRadioChange = (e) => {
      setContactMethod(e.target.value);
      setInputValue(""); // Reset input value when switching options
    };
  
    // Handle input change
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };


  return (
    <div className='mobilephone'>
     <h1>Get the Zomato app</h1>
     <div className='open'>
        <p className='send'>We will send you a link, open it on your phone to download </p>
        <p className='theapp'>the app</p>
        <img src={Mobilephone} alt=""className='phoneapp'/>
      </div>
       <div className='inputgroup'>
        <input 
          type="radio" 
          id="email"
          value="email"
          checked={contactMethod === "email"}
          onChange={handleRadioChange} className='input-filed'
        />
        <label htmlFor="email" className='mail'>Email
        <input
          type="radio"
          id="phone"
          value="phone"
          checked={contactMethod === "phone"}
          onChange={handleRadioChange} className='number'
        /></label>
        <label htmlFor="phone" className='mobilenumber'>Phone</label>
      </div>

      <div>
        {contactMethod === "email" ? (
          <input className='em'
            type="email"
            placeholder="Email"
            value={inputValue}
            onChange={handleInputChange}
          />
        ) : (
          <div>
            <select className='em'>
                <option value="+91">+91</option>
                <option value="+60">+60</option>
                <option value="+63">+63</option>
                <option value="+94">+94</option>
                <option value="+56">+56</option>
                <option value="+1">+1</option>
                <option value="+64">+64</option>
              {/* You can add more country codes here */}
            </select>
            <input className='em'
              type="tel"
              placeholder="type here..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>
      <div>
        <p className='applink'>Share App Link</p>
      </div> 
      <div>
        <p className='download-app'>Download app from</p>
      </div>
      <div className="store-image">
         <img src={Playstore} alt="" srcset="" className='play'/>
         <img src={Appstore} alt="" srcset="" className='appplay'/>
      </div>
    </div>
  )
}

export default ZomatoApp