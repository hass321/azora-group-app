import logo from "../assets/icons/logo.svg";
import flag from "../assets/images/flag.png";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full text-white py-3 px-4 md:px-6 flex items-center relative z-20 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-7 w-7" />
      </div>
      <div className="flex-1" />
      <div className="hidden md:flex items-center gap-8">
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li className="hover:underline cursor-pointer">How it works</li>
            <li className="hover:underline cursor-pointer">All apps</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">For Teams</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Podcast</li>
          </ul>
        </nav>
        <div className="h-6 w-px bg-gray-600 mx-2" />
        <img src={flag} alt="Flag" className="h-4 w-6 object-cover" />
        <button className="ml-2 text-sm font-medium hover:underline">Sign In</button>
        <button className="ml-2 px-4 py-1 border border-white rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors">Try free</button>
      </div>
      <button
        className="md:hidden flex items-center justify-center ml-2 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="5" width="24" height="2.5" rx="1.25" fill="white" />
          <rect y="11" width="24" height="2.5" rx="1.25" fill="white" />
          <rect y="17" width="24" height="2.5" rx="1.25" fill="white" />
        </svg>
      </button>
      {mobileOpen && (
        <div className="absolute top-full left-0 bg-brand-secondary w-full border-t border-gray-800 flex flex-col items-start px-4 py-4 md:hidden shadow-lg animate-fade-in z-30 backdrop-blur-md">
          <nav className="w-full">
            <ul className="flex flex-col gap-4 text-sm font-medium w-full">
              <li className="hover:underline cursor-pointer w-full">How it works</li>
              <li className="hover:underline cursor-pointer w-full">All apps</li>
              <li className="hover:underline cursor-pointer w-full">Pricing</li>
              <li className="hover:underline cursor-pointer w-full">For Teams</li>
              <li className="hover:underline cursor-pointer w-full">Blog</li>
              <li className="hover:underline cursor-pointer w-full">Podcast</li>
            </ul>
          </nav>
          <div className="h-px w-full bg-gray-700 my-3" />
          <div className="flex items-center gap-3 w-full">
            <img src={flag} alt="Flag" className="h-4 w-6 object-cover" />
            <button className="text-sm font-medium hover:underline">Sign In</button>
            <button className="px-4 py-1 border border-white rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors">Try free</button>
          </div>
        </div>
      )}
    </header>
  );
}
