import React from "react";
import "./Popular.css";
import { MdChevronRight } from "react-icons/md";
// import { Add } from "@mui/icons-material";
// import { MdKeyboardArrowDown } from "react-icons/md"

const Popular = () => {
  const localities = [
    {
      Heading:"T.Nagar",
      placeCount:"375 Places"
  },
  {
      Heading:"Nungambakkam",
      placeCount:"323 Places"
  },
  {
      Heading:"Velachery",
      placeCount:"323 Places"
  },
  {
      Heading:"Adyar",
      placeCount:"225 Places"
  },
  {
      Heading:"Anna Nagar East",
      placeCount:"386 Places"
  },
  {
      Heading:"Thuraipakkam",
      placeCount:"273 places"
  },
  {
      Heading:"Mylapore",
      placeCount:"182 Places",
  },
  {
      Heading:"Alwarpet",
      placeCount:"149 places"
  },
  {
      Title: "Seemore"
  }
  
  ];

  return (
    <div className="popular">
      <h1>Popular localities in and around Chennai</h1>
      <div className="popular-places">
        {/* Using map function to display each locality */}
        {localities.map((locality, index) => (
          <div key={index} className="locality-box">
            <div className="locality-name">{locality.Heading}</div>
            <div className="locality-placeCount">{locality.placeCount}<MdChevronRight className="poular-icon"/></div>
            <div className="seemore">{locality.Title}</div> 
          </div>
        ))}
      </div>
      {/* <div className="seemore"><MdKeyboardArrowDown className="seemore-arrow"/>
        Seemore
      </div> */}
    </div>
  );
};

export default Popular;

