import React from "react";
import { BrowserRouter as Router,
   Routes, Switch, Link,
    Route } from "react-router-dom";
import Home from "./home";
// import About from './components/about';
import Landing from "./landing";
import Bookings from "./bookings";
import Admin from './admin';
import Guests from './guests';
import Notifications from './notifications';
import Rooms from './rooms';
import About from "./about";
import AdminView from "./adminView";
import RoomView from "./roomView";
import Signup from "./Signup";
import SignIn from "./signIn";
import Menu from "./menu";
import pin3 from "../images/pin3.jpg";

const menu = () => {
  return (
    <>
      <Router>
        <div style={{display:'flex'}}>
        <Home />
          <Routes>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/bookings" component={Bookings} />

        <Route exact path="/guests" component={Guests} />
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/notifications" component={Notifications} /> 
        <Route exact path="/rooms" component={Rooms}/> 
        <Route exact path="/adminView" component={AdminView} /> 
        <Route exact path="/roomView" component={RoomView} /> 
        <Route exact path="/Signup" component={Signup} /> 
        <Route exact path="/signIn" component={SignIn} />  */}

 <Route path="/" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<Bookings />} />

        <Route path="/guests" element={<Guests />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/notifications" element={<Notifications/>} /> 
        <Route path="/rooms" element={<Rooms/>} /> 
        <Route path="/adminView" element={<AdminView/>} /> 
        <Route path="/roomView" element={<RoomView/>} /> 
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default menu;
