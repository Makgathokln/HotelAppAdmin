import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/signIn";
import Landing from "./components/landing";
import Hotel from "./components/hotel";
import AddRooms from "./components/AddRooms";
import AddHotels from  "./components/AddHotels";
import Bookings from "./bookings";
import Admin from './admin';
import Guests from './guests';
import Notifications from './notifications';
import Rooms from './rooms';
import About from "./about";
import AdminView from "./adminView";
import RoomView from "./roomView";
import Signup from "./Signup";

function App() {
  return (
    <div className="app">
      <Router>
      <div style={{display:'flex'}}>
        <Home />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/AddRooms" element={<AddRooms />} />
          <Route path="/AddHotels" element={<AddHotels />} />
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
    </div>
  );
}

export default App;
