"use client"

import React, { useState } from 'react'
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (

        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary">
                    Raise Rank
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-gray-800">
                    <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                    <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                    <li><Link href="/testimonial" className="hover:text-primary">Testimonial</Link></li>
                    <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                </ul>

                {/* Call to Action Button */}
                <Link href="/contact" className="hidden md:block bg-primary text-white px-4 py-2 rounded-md">
                    Book a Call
                </Link>

                {/* Mobile Menu Icon */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800">
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col text-center py-4 space-y-4">
                    <li><Link href="/services" className="block py-2" onClick={() => setMenuOpen(false)}>Services</Link></li>
                    <li><Link href="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link href="/testimonial" className="block py-2" onClick={() => setMenuOpen(false)}>Testimonial</Link></li>
                    <li><Link href="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                    <li><Link href="/contact" className="block bg-blue-600 text-white px-4 py-2 mx-auto w-fit rounded-md" onClick={() => setMenuOpen(false)}>Book a Call</Link></li>
                </ul>
            )}

        </nav>


    );

}

export default Navbar