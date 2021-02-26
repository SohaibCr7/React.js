import React from "react";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";

export default function Home() {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <Slider />
      <Categories />
      {/* <Footer /> */}
    </div>
  );
}
