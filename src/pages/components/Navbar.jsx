import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { Link } from 'react-router-dom';

function NavBar({ className = "bg-black"}){

return(

<div className={`${className} text-white`}>

  <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto">

    <div className="flex items-center relative right-8">
    <Link to={'/#'}>
  <img src="./icon.svg" className="w-25 h-25"/>
  </Link>
      </div>

    <div className="flex gap-25 text-md">
    <Link to="/#" className="hover:text-purple-400 transition-colors">Home</Link>
      <a href="#" className="hover:text-purple-400 transition-colors">How it Works</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
      <Link to="/AboutUs#" className="hover:text-purple-400 transition-colors">About us</Link>
    </div>

    <div className="flex gap-4">
      <Link to="/signup">
      <button className="px-9 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
        Sign Up
      </button>
      </Link>
        <Link to="/login" className="group px-6 rounded-md text-white text-lg hover:opacity-90 transition-opacity  relative overflow-hidden transition-allduration-300  hover:scale-105">
        <button className="">
          <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90">
              <GradientBackground
                  gradientType="linear-gradient"
                  gradientOrigin="left-middle"
                  colors={[
                 { color: 'rgba(67, 56, 202, 1)', stop: '0%' },     
                  { color: 'rgba(79, 70, 229, 1)', stop: '25%' },    
                  { color: 'rgba(99, 102, 241, 1)', stop: '60%' },   
                  { color: 'rgba(165, 180, 252, 1)', stop: '100%' } 
                  ]}
                  noiseIntensity={0.5}
                  noisePatternSize={130}
                  noisePatternRefreshInterval={2}
              />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700">

          </div>
          <span className="relative top-1.5 z-10">Log in</span>
      </button>
      </Link>
    </div>
  </nav>
</div>
)
}


export default NavBar
