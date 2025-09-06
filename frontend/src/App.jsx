import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import LandingPage from './Pages/landingPage'
import Signup from './Pages/signUp'
import Login from './Pages/login'
import Profile from './Pages/profile'
import EditProfile from './Pages/editProfile'
import Quizzes from './Pages/quizzes'
import LeaderBoard from './Pages/leaderboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </Router>
  )
}

export default App;
