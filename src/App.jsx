import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Room from "./RoomComponents/Room";
import Meet from "./Video/Meet";
import { SocketProvider } from "./Context/socketContext";
function App() {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room" element={<Room />} />
          <Route path="/meet/:id" element={<Meet />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
