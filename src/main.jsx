import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './Auth/Register.jsx'
import { Routes, Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </StrictMode>,
)
