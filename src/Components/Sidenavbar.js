import { React, useState } from "react";
import { Link } from "react-router-dom";
export default function Sidenavbar(props) {
  var localValues = JSON.parse(localStorage.getItem("products")) || [];

  return (
    <div className="side-nav-container" id="main">
      <div className="heading1">
        <div className="checkout-btn">
          <Link to="CheckOut">
            <button>Checkout</button>
          </Link>
        </div>
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
              <i
                className="fa fa-times"
                onClick={() => {
                  // deleteItem(items.pId);
                  props.delete(items.pId);
                }}
              ></i>
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
