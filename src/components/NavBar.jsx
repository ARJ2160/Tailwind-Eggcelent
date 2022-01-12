import React from 'react'
import { Link } from "react-router-dom"
const Navbar = ({ toggle }) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white
        text-black shadow-sm font-mono" role="navigation">
            <Link to="/" className="pl-8">
                EGG
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={ toggle }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" fill="#000"/>
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/menu" className="p-4">Menu</Link>
                <Link to="/" className="p-4">Contact</Link>
                <Link to="/about" className="p-4">About Us</Link>
            </div>
        </nav>
    )
}

export default Navbar
