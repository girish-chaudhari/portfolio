import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./form.css";
import svg from "./svg2.svg";

const Login = () => {
  const history = useHistory();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })// Converting to JSON
    // .then((response) => response.json())

   // Displaying results to console
    //  .then((json) => console.log(json));
     const data = res.json();
     if(res.status===400 || !data){
       window.alert("Invalid Credential");
     }else{
       window.alert("Login successfull");
       history.push("/")
     }
  };

  return (
    <div className="bg-light p-4" style={{ height: "100vh" }}>
      <div className="shadow container p-4 bg-white">
        <h3 className="text-center text-primary py-3 fw-bolder">Signin</h3>
        <div className="row p-5">
          <div className="col-sm-12 col-lg-6">
            <form method="POST">
              <div className="mb-3">
                <label htmlFor="inputEmail">Email</label>
                <input
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword">Password</label>
                <input
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginUser}
              >
                Log in
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-lg-6 p-5">
            <img src={svg} className="img-fluid" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
