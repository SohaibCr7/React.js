import React from "react";
import { Link } from "react-router-dom";

function Category(props) {
  return (
    <div className="box">
      <img src={props.src} />
      <div className="text-description">
        <Link to={props.link}>
          <h3>{props.productName}</h3>
        </Link>
      </div>
    </div>
  );
}

export default Category;
