import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Nav-Bar">
      <div className="logo">
        <img src="Assets/logo3.png" alt="logo" />
      </div>
      <div className="Links">
        <ul className="All-Links">
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
      <div className="Add-To-Card">
        <div className="btn">
          <button type="button" className="btn fourth">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
