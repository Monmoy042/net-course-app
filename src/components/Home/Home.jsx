import React, { useEffect, useState } from "react";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import Services from "../Services/Services";
import Achievement from "../Achievement/Achievement";
import "./Home.css";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <>
      <div className="container-fluid slider">
        <div className="row">
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={banner1}
                    className="d-block w-100 img-fluid rounded"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img src={banner2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner3} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Courses />

      <Achievement />
    </>
  );
};

export default Home;
