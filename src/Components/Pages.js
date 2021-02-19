import React from  "react";
import {Link} from "react-router-dom"
import NavBar from "./NavBar"
import Slider from "./Slider"
import Category from "./Category";
import Footer from "./Footer"
export function Home(){
    return (
        <div className="Container">
          <NavBar />
          <Slider />
          <Category />
          <Footer />
        </div>
      );
}

export function Products() {
    return (
      <div className="Products">
        <h1>CheckOut</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }