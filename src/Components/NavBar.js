import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidenavbar from "./Sidenavbar";
function NavBar() {

  const [showSlider, setShowSlider] = useState(false);

  const openSidenavbar = async () => {
    setShowSlider(!showSlider);
  };

  return (
    <div className="nav-bar">
      <div id="logo">
        <img src="Assets/logo3.png" alt="logo" />
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
        {showSlider ? <Sidenavbar /> : null}
        <div className="counter-number">
          <p id="p-items">0</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
