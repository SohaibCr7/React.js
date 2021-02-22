import React from "react";
import { Link } from "react-router-dom";

function Category(props) {
  return (
    <div className="Box">
      <img src={props.src} />
      <div className="Text-Description">
        <Link to={props.link}>
          <h3>{props.productName}</h3>
        </Link>
      </div>
    </div>
  );
}

export default Category;
