import React from "react";
import Header from "./Header"
import Card from "./Card"
import Footer from "./Footer";
import Collection from "./Collection";
import Popular from "./Popular"
import Zomatoapp from "./Zomatoapp";
import Explore from "./Explore";
// import Restaurtant from "./Restaurtant";
// import Button from "./button";
// import Order from "./Order.js";
// import Signup from "./Signup.js";
// import Login from "./Login.js"
// import ReactDOM from 'react-dom'


function Home() {
  return (
    <div>
      <Header/>
      <Card/> 
      {/* <Login/> */}
      {/* <Signup/> */}
      <Collection/>
      <Footer/>
      <Popular/>
      <Zomatoapp/>
      <Explore/>
      {/* <Restaurtant/> */}
      {/* <Button/> */}
      {/* <Order/> */}
    </div>
  )
}

export default Home;