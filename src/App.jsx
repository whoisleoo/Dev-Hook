import './App.css'
import Home from './pages/Home.jsx'
<<<<<<< Updated upstream
=======
import SignUp from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import AboutUs from './pages/AboutUs.jsx'
>>>>>>> Stashed changes

function App() {
  
  return (
    <>
<<<<<<< Updated upstream
    <Home/>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
    </>
  )
}

export default App
