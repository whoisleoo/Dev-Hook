import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
      </Routes>
   <About/>
    </BrowserRouter>
    </>
  )
}

export default App
