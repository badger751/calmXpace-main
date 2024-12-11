import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";


const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 lg:px-8 py-2">
        {/* Logo */}

        {/* Date */}
        <div className="hidden sm:block text-sm text-gray-400">{currentDate}</div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 transition-colors" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border border-gray-600 rounded-lg px-2 py-1">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-white placeholder-gray-500"
          />
        </div>
      </div>
      <div className="bg-white " >
      <div className="text-7xl font-bold text-center">
          <span className="text-red-500">SR</span> <span className="text-black" >samachar</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-700">
        <ul className="flex flex-wrap justify-center lg:justify-start lg:gap-4 py-2 px-4 lg:px-8 text-sm">
          {[
            "Home",
            "National",
            "Uttar Pradesh",
            "State",
            "Crime",
            "Entertainment",
            "Sports",
            "Lifestyle",
            "Membership Plan",
            "E-paper",
            "Video",
          ].map((item) => (
            <li key={item} className="px-2 hover:underline">
              <Link href={`/${item.toLowerCase().replace(/\s/g, "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;