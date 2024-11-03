import React, { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {FaAngleDown } from 'react-icons/fa';
import 'react-phone-input-2/lib/style.css'; // Optional: for styling
import "./Login.css";
import { MdEmail } from "react-icons/md";
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import flag from "../Assets/flag.png";
// import { Phone } from '@mui/icons-material';

function Login() {
  const countries = [
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪' },
    { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    // Add more countries as needed
  ];

  // const CountrySelector = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  
  //   const toggleDropdown = () => {
  //     setIsOpen(!isOpen);
  //   };
  
  //   const selectCountry = (country) => {
  //     setSelectedCountry(country);
  //     setIsOpen(false);
  //   };
  
  // }
  const Navigate = useNavigate ();
   
  const handleClick = () =>{
    Navigate('/Login'); 
    Navigate('/'); 
 };
 const clickButton = () =>{
   Navigate('/Signup'); 
 }


  
  return (
    <div className="main">
      <main>
        <h1 className="logintext">Login</h1>
        <CloseButton className="cross-icons"title="cross" onClick={handleClick}/>
        <div className="country-select mt-2">
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          +91
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        < FaAngleDown className="down-icons"/>
      </InputGroup>
        </div>
          <div className='account mt-5'> 
           <Button type="submit" variant="danger" className="otp-button w-90">Send One Time Password</Button>
         </div>
        <div className="or">
          <p>or</p>
        </div>
        <div className="continue">
        <MdEmail className="email-icons"/><p>Continue with Email</p>
        </div>
        <div className='google mt-4'>
          <FcGoogle className='fc-icons'/><span>Sign in with Google</span>
          </div>
        <div className="master">
          <p>New to Zomato?</p>
        </div>
        <div className="">
          <span className="link-tag"onClick={clickButton} style={{cursor:"pointer"}}>Create account</span>
          </div>
      </main>
    </div>
  );
}

export default Login;