import { useState } from "react";
import heart from "../assets/heart.png";

function RoleSelection() {
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

      <div className="w-full min-h-screen overflow-x-hidden bg-[#FEFEF0] flex flex-col justify-center items-center gap-y-10">
        <div className="flex justify-center items-center gap-5">
          <img
            src={heart}
            alt=""
            className="w-[50px] h-[50px] animate-floatLeft"
          />
          <img
            src={heart}
            alt=""
            className="w-[50px] h-[50px] animate-floatUp"
          />
          <img
            src={heart}
            alt=""
            className="w-[50px] h-[50px] animate-floatRight"
          />
        </div>
        <div className="text-6xl  tracking-wide text-[#6B8E23] mx-auto">
          One Quest. Three Heroes.
        </div>
        <div className="text-6xl flex gap-1 items-center">
          <div>Who will you be on</div>
          <div
            className="pl-6 text-8xl tracking-normal"
            style={{
              WebkitTextStroke: "4px #6B8E23",
              WebkitTextFillColor: "#D9ED92",
            }}
          >
            GAIAQUEST
          </div>

          <div className="font-gamja pl-5 text-7xl">?</div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="w-[350px] h-[250px] rounded-[20px] border-[7px] border-[#6B8E23] bg-[#B5E48C] flex flex-col justify-center items-center gap-5 hover:shadow-2xl hover:scale-102 duration-300">
            <p className="text-3xl font-itim ">I am a</p>
            <h2 className="text-6xl">TEACHER</h2>
            <button className="flex items-center justify-center px-18 py-2 bg-[#FEFEF0D9] border-[2.5px] border-[#000000] rounded-[10px] text-2xl tracking-wide cursor-pointer hover:bg-[#000000] hover:text-[#FEFEF0D9] duration-300">
              LEAD THE QUEST
            </button>
          </div>

          <div className="w-[350px] h-[250px] rounded-[20px] border-[7px] border-[#049BA9] bg-[#9BD0D1] flex flex-col justify-center items-center gap-5 hover:shadow-2xl hover:scale-102 duration-300">
            <p className="text-3xl font-itim ">I am a</p>
            <h2 className="text-6xl">STUDENT</h2>
            <button className="flex items-center justify-center px-18 py-2 bg-[#FEFEF0D9] border-[2.5px] border-[#000000] rounded-[10px] text-2xl tracking-wide cursor-pointer hover:bg-[#000000] hover:text-[#FEFEF0D9] duration-300">
              START THE QUEST
            </button>
          </div>

          <div className="w-[350px] h-[250px] rounded-[20px] border-[7px] border-[#FFCE00] bg-[#FFE66D] flex flex-col justify-center items-center gap-5 hover:shadow-2xl hover:scale-102 duration-300">
            <p className="text-3xl font-itim ">We’re an</p>
            <h2 className="text-6xl">NGO</h2>
            <button className="flex items-center justify-center px-16 py-2 bg-[#FEFEF0D9] border-[2.5px] border-[#000000] rounded-[10px] text-2xl tracking-wide cursor-pointer hover:bg-[#000000] hover:text-[#FEFEF0D9] duration-300">
              POWER THE CHANGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleSelection;
