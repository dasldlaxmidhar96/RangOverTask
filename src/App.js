import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp";
import Store from "./Components/Store";
import Team from "./Components/Team";
import TheJourney from "./Components/TheJourney";
import Login from "./Components/Login";
import "./App.css"

const App = () => {
  
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/the-journey" element={<TheJourney />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
