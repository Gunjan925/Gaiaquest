import { useState } from "react";
import { Link } from "react-router-dom";
import RoleSelection from "./roleSelection";
import XPlanet from "./xpPlanet";
import logo from "../assets/logo.png";
import leafs from "../assets/leafs.png";
import drops from "../assets/drops.png";

function GetStarted() {

  return (
    <>
    <style>
        {`
          @keyframes floatLeft {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            50% { transform: translateX(-10px) rotate(-10deg); }
          }
          @keyframes floatUp {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes floatRight {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            50% { transform: translateX(10px) rotate(10deg); }
          }
          .animate-floatLeft { animation: floatLeft 2s infinite ease-in-out; }
          .animate-floatUp { animation: floatUp 2s infinite ease-in-out; }
          .animate-floatRight { animation: floatRight 2s infinite ease-in-out; }
        `}
      </style>
      <div className="w-full min-h-screen overflow-x-hidden bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat relative">
        {/* navbar */}
        <div className="mt-5 w-[80%] flex items-center justify-between mx-auto">
          <div className="h-[115px] w-[115px]">
            <img src={logo} alt="" />
          </div>
          <div className="w-[50%] flex items-center justify-evenly pb-10 text-[40px] gap-10 mr-18">
            <a href="" className="hover:text-[#6B8E23] duration-300 font-jersey">
              HOME
            </a>
            <a href="" className="hover:text-[#6B8E23] duration-300 font-jersey">
              EXPLORE
            </a>
            <a href="" className="hover:text-[#6B8E23] duration-300 font-jersey">
              SCHOOLS
            </a>
            <a href="" className="hover:text-[#6B8E23] duration-300 font-jersey">
              IMPACT
            </a>
            <a href="" className="hover:text-[#6B8E23] duration-300 font-jersey">
              ABOUT
            </a>
          </div>
        </div>

        <div className="w-full h-[60%] flex flex-col justify-center items-center">
          <div className="ml-10 flex flex-row items-center">
            <h1 className="text-[150px] text-[#D9ED92] tracking-wide drop-shadow-[7px_7px_0_#6B8E23] font-jersey">
              GAIAQUEST
            </h1>
            <div className="h-[60px] w-[60px] mt-4 drop-shadow-[4px_4px_0_#6B8E23]">
              <img src={leafs} alt="" />
            </div>
          </div>

          <Link
            to="/signup"
            className="-mt-5 h-[72px] rounded-[15px] border-[6px] border-[#FEFEF0D9] 
                      flex items-center justify-center bg-[#90D1D3] 
                      hover:bg-[#FEFEF0D9] hover:border-[#90D1D3] hover:text-green-600 
                      duration-500 hover:scale-105 cursor-pointer 
                      px-10 font-jersey text-2xl text-white tracking-wide"
          >
            Get Started
          </Link> 

          <div className="pt-12 h-[70px] flex gap-2">
            <img src={drops} alt="" className="-mt-5 h-[45px] w-[45px] animate-floatLeft" />
            <img src={drops} alt="" className="h-[55px] w-[55px] animate-floatUp" />
            <img src={drops} alt="" className="-mt-5 h-[45px] w-[45px] animate-floatRight" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
