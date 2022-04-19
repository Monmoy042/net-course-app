import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col about-head">
            <h1>We provide best quality of IT trainings in Bangladesh</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row about-section">
          <div className="col">
            <h2 className="text-warning text-center">About Net-Course</h2>
            <p>
              Net-Course is a place where bright and enthusiastic Bangladeshi
              individuals who are lifelong learners can gain the skills they
              need and alter their lives in the way they wish. We are a group of
              motivated learners who have come together to achieve a common goal
              of life transformation through self-learning.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mission-vision">
          <div className="col-5 mission-content">
            <h2 className="mission-head text-warning">Our Mission</h2>
            <p>
              Our goal is to level the playing field in education by providing
              high-quality learning experiences that are accessible, flexible,
              and cheap. Anyone in Bangladesh with an internet connection and a
              desire to study can come to Net-School, master a variety of
              skills, and begin working toward his or her goals.
            </p>
          </div>
          <div className="col-5 vision-content">
            <h2 className="vision-head text-warning">Our Vision</h2>
            <p>
              Net-School is a place where determined students can gain the
              skills they need, pursue the careers they desire, make the things
              they want, and live the lives they deserve.The online courses will
              be provided by known and established businesses from a variety of
              sectors, with the goal of providing the highest quality education
              and recognition to the people of Bangladesh. By 2030, we want to
              have grown exponentially and engaged and educated 1 million
              people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
