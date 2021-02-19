import React from "react";

const categoryImage = [
  "Assets/mobile.jpg",
  "Assets/jacket.jpg",
  "Assets/watch.jpg",
];

function Category() {
  return (
    <div className="Category">
      <div className="Heading">
        <h3>
          Product<span>Categories</span>
        </h3>
      </div>
      <div className="All-Boxes">
      <div className="Box">
        <img src={categoryImage[0]} />
        <div className="Text-Description">
            <h3>Mobile</h3>
        </div>
      </div>

      <div className="Box">
        <img src={categoryImage[1]} />
        <div className="Text-Description">
            <h3>Jacket</h3>
        </div>
      </div>

      <div className="Box">
        <img src={categoryImage[2]} />
        <div className="Text-Description">
            <h3>Watch</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category;
