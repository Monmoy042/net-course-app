import React, { useEffect, useState } from "react";
import "./Achievement.css";

const Achievement = (props) => {
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

  const { courses, users, company, calc } = images;
  return (
    <div className="container-fluid achievement-area">
      <div className="row bg-dark rounded">
        <div className="col">
          <h1 className="text-light achieve-head">Our Achievements</h1>
          <div className="d-flex flex-row justify-content-evenly">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={calc} alt="" />
              <p>5 Years</p>
              <p>Interactive Training Sessions</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={users} alt="" />
              <p>
                1500<sup>+</sup> Enrollments
              </p>
              <p>Happy Students</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={courses} alt="" />
              <p>
                15<sup>+</sup> Courses
              </p>
              <p>Value Added Courses</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={company} alt="" />
              <p>
                12<sup>+</sup> Companies
              </p>
              <p>Build Skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
