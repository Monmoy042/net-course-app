import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [images, setImages] = useState([]);
  
  // Images Load
  useEffect(() => {
    const url = "https://monmoy042.github.io/netCourse-imgAPI/imgApi.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data[0]);
      });
  }, []);

  const { offline, online, vendor, corporate, yt } = images;
  return (
    <div className="container-fluid service-area">
      <div className="row">
        <div className="col">
          <h1 className="service-heading">Our Services</h1>
          <div className="d-flex flex-row justify-content-evenly">
            <div className="services">
              <img src={offline} alt="" />
              <p className="service-text">Offline Training</p>
            </div>
            <div className="services">
              <img src={online} alt="" />
              <p className="service-text">Online Training</p>
            </div>
            <div className="services">
              <img src={corporate} alt="" />
              <p className="service-text">Corporate Training</p>
            </div>
            <div className="services">
              <img src={vendor} alt="" />
              <p className="service-text">Vendor Exam</p>
            </div>
            <div className="services">
              <img src={yt} alt="" />
              <p className="service-text">Youtube Tutorial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
