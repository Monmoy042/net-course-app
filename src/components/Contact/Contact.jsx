import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5 mb-5">
            <h2 className="text-danger head-text-style">Your Queries</h2>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-warning content-text-style"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-warning content-text-style"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-warning content-text-style"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-warning content-text-style"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-warning content-text-style"
                >
                  Your Message
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword3"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label content-text-style"
                  htmlFor="exampleCheck1"
                >
                  agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </form>
          </div>
          <div className="col-6 mt-5 mb-5">
            <div>
              <h3 className="text-danger head-text-style">
                Contact Information (Farmgate Brunch)
              </h3>
              <p className="content-text-style">
                📪 <strong className="text-warning">Address:</strong>
                2/1 (110th floor), Beside Billu Plaza, Block-Z, Farmgate, Dhaka
                500000
              </p>
              <p className="content-text-style">
                📞 <strong className="text-warning">Phone:</strong>
                +8801404-000000
              </p>
              <p className="content-text-style">
                📧 <strong className="text-warning">Email:</strong>{" "}
                info@net-course.com
              </p>
            </div>
            <div>
              <h3 className="text-danger head-text-style">
                Contact Information (Banani Brunch)
              </h3>
              <p className="content-text-style">
                📪 <strong className="text-warning">Address:</strong> 500/1
                (2200th floor), Beside Mikku Plaza, Block-W, Banani, Dhaka
                600000
              </p>
              <p className="content-text-style">
                📞 <strong className="text-warning">Phone:</strong>{" "}
                +8801404-111111
              </p>
              <p className="content-text-style">
                📧 <strong className="text-warning">Email:</strong>{" "}
                info@net-course.com
              </p>

              <h3 className="mt-3 text-danger head-text-style">Follow us on</h3>
              <div className="d-flex align-items-center">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon fb"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon lnk"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon tw"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon yt"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
