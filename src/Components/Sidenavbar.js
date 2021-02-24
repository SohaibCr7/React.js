import { React, useState } from "react";

export default function Sidenavbar() {
  var localValues = JSON.parse(localStorage.getItem("products"));
  console.log(localValues);
  return (
    <div className="side-nav-container" id="main">
      <div className="heading">
        <h3>
          Selected<span>Products</span>
        </h3>
      </div>
      <div className="cart-products">
      <div className="cart-headings">
          <h4>Images</h4>
          <h4>Product Name</h4>
          <h4>Description</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
        </div>
        {localValues.map((items) => {
          return (
            <div key={items.pId} className="cart-div">
              <img src={items.pImage} />
              <p>{items.pName}</p>
              <p>{items.pDesc}</p>
              <p>{items.pPrice}</p>
              <p>{items.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
