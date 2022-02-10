import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { signInWithEmailAndPassword } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import pin3 from "../images/pin3.jpg";

import "../App.css";

const SignIn = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user)
  //       navigate("/landing");
  //     }
  //   });
  // });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        navigate("/landing"); 
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div>
        <nav className="navigation">
          <div className="ImageHeader">
            <img
              src={pin3}
              alt="this is car image"
              style={{ marginLeft: 80, height: "39%", marginTop: 27 }}
            />
            <h1
              style={{
                color: "#fff",
                alignContent: "center",
                marginLeft: 240,
                marginTop: 90,
              }}
            >
              {" "}
              Hotel Admin System{" "}
            </h1>
          </div>
        </nav>

        <div className="fluid-container">
          <h3 style={{ color: "#FF8038", textAlign: "center" }}>Sign In</h3>
          <div className="col-md-8 mx-auto col-10 card shadow-lg border-0 p-4">
            <div className="login-register">
              <div class="mb-3 col-xs-4">
                <label for="exampleFormControlInput1" class="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  class="form-control w-75"
                  id="exampleFormControlInput1"
                  placeholder="Makgathokln@gmail.com"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div class="mb-3 col-xs-4">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control w-75"
                  id="exampleFormControlInput1"
                  placeholder="********"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>

              <div class="mb-3 col-xs-4">
                <a href="#" class="link-secondary">
                  Forgot Your Password?
                </a>
              </div>

              <div class="row">
                <button
                  type="button"
                  onClick={handleSignIn}
                  class="btn btn-light  w-25"
                >
                  Sign In
                </button>
                <button type="button" class="btn btn-light  w-25">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
