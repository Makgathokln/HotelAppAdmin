import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/signIn";
import Landing from "./components/landing";
import Hotel from "./components/hotel";
import AddRooms from "./components/AddRooms";
import AddHotels from  "./components/AddHotels";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/AddRooms" element={<AddRooms />} />
          <Route path="/AddHotels" element={<AddHotels />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
