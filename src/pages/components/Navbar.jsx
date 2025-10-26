<<<<<<< Updated upstream
function NavBar(){

return(
<div className="min-h-screen bg-black text-white">
  <nav className="flex items-center justify-between  py-6 max-w-9xl mx-auto">
    <div className="flex items-center">
      <img className="w-25 h-25" src="./logo.svg" alt="aqui é uma logo bonita" />
    </div>
=======
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { Link } from 'react-router-dom';

function NavBar({ className = "bg-black"}){

return(

<div className={'${className} text-white'}>
 
  <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto">
    
    <div className="flex items-center relative right-8">
    <Link to={'/#'}>
  <img src="./icon.svg" className="w-25 h-25"/>
  </Link>
      </div> 
>>>>>>> Stashed changes

    <div className="flex gap-25 text-md">
    <Link to="/#" className="hover:text-purple-400 transition-colors">Home</Link>
      <a href="#" className="hover:text-purple-400 transition-colors">How it Works</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
      <Link to="/AboutUs#" className="hover:text-purple-400 transition-colors">About-us</Link>
    </div>

    <div className="flex gap-4">
      <button className="px-9 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
        Sign Up
      </button>
      <button className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all">
    Log In
      </button>
    </div>
  </nav>
</div>
)
}


export default NavBar
