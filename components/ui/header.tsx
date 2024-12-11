import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";

// Mock translation function (replace with actual API or library)
const translatePage = (language: string) => {
  console.log(`Translating page to: ${language}`);
  // Here you can use a library like i18next or call an API for translations
  // e.g., i18next.changeLanguage(language) or use a custom translation API
};

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const languages = [
    { label: "हिंदी", code: "hi" },
    { label: "தமிழ்", code: "ta" },
    { label: "తెలుగు", code: "te" },
    { label: "ಕನ್ನಡ", code: "kn" },
    { label: "മലയാളം", code: "ml" },
    { label: "বাংলা", code: "bn" },
    { label: "ਪੰਜਾਬੀ", code: "pa" },
    { label: "ગુજરાતી", code: "gu" },
    { label: "ଓଡ଼ିଆ", code: "or" },
    { label: "اردو", code: "ur" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    translatePage(languageCode);
  };

  return (
    <header className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 lg:px-8 py-2">
        {/* Date and Languages */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm text-gray-400">{currentDate}</div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`rounded px-2 py-1 ${
                  selectedLanguage === language.code ? "bg-gray-600 text-white" : "hover:bg-gray-700"
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>

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

      {/* Logo Section */}
      <div className="bg-black">
        <div className="text-7xl font-bold text-center flex justify-center items-center gap-2 relative overflow-hidden">
          <div className="marquee flex items-center gap-2">
            <span className="text-red-500">SR</span>
            <span className="text-white">samachar</span>
          </div>
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
          {/* "LIVE" Section */}
          <li className="px-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-md font-bold">LIVE</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
