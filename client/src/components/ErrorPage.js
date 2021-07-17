import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row" style={{ height: "90vh" }}>
        <div className=" d-flex justify-content-center align-items-center position-relative">
        <div>
          <span style={{color:"#f0f8ff", fontSize:"7rem", fontWeight:"900"}}>404</span>
        </div>
        <div className="position-absolute text-center">
            <h2>We are sorry Page not Found!</h2>
            <div className="my-3 text-muted">
                The page you are looking for might have been removed had it's name changed or it's temporary unavailable.
            </div>
            <Link to="/" className=" btn btn-primary fw-bolder text-white-50">Back to Home page</Link>
        </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
