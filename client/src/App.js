import { Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Offering from "./components/Offering";
import Contact from "./components/Contact";
import Login from "./components/Login";

import "./App.css";
import HomeTemplate from "./components/HomeTemplate";
import Create from "./components/Create";
import Rides from "./components/Rides";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
        <Route path="/home" element={<HomeTemplate />} />
        <Route path="/about" element={<About />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rides" element={<Rides />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
