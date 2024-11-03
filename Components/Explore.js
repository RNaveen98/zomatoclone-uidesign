import React from 'react'
import "./Explore.css";
import  { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp} from "react-icons/md";
  

function Explore() {

  const items = [
    "Bakery near me",
    "Beverage near me",
    "Biryani near me",
    "Burger near me",
    "Chinese near me",
    "Coffee near me",
    "Continental near me",
    "Desserts near me",
    "Italian near me",
    "Mithai near me",
    "Momos near me",
    "Mughlai near me",
    "North Indian near me",
    "Pasta near me",
    "Pizza near me",
    "Rolls near me",
    "Sandwich near me",
    "Shake near me",
    "South Indian near me",
    "Street food near me",
  ];
  const [isVisible, setIsVisible] = useState(false);

  const toggleList = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className='explore'>
      <h1>Explore options near me</h1>
      <button onClick={toggleList}>
        {isVisible ? <MdOutlineKeyboardArrowUp className='board'/> : <MdOutlineKeyboardArrowDown className='board'/>}<h5 className='near'>Popular cuisines Near me</h5>
      </button>
      {isVisible && (
        <ul>
          {items.map((category, index) => (
            <li key={index}>{category} near me</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Explore