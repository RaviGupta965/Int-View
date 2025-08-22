import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import RoomUI from './RoomComponents/Room'
import Meet from "./Video/Meet";
import { SocketProvider } from "./Context/socketContext";
import './index.css'
function App() {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/room" element={<RoomUI />} />
          <Route path="/meet/:id" element={<Meet />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}
export default App;
