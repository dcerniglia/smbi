import { Link } from "@remix-run/react";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black-200 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-white bold text-2xl">
            Steal My Business Idea
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* <Link to="/" className="text-white hover:underline">
            Home
          </Link> */}
          <Link to="/new-idea" className="text-white hover:underline">
            Submit
          </Link>
          <Link to="/brainstorming" className="text-white hover:underline">
            Brainstorming
          </Link>
          <Link to="/giveaway" className="text-white hover:underline">
            $1M Ideas
          </Link>
          <Link to="/blog" className="text-white hover:underline">
            Blog
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="">
            <a href="/" className="block text-white py-2 px-4 ">
              Home
            </a>
            <a href="/submit" className="block text-white py-2 px-4 ">
              Submit an Idea
            </a>
            <a href="/brainstorming" className="block text-white py-2 px-4 ">
              Brainstorming
            </a>
            <a href="/giveaway" className="block text-white py-2 px-4 ">
              $1M Ideas
            </a>
            <a href="/contact" className="block text-white py-2 px-4 ">
              Blog
            </a>
            <a href="/blog" className="block text-white py-2 px-4 ">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
