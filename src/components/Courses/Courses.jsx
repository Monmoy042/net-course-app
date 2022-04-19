import React, { useEffect, useState } from "react";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = "https://monmoy042.github.io/net-school/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newData = data.slice(0, 3);
        console.log(newData);
        setCourses(newData);
        console.log(courses);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center text-warning">Our Courses</h1>
        <div className="row justify-content-evenly">
          <div className="col-12 d-flex justify-content-between">
            {courses.map((courses) => (
              <div className="col-4 card" key={courses.id}>
                <img src={courses.banner} alt="" className="card-img-top" />
                <h4 className="card-title text-danger">{courses.name}</h4>
                <p className="card-text">
                  Course Duration: {courses.duration} hours
                </p>
                <p className="card-text">
                  <strong>Course Price: {courses.price} BDT</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
