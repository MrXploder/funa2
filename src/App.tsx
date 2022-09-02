import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/Landing/Landing'

import './App.css'

const HomePage = React.lazy(() => import('./pages/Home/Home'))

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<HomePage />} />
  </Routes>
)

export default App
