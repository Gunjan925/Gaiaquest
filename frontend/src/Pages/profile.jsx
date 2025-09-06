import { useState } from "react";
import { Link } from "react-router-dom";
import drop from '../assets/drops.png';
import fire from '../assets/fire.png';

function Profile() {

  return (
    <>
     <div className="min-h-screen bg-[#fdfdf2] font-jersey flex-col shadow-md overflow-hidden border-[2px] border-gray-400 ">
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-5xl font-bold text-green-700 tracking-wider font-jersey tracking-tight outlined-text">
          GAIAQUEST
        </h1>
        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-[#D9ED92] text-[#6B8E23] px-4 py-1 rounded-md 
                    hover:bg-[#6B8E23] hover:text-[#D9ED92] transition font-jersey 
                    text-2xl tracking-wide"
          >
            Home
          </Link>
          <Link
            to="/logout"
            className="bg-[#D9ED92] text-[#6B8E23] px-4 py-1 rounded-md 
                    hover:bg-[#6B8E23] hover:text-[#D9ED92] transition font-jersey 
                    text-2xl tracking-wide"
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="flex w-[90%] mx-auto mt-6 bg-white rounded-2xl shadow-md overflow-hidden justify-center align-center">
        
        <div className="w-1/3 border-r border-gray-200 p-6 flex flex-col items-center">
          
          <div className="h-32 w-32 border-4 border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-6xl text-gray-400">👤</span>
          </div>

          <h2 className="mt-4 font-bold text-[#6B8E23] text-4xl">Name</h2>
          <p className="text-gray-500 text-2xl">@Username</p>
          <p className="text-gray-600 text-xl">1 follower • 1 following</p>

          <Link
            to="/editprofile"
            className="mt-4 bg-[#90D1D3] text-white font-bold px-6 py-2 rounded-md hover:bg-[#6bb4b6] transition text-2xl inline-block text-center"
            >
            EDIT PROFILE
            </Link>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xl">example@email.com</p>
            <p className="text-gray-600 text-xl">PICT / TE 10</p>
            <p className="text-gray-600 text-xl">Joined Sept 2025</p>
          </div>

          <div className="mt-4 text-green-600 text-lg text-center">
            LEAGUE: GAIA GUARDIAN <br />
            <span className="text-[#6B8E23] text-lg">2 TOP FINISHES</span>
           </div>
        </div>

        <div className="w-2/3 bg-[#90D1D3] p-6 rounded-r-2xl">
          <div className="flex justify-end">
            <Link 
            to={"/leaderboard"}
            className="bg-[#049BA9] text-[#ffffff] px-4 py-1 rounded-md hover:bg-teal-700 transition text-xl">
              VIEW LEADERBOARD
            </Link>
          </div>

          <h3 className="text-2xl mb-4">My Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow flex items-center ">
            <img src={fire} alt="Fire" className="h-12 w-12 mr-10" />
            <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black">120</span>
                <div className="text-lg font-medium">Daily Streak</div>
            </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow flex items-center ">
            <img src={drop} alt="GaiaDrops" className="h-12 w-12 mr-10" />
            <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black">100</span>
                <div className="text-lg font-medium">GaiaDrops</div>
            </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold">2000</p>
              <p className="text-lg">XP</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold">10</p>
              <p className="text-lg">Trees Planted</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold">2 KG</p>
              <p className="text-lg">Waste Recycled</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold">2 L</p>
              <p className="text-lg">Water Saved</p>
            </div>
          </div>

          <h3 className="mt-6 text-2xl">Quests • Sept 2025</h3>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold text-red-500">10</p>
              <p className="text-lg">Pending</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold text-green-600">10</p>
              <p className="text-lg">Completed</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow text-center">
              <p className="text-2xl font-bold">45/55</p>
              <p className="text-lg">Total Completed</p>
            </div>
          </div>

          <h3 className="mt-6 text-2xl">Badges</h3>
          <div className="flex gap-4 mt-3">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
