import React from "react";
import Products from "../Components/Products";

export default function Product(props) {
  return (
    <div className="products">
      <Products update = {props.updateproduct}/>
    </div>
  );
}
