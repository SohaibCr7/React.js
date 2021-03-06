import React from "react";
import User from "./User";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home, Products } from "./Components/Pages";

// It is for Carosal
// import 'pure-react-carousel/dist/react-carousel.es.css';

function App() {
  return (
    <div className="App">
      {/* <User name="Sohaib" age="23" />
      <UseReduce />
      <States/> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
