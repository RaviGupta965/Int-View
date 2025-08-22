import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Room from './RoomComponents/Room'
import Meet from './Video/Meet'
import './index.css'


function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/room' element={<Room/>}/>
        <Route path='/meet/:id' element={<Meet/>}/>
      </Routes>
    </BrowserRouter>
}

export default App;
