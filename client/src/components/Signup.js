import React, { useState } from "react";
import svg from "./svg.png";
import { NavLink, useHistory } from "react-router-dom";
// import axios from "axios";
import "./form.css";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    // new code
    // POST request using fetch()


    await fetch("http://127.0.0.1:5000/register", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => {
        const data =  response.json();
        if (data.status === 422 || !data) {
          window.alert("Invalid Registration");
          console.log("invalid registration");
        } else {
          window.alert(" Registration SuccessFull");
          console.log(" registration Successfull");
          history.push("/login");
        }
      })

      // Displaying results to console
      .then((json) => console.log(json));
    // old code
    // console.warn(user);
    // const url="http://127.0.0.1:5000/register";
    // const res = await fetch("/register", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    // });
    // .then((result) => {
    //   console.log("result", result);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // const data = await res.json();
    // if (data.status === 422 || !data) {
    //   window.alert("Invalid Registration");
    //   console.log("invalid registration");
    // } else {
    //   window.alert(" Registration SuccessFull");
    //   console.log(" registration Successfull");
    //   history.push("/login");
    // }
  };

  return (
    <section className="container bg-light pb-5">
      <div className="row p-4 mt-5 shadow-lg">
        <div className="col-12 text-center text-primary fw-bolder">
          <h2>Signup Form</h2>
        </div>
        <div className="row p-4">
          <div className="col-lg-6 col-md-12 ">
            <div className="mb-3 row">
              <label htmlFor="name" className="col-sm-4 col-form-label">
                Name
              </label>
              <div className="col-sm-8">
                <input
                  value={user.name}
                  onChange={handleInputs}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                Email
              </label>
              <div className="col-sm-8">
                <input
                  value={user.email}
                  onChange={handleInputs}
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="mobile" className="col-sm-4 col-form-label">
                Mobile no.
              </label>
              <div className="col-sm-8">
                <input
                  value={user.phone}
                  onChange={handleInputs}
                  type="text"
                  name="phone"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile No..."
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="prof" className="col-sm-4 col-form-label">
                Profession
              </label>
              <div className="col-sm-8">
                <input
                  name="work"
                  value={user.work}
                  onChange={handleInputs}
                  type="text"
                  className="form-control"
                  id="prof"
                  placeholder="Profession"
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-4 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-8">
                <input
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-4 col-form-label"
              >
                Confirm Password
              </label>
              <div className="col-sm-8">
                <input
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="row p-3">
              <div className="col-sm-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2"
                  onClick={PostData}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <img src={svg} alt="singin" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
