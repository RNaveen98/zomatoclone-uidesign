import React from 'react'
import "./Footer.css";
// import { useState } from 'react';
import blackLogo from "../Assets/blackLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import Appimage from "../Assets/Appimage.jpg";
import Playimage from "../Assets/Playimage.jpg";
import { MdLanguage } from "react-icons/md";
import flag from "../Assets/flag.png";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { IoMdArrowDropup } from "react-icons/io";
// import { MdArrowDropDown } from "react-icons/md";



function Footer() {
  return (
    <div class="container">
      <div className="logo w-100 d-flex flex-row justify-content-between position-relative start-0 end-50">
          <img src= {blackLogo} alt="" srcset="" className='black'/>
        <div className='dropdown'>
         <button type="button" class="btn">India<img src={flag} alt="" srcset="" className='flag h-75 width-50'/><RiArrowDropDownLine className='arrow'title='chevron-down'/>
         </button>
         <div className='list'>
          {/* <ul>
            <li>India</li>
            <li>UAE</li>
          </ul> */}
         </div>
        </div>
        <div className='English'>
          <button type="button" class="btn">English<MdLanguage className='english'/><RiArrowDropDownLine className='downarrow' title='chevron-down' />
          {/* {!isopen ?(<MdArrowDropDown/>
          ) :(
            <IoMdArrowDropup/>
          )} */}
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 ">
          <p className="para1 h5 fw-bold">About Zomato</p>
          <p>Who We Are</p>
          <p>Blog</p>
          <p>Work With Us</p>
          <p>Investor Relations</p>
          <p>Report Fraud</p>
          <p>Press Kit</p>
          <p>Contact Us</p>
        </div>
        <div class="col-2">
          <p className="para2 h5 fw-bold">Zomaverse</p>
          <p>Zomato</p>
          <p>Blinkit</p>
          <p>Feeding India</p>
          <p>Hyperpure</p>
          <p>Zomaland</p>
          <p>Weather Union</p>
        </div>
        <div class="col-2">
          <p className="para3 h5 fw-bold">For Restaurants</p>
          <p>Partner With Us</p>
          <p>Apps For You</p>
        </div>
        <div class="col-2">
          <p className="h5 fw-bold">Learn More</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
          <p>Sitemap</p>
        </div>
        <div class="col-3">
          <p className="socialmedia h5 fw-bold">Social links</p>
          <div className="mediaicons fs-4 p-0">
             <FaLinkedin className='rounded-circle'/>
             <FaInstagramSquare className='rounded-circle'/>
             <FaTwitterSquare className='rounded-circle'/>
             <FaYoutubeSquare className='rounded-circle'/>
             <RiFacebookBoxFill className='rounded-circle'/>
          </div>
          <div className='playstore'>
              <img src={Appimage} alt="" srcset="" className='app w-75 h-75 d-flex flex-column p-3'/>
              <img src={Playimage} alt="" srcset="" className='playicon w-75 h-75 bottom-2 d-flex flex-column p-2'/>
          </div>
        </div>
        <div>
          <hr />
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
