import React, { useEffect } from "react";
import img from "./new.jpg";
import axios from "axios";
import { useHistory } from "react-router";
const About = () => {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      // const res = fetch("http://127.0.0.1:5000/about", {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",

      //   },
      //   credentials: "include",
      // });
      const res = await axios({
        url: "http://127.0.0.1:5000/about",
        method: "GET",
      });

      const data = res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <div className="row p-3 bg-light">
          <h3 className="fw-bolder text-primary text-center mb-3">About Us</h3>
          <div className="col-md-2 col-sm-4 me-3 bg-white py-2 text-center">
            <div className="border border-sencondery p-1">
              <img
                src={img}
                alt="Girish chaudhari"
                style={{ height: "150px" }}
              />
            </div>
          </div>
          <div className="col-md-9 my-3">
            <div className="row">
              <div className="col">
                <h4>Girish Chaudhari</h4>
                <div className="text-primary mt-3">Web Developer</div>
                <div className="text-muted mt-3">
                  Rankings :-<span className="px-3">1/10</span>
                </div>
              </div>
              <div className="col d-flex justify-content-end">
                <div>
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <h4 className="text-primary  mb-4">Worked on</h4>
            <div className="text-muted ms-2">
              <div className="row">
                <div className="col-md-6 col-lg-12 col-6">
                  <span className="d-block my-2">HTML5</span>
                  <span className="d-block my-2">CSS3</span>
                  <span className="d-block my-2">PHP</span>
                  <span className="d-block my-2">MERN</span>
                </div>
                <div className="col-md-6 col-lg-12 col-6">
                  <span className="d-block my-2">MEAN</span>
                  <span className="d-block my-2">SASS</span>
                  <span className="d-block my-2">jQuery</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 my-2">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="p-3">
                  <div className="row my-3">
                    <div className="col">User Id</div>
                    <div className="col text-primary">165482121821</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">Name</div>
                    <div className="col text-primary">Girish Chaudhari</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">Email</div>
                    <div className="col text-primary">
                      girishvishnuc98@gmail.com
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">Phone</div>
                    <div className="col text-primary">9021909562</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">Profession</div>
                    <div className="col text-primary">
                      Full Stack Web Devloper
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="p-3">
                  <div className="row my-3">
                    <div className="col">Experience</div>
                    <div className="col text-primary">Expert</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">Working Hour</div>
                    <div className="col text-primary">8 to 10 hr/day</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">Total Projects</div>
                    <div className="col text-primary">10</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">English Level</div>
                    <div className="col text-primary">Intermidiate</div>
                  </div>
                  <div className="row my-3">
                    <div className="col">availibility</div>
                    <div className="col text-primary">6 Months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
