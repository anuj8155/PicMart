import {Link} from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 z-30 bg-white">
      {/* logo and site name */}
      <div className=" flex justify-between items-start">
        <img src="/picprismlogo.png" alt="our logo" className="w-[50px]" />
        <Link to="/" className="font-bold text-3xl">picprism</Link>
      </div>
      {/* list of other tabs */}
      <ul className="flex gap-5 text-lg font-semibold text-gray-400">
        <Link to="/Signup" className="hover:text-black cursor-pointer sm:p-2">Signup</Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">About</Link>
        <Link to="/Login" className="hover:text-orange-600 cursor-pointer sm:p-2">Login</Link>
        <Link to="/signup" className="hover:text-black cursor-pointer sm:p-2">Contact</Link>
      </ul>
     
    </nav>
  )
}

export default Navbar
