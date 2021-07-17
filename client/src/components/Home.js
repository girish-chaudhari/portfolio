import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="row position-relative">
        <div className="col-6 bg-light" style={{ height: "90vh",zIndex:"-3" }}></div>
        <div className="col-6"></div>

        <div className="position-absolute" style={{height:"100%"}}>
          <div className="center text-center" style={{height:"90vh"}}>
           <div>
           <h6 className="text-primary">Welcome</h6>
            <div className="fs-2 fw-bolder">We are the MERN Developer</div>
           </div>
          </div>
        </div>
      </div>

  
    </>
  );
};
export default Home;
