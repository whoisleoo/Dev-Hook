function NavBar(){

return(
<div className="bg-black text-white">
  <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto">
    <div className="flex items-center">
      <a href="#"><img className="w-25 h-25" src="./logo.svg" alt="aqui é uma logo bonita" /></a>
    </div>

    <div className="flex gap-25 text-md">
      <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
      <a href="#" className="hover:text-purple-400 transition-colors">How it Works</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
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
