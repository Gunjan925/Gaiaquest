import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import leaf from '../assets/leaf.png';

function SignUp() {

  return (
    <>
     <div className="min-h-screen bg-[#fdfdf2] flex flex-col">
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-5xl font-bold tracking-wider font-jersey tracking-tight outlined-text">
          GAIAQUEST
        </h1>
        <Link
        to="/login"
        className="bg-[#D9ED92] text-[#6B8E23] px-4 py-1 rounded-md 
                    hover:bg-[#6B8E23] hover:text-[#D9ED92] transition font-jersey 
                    text-2xl tracking-wide"
        >
        Login
        </Link>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <div className="relative bg-[#049BA9]/10 rounded-2xl shadow-lg p-8 w-96 text-center">
          <img
            src={leaf}
            alt="Leaf"
            className="absolute -top-6 -left-6 w-12 h-12"
          />
          <img
            src={leaf}
            alt="Leaf"
            className="absolute -bottom-6 -right-6 w-12 h-12 rotate-180"
          />

          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Earth"
              className="w-16 h-16 rounded-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-[#6B8E23] mb-6 font-jersey tracking-wide">
            Create Your Account
          </h2>

          <form className="flex flex-col gap-3 text-left">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 font-jersey tracking-wide text-lg"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 font-jersey tracking-wide text-lg"
            />
            <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 font-jersey tracking-wide text-lg">
              <option>School / College</option>
              <option>School</option>
              <option>College</option>
            </select>
            <input
              type="text"
              placeholder="Grade"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 font-jersey tracking-wide text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 font-jersey tracking-wide text-lg"
            />
            <button
              type="submit"
              className="w-full bg-[#9BD0D1] text-white font-bold py-2 rounded-md hover:bg-teal-500 transition mt-2 font-jersey tracking-[0.1em] text-2xl"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
