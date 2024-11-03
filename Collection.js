import React from "react";
import "./Collection.css";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import Places from "../Assets/Places.jpg";
import Seaplace from "../Assets/Seaplace.jpg";
import Phone from "../Assets/Phone.jpg";
import Food from "../Assets/Food.jpg";

function Collection() {
  return (
    <div className="head">
      <h1 className="collect">Collections</h1>
      <div className="trend">
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Chennai, based on trends
        </p>
        <IoMdArrowDropright className="right-arrow" />
        <p className="all">All Collection in Chennai</p>
      </div>
      <div className="collection">
        <img src={Places} alt="" srcset="" className="places" />
        <div className="new">
          <p>Newly Opened Places</p>
          <p className="eighteen">18 Places</p>
          <MdArrowRight className="mdarrow" />
        </div>
      </div>
      <div className="collection">
        <img src={Seaplace} alt="" srcset="" className="sea" />
        <div className="card-text">
          <p>Sea View Dining</p>
          <p className="nine">9 Places</p>
          <MdArrowRight className="view" />
        </div>
      </div>
      <div className="collection">
        <img src={Phone} alt="" srcset="" className="phone" />
        <div className="insta">
          <p>Best Insta-Worthy Places</p>
          <p className="eleven">11 Places</p>
          <MdArrowRight className="phonearrow" />
        </div>
      </div>
      <div className="collection">
        <img src={Food} alt="" srcset="" className="food" />
        <div className="town">
          <p>Best Buffets In Town</p>
          <p className="thirteen">13 Places</p>
          <MdArrowRight className="foodarrow"/>
        </div>
      </div>
    </div>
  );
}

export default Collection;
