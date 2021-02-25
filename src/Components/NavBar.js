import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidenavbar from "./Sidenavbar";
import "../App";
function NavBar(props) {
  // var localValues = JSON.parse(localStorage.getItem("products"));
  // var localStorageLength = localValues != null ? localValues.length : 0;
  const [showSlider, setShowSlider] = useState(false);
  const [cartItemsLength, setCartItemsLength] = useState(
    props.localStorageLength.length
  );

  // if(localValues != null){
  //   localStorage = localValues.length
  // }else{
  //   localStorage = 0
  // }

  // useEffect(() => {
  //   props.localStorageLength.length;
  // });

  useEffect(() => {
    setCartItemsLength(props.localStorageLength.length);
  });

  const openSidenavbar = async () => {
    setShowSlider(!showSlider);
  };

  const updateCartItemLengths = (length) => {
    setCartItemsLength(length);
  };

  return (
    <div className="nav-bar">
      <div id="logo" className="logo-img">
        <img id="img-id" src="Assets/logo3.png" alt="logo" />
      </div>
      <div className="links">
        <ul className="all-links">
          <li>
            {/* <Link to="Products" style={{ textDecoration: "none" }}>
              Products
            </Link> */}
            <Link to="/">
              <button className="Product-Home-btn" className="btn third">
                Home
              </button>
            </Link>
            <Link to="Products">
              <button type="button" className="btn third">
                Products
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="add-to-card">
        <div className="btn">
          <i
            className="fa fa-cart-plus fa-3x"
            onClick={() => openSidenavbar()}
          ></i>
        </div>
        {showSlider ? (
          <Sidenavbar cartItemSize={updateCartItemLengths} delete={props.deleteProduct}/>
        ) : null}
        <div className="counter-number">
          <p id="p-items">{cartItemsLength}</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
