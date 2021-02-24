import React from "react";
import User from "./User";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="loader-bg">
        <div className="loader"></div>
      </div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
