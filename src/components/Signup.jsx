import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import pin3 from '../images/pin3.jpg';

import "../App.css";

const Signup = () => {
    return(
    <>
<Router>

<div>
    <nav className="navigation">
      
    <div className="ImageHeader" >
    <img src={pin3} alt="this is car image" style={{marginLeft:80, height:'75%', marginTop:27}} />
    <h1 style={{color:'#fff',alignContent:'center', marginLeft:240, marginTop:90}}>  Hotel Admin System </h1>
    </div>
    </nav>

    <div className="login-container">
            <h3 style={{color:'#FF8038',textAlign:'center'}}>Sign Up</h3>
            <div class="mb-3 col-xs-4">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your First Name"/>
</div>
<div class="mb-3 col-xs-4">
  <label for="exampleFormControlTextarea1" class="form-label">Last Name</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Last Name"/>
</div>
    <div class="mb-3 col-xs-4">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Email Address"/>
</div>
<div class="mb-3 col-xs-4">
  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Password"/>
</div>

<div class="mb-3 col-xs-4">
  <label for="exampleFormControlTextarea1" class="form-label">Confirm Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Please Confirm Your Password"/>
</div>


  <div class="row">
  <button type="button" class="btn btn-light  w-50" style={{marginRight:50}}>Sign Up</button>

  </div>

  {/* <div class="mb-3 mt-80">
<a href="#" class="link-secondary" style={{color:"#FF8038", }}>Already Have An Account, Sign In </a>
  </div> */}


    </div>

</div>
    

</Router>           
    
     </>
    )
    
}


    export default Signup