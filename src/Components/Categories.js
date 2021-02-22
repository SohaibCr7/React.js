import React from "react";
import Category from "./Category-Component";



const categoryImage = [
  "Assets/mobile.jpg",
  "Assets/jacket.jpg",
  "Assets/watch.jpg",
];

function Categories() {
  return (
    <div className="Category">
      <div className="Heading">
        <h3>
          Product<span>Categories</span>
        </h3>
      </div>
      <div className="All-Boxes">
          <Category
            src={categoryImage[0]}
            link="/Products"
            productName="Mobile"
          />
          <Category
            src={categoryImage[1]}
            link="/Products"
            productName="Jacket"
          />
          <Category
            src={categoryImage[2]}
            link="/Products"
            productName="Watch"
          />
      </div>
    </div>
  );
}

export default Categories;
