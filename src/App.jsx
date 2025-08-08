import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Register from './Auth/Register'
import Login from './Auth/Login'

function App() {
  return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </BrowserRouter>);
}

export default App;
