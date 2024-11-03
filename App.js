import React from "react";
import './App.css';
import Home from "./Components/Home.js";
import Get from "./Components/Get.js"
import Login from "./Components/Login.js"
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup.js";
import Restaurtant from "./Components/Restaurtant.js";



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Get" element={<Get/>}></Route>
        <Route path="/Restaurtant" element={<Restaurtant/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
