import "./App.css";
import React, { useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/signIn";
import Landing from "./components/landing";
import Hotel from "./components/hotel";
import AddRooms from "./components/AddRooms";
import AddHotels from "./components/AddHotels";
import Bookings from "./components/bookings";
import Admin from "./components/admin";
import Guests from "./components/guests";
import Notifications from "./components/notifications";
import Rooms from "./components/rooms";
import About from "./components/about";
import AdminView from "./components/adminView";
import RoomView from "./components/roomView";
import Signup from "./components/Signup";
import Home from "./components/home";
import Hotelview from "./components/hotelview";
import Profile from "./components/profile";
import Forgot from "./components/forgot";
import Edit from "./components/Edit";
import { useNavigate } from "react-router-dom";

import { auth } from "./firebase";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = React.useState();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/landing");
      }
    });
  }, []);
  console.log(user);
  return (
    // <Router>
    <div className="app">
      <div style={{ display: "flex" }}>
        {user ? (
          <>
            <Home />
            <Routes>
              <Route path="/landing" element={<Landing />} />
                  <Route path="/hotel" element={<Hotel />} />
                  <Route path="/AddRooms" element={<AddRooms />} />
                  <Route path="/AddHotels" element={<AddHotels />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/guests" element={<Guests />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/adminView" element={<AdminView />} />
                  <Route path="/roomView" element={<RoomView />} />
                  <Route path="/hotelview" element={<Hotelview />} />
                  <Route path="/forgot" element={<Forgot />}/>
                  <Route path="/Edit" element={<Edit />}/>
                    <Route path="/Edit/:slug" element={<Edit/>}/>
                  <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<SignIn setUser={setUser} />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </>
        )}
      </div>
    </div>
    // </Router>
  );
}

export default App;
