import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-about footer-content">
          <h5>
            READY FOR THE NEXT STEP?
            <br />
            LOOKING FORWARD TO WORK TOGETHER
          </h5>
          <p>
            Our team of experienced communicators offers the industrial
            technology expertise required to create and manage effective
            marketing tactics that reach out to audiences in multiple industries
            across global markets. Contact us to learn about our approach to
            strategy, influencer relations & integrated marketing solutions.
          </p>
          <ul className="social-icon">
            <li>
              <a
                href="https://www.facebook.com"
                className="facebook"
                target="_blank"
              >
                <span className="fa fa-facebook"></span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+923452033080/?text=How can we help you..!"
                className="whatsapp"
                target="_blank"
              >
                <span className="fa fa-whatsapp"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="youtube"
              >
                <span className="fa fa-youtube"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="linkedin"
              >
                <span className="fa fa-linkedin"></span>
              </a>
            </li>
          </ul>

          <h5>Quick Links</h5>
          <ul className="quick-link">
            <li>
              <a href="#">
                <span className="fa fa-angle-double-right"></span>Home
              </a>
            </li>
            <Link to="Products">
              <li style={{color:"white"}}>
                <span className="fa fa-angle-double-right"></span>Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
