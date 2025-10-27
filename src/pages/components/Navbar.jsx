import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar({ className="bg-black"}){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };






return(

<div className={`${className} text-white`}>

  <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 gap-8 lg:gap-16">

    <div className="flex items-center">
      <Link to={'/#'}>
        <img src="./icon.svg" className="w-20 h-20 sm:w-25 sm:h-25 relative lg:right-15"/>
      </Link>
    </div>

    <div className="hidden lg:flex gap-12 text-md">
      <Link to="/#" className="hover:text-purple-400 transition-colors">Home</Link>
      <a href="#" className="hover:text-purple-400 transition-colors">How it Works</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
      <Link to="/AboutUs#" className="hover:text-purple-400 transition-colors">About us</Link>
    </div>


    <div className="hidden lg:flex gap-6">
      <Link to="/signup">
        <button className="px-8 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
          Sign Up
        </button>
      </Link>
      <Link to="/login" className="group px-6 rounded-md text-white text-lg relative overflow-hidden transition-all duration-300 hover:opacity-90 hover:scale-105">
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
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span className="relative top-1.5 z-10">Log in</span>
        </button>
      </Link>
    </div>

    <button
      onClick={toggleMenu}
      className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
      aria-label="Toggle menu"
    >
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  </nav>


  <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    <div className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-8'}`} style={{fontFamily: 'medium'}}>
      <Link
        to="/#"
        className="text-2xl hover:text-purple-400 transition-colors"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <a
        href="#"
        className="text-2xl hover:text-purple-400 transition-colors"
        onClick={toggleMenu}
      >
        How it Works
      </a>
      <a
        href="#"
        className="text-2xl hover:text-purple-400 transition-colors"
        onClick={toggleMenu}
      >
        Support
      </a>
      <Link
        to="/AboutUs#"
        className="text-2xl hover:text-purple-400 transition-colors"
        onClick={toggleMenu}
      >
        About us
      </Link>

      <div className="flex flex-col gap-4 mt-8 w-64">
        <Link to="/signup" onClick={toggleMenu}>
          <button className="w-full px-9 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
            Sign Up
          </button>
        </Link>
        <Link
          to="/login"
          className="group px-6 py-3 rounded-md text-white text-lg relative overflow-hidden transition-all duration-300 hover:opacity-90 hover:scale-105 text-center"
          onClick={toggleMenu}
        >
          <button className="w-full">
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
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative top-1.5 z-10">Log in</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
)
}


export default NavBar
