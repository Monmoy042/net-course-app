import React from "react";
import image from "../../images/netSchoolLogo2.png";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaYoutube, FaLink } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid mt-5 footer-bg">
        <div className="row align-items-start">
          <div className="col-5 text bg-margin">
            <img src={image} alt="" className="footer-logo" />
            <p>
              <FaMapMarkerAlt /> 2/1 (110th floor), Beside Billu Plaza, Block-Z,
              Farmgate, Dhaka 500000
            </p>
            <p>
              <FaPhoneAlt /> +8801404-000000
            </p>
            <p>
              <MdAlternateEmail /> info@net-course.com
            </p>
          </div>
          <div className="col-4 text bg-margin">
            <h5 className="text-danger">
              <FaYoutube /> Tutorial on
            </h5>
            <ul>
              <li>Networking</li>
              <li>Cybersecurity</li>
              <li>DevOps</li>
              <li>System Engineering</li>
              <li>IOT</li>
              <li>Arduino</li>
              <li>Raspberry Pi</li>
            </ul>
          </div>
          <div className="col-3 bg-margin">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-danger text">
                <FaLink /> Quick Links
              </h5>
              <button
                type="button"
                className="btn btn-outline-primary btn-size"
              >
                <NavLink to="/" className="button-text text-decoration-none">
                  <span className="btn-text text-decoration-none">Home</span>
                </NavLink>
              </button>
              <button
                type="button"
                className="btn btn-outline-success btn-size"
              >
                <NavLink to="/about" className="button-text">
                  About
                </NavLink>
              </button>
              <button type="button" className="btn btn-outline-danger btn-size">
                <NavLink to="/courses" className="button-text">
                  Courses
                </NavLink>
              </button>
              <button
                type="button"
                className="btn btn-outline-warning btn-size"
              >
                <NavLink to="/contact" className="button-text">
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="col-12">
            <p className="text-center copyright-text text">
              Copyright © {year} | Developed by Net School
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
