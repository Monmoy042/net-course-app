import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col main-content">
            <h3 className="text-danger">404 Page not Found</h3>
            <p className="text-secondary">Sorry for the inconvenience....!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
