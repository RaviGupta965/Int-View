import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Room from './RoomComponents/Room'
import Meet from './Video/Meet'

import {ClerkProvider, SignIn, SignUp} from '@clerk/clerk-react'
// import App from './App.tsx'
import './index.css'


function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  const CLERK_SIGN_IN_FORCE_REDIRECT_URL = import.meta.env.VITE_SIGN_IN_FORCE_REDIRECT_URL;
  if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }
  return <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/room' element={<Room/>}/>
        <Route path='/meet/:id' element={<Meet/>}/>
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
}

export default App;
