import React, { useEffect, useState } from "react";
import "./CourseDetails.css";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const url = "https://monmoy042.github.io/net-school/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseData(data);
      });
  }, []);

  // const { requirement } = courseData.requirement;

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-warning mt-5">We Offered</h1>
          {courseData.map((course) => (
            <div className="col-6 border-warning" key={course.id}>
              <img src={course.banner} className="img-thumbnail" alt="" />
              <h4>{course.name}</h4>
              <p className="bg-warning col-3 text-light rounded text-center">
                Rating: {course.rating}
              </p>
              <p>{course.detail}</p>
              <h5>Course Requirements</h5>
              <p>
                {course.requirement.map((reqr) => (
                  <li>{reqr}</li>
                ))}
              </p>
              <div className="d-flex">
                <div className="col-4 bg-warning text-center text-light ">
                  Duration: {course.duration} hours
                </div>
                <div className="col-4 bg-primary text-center text-light ">
                  Classes: {course.classes}
                </div>
                <div className="col-4 bg-success text-center text-light">
                  Month: {course.month}
                </div>
              </div>
              <div className="d-flex mt-2">
                <div className="col-6 bg-danger p-1 text-light ">
                  <p>Course Fee: {course.price} BDT</p>
                </div>
                <div className="col-6 bg-danger p-1 text-light">
                  <p>Vendor Exam Fee: ${course.vendorFee}</p>
                </div>
              </div>
              <div className="mt-3 mb-2">
                <div className="col">
                  <h4>Instructor Details</h4>
                  <img
                    src={course.instructor.image}
                    alt=""
                    className="instructor-img"
                  />
                  <h5>Name: {course.instructor.name}</h5>
                  <p>Occupation: {course.instructor.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
