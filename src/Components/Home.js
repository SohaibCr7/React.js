import React from  "react";
import {Link} from "react-router-dom"

export function Home(){
    return (
        <div className="Container">
          <div className="Header">
              <header>
                  <h3>Online Shopping</h3>
              </header>
          </div>
          {/* <nav>
              <Link to="Products">Products</Link>
          </nav> */}
        </div>
      );
}
