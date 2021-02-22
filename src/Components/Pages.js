import React from  "react";
// import {Link} from "react-router-dom"
import NavBar from "./NavBar"
import Slider from "./Slider"
import Categories from "./Categories";
import Footer from "./Footer"

import Product from "./Products"
export function Home(){
    return (
        <div className="Container">
          {/* <NavBar /> */}
          <Slider />
          <Categories />
          {/* <Footer /> */}
        </div>
      );
}

export function Products() {
    return (
      <div className="Products" >
        <Product />
      </div>
    );
  }