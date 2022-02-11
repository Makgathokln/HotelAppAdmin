import React, { useState, useEffect } from "react";
import  {Link} from "react-router-dom";
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
      <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light ">
      <img src={pin3} alt="this is car image" style={{marginLeft:80, height:'75%', }} />
    <h1 style={{color:'#fff',alignContent:'center', marginLeft:320,}}>  Hotel Admin System </h1>   
       
  </nav>
     
       
          <div className="col-md-4 mx-auto col-4 card shadow-lg border-0 p-4 mt-5">
          
            <h3 style={{ color: "#FF8038", textAlign: "center" }}>Sign In</h3>

              <div class="mb-3 col-xs-4">
                <label for="exampleFormControlInput1" class="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  class=" form-control w-75"
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
              <Link to="/forgot" class="link-secondary" style={{marginLeft:40}}>
                  Forgot Your Password?
                </Link>
              </div>

              <div class="row" style={{marginLeft:40}}>
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
     
    </>
  );
};

export default SignIn;
