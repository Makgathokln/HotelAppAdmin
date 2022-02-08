import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/signIn";
import Landing from "./components/landing";
import Hotel from "./components/hotel";
import AddRooms from "./components/AddRooms";
import AddHotels from  "./components/AddHotels";
import Bookings from "./components/bookings";
import Admin from './components/admin';
import Guests from './components/guests';
import Notifications from './components/notifications';
import Rooms from './components/rooms';
import About from "./components/about";
import AdminView from "./components/adminView";
import RoomView from "./components/roomView";
import Signup from "./components/Signup";
import Home from "./components/home";
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
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<Bookings />} />

        <Route path="/guests" element={<Guests />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/notifications" element={<Notifications/>} /> 
        <Route path="/rooms" element={<Rooms/>} /> 
        <Route path="/adminView" element={<AdminView/>} /> 
        <Route path="/roomView" element={<RoomView/>} /> 
        <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
