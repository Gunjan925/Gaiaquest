import { useState } from "react";
import drops from "../assets/drops.png";
import fire from "../assets/fire.png";
import checkBox from "../assets/checkBox.png";
import badge from "../assets/badge.png";
import star from "../assets/star.png";

function XPlanet() {
  return (
    <div className="-mt-3 w-full min-h-screen overflow-x-hidden bg-[#D9ED92] flex flex-col items-center justify-center gap-5">
      <div className="text-6xl tracking-wide font-jersey10 text-[#6B8E23]">
        XP For the Planet
      </div>
      <div className="-mt-4 text-3xl font-itim ">
        This is how we transform classrooms into green adventure zones.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 tracking-wide">
        <div className="w-[310px] h-[270px] bg-[#FEFEF0] border-[3px] border-[#6B8E23] rounded-[50px] flex flex-col gap-15 items-center justify-center hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#8fbf2f] hover:text-white group hover:border-black">
          <img src={checkBox} alt="" className="w-[55px] h-[55px]" />
          <h3 className="text-4xl text-[#6B8E23] group-hover:text-[#d8ff49] font-jersey10">
            Quick Lessons
          </h3>
          <p className="text-xl text-center font-itim">
            Bite sized eco-stories that seamlessly fit into your day
          </p>
        </div>

        <div className="w-[310px] h-[270px] bg-[#FEFEF0] border-[3px] border-[#6B8E23] rounded-[50px] flex flex-col gap-3 items-center justify-center hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#8fbf2f] hover:text-white group hover:border-black">
          <div className="pt-6 flex">
            <img src={drops} alt="" className="-mt-5 h-[30px] w-[30px]" />
            <img src={drops} alt="" className="h-[40px] w-[40px]" />
            <img src={drops} alt="" className="-mt-5 h-[30px] w-[30px]" />
          </div>
          <h3 className="text-4xl text-[#6B8E23] group-hover:text-[#d8ff49] font-jersey10">
            Quests
          </h3>
          <p className="px-5 text-lg text-center font-itim">
            Save water, plant trees, reduce waste — for real. Make them
            inter-school contests and double the fun
          </p>
        </div>

        <div className="w-[310px] h-[270px] bg-[#FEFEF0] border-[3px] border-[#6B8E23] rounded-[50px] flex flex-col gap-2 items-center justify-center hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#8fbf2f] hover:text-white group hover:border-black">
          <h1 className="-mt-4 text-8xl text-[#2E7D32] group-hover:text-[#d8ff49]">
            ?
          </h1>
          <h3 className="text-4xl text-[#6B8E23] group-hover:text-[#d8ff49] font-jersey10">
            Live Quizzes
          </h3>
          <p className="px-3 text-xl text-center font-itim">
            Compete live or team up to win. Prove eco-knowledge in fun
            challenges.
          </p>
        </div>

        <div className="w-[310px] h-[270px] bg-[#FEFEF0] border-[3px] border-[#6B8E23] rounded-[50px] flex flex-col gap-3 items-center justify-center hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#8fbf2f] hover:text-white group hover:border-black">
          <img src={fire} alt="" className="w-[55px] h-[55px]" />
          <h3 className="text-4xl text-[#6B8E23] group-hover:text-[#d8ff49] font-jersey10">
            Stay Motivated
          </h3>
          <p className="px-4 text-lg text-center font-itim">
            Compete with classmates and show off your rank & streaks. Turn
            eco-habits into bragging rights.
          </p>
        </div>

        <div className="w-[310px] h-[270px] bg-[#FEFEF0] border-[3px] border-[#6B8E23] rounded-[50px] flex flex-col gap-4 items-center justify-center hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#8fbf2f] hover:text-white group hover:border-black">
          <img src={badge} alt="" className="-mt-4 w-[55px] h-[55px]" />
          <h3 className="text-4xl text-[#6B8E23] group-hover:text-[#d8ff49] font-jersey10">
            Unlock Badges
          </h3>
          <p className="px-4 text-lg text-center font-itim">
            Collect badges. Unlock levels with GaiaDrops. Celebrate every streak
            you keep alive.
          </p>
        </div>

        <div className="w-[310px] h-[270px] bg-[#FEFEF0] border-[3px] border-[#6B8E23] rounded-[50px] flex flex-col gap-2 items-center justify-center hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#8fbf2f] hover:text-white group hover:border-black">
          <img src={star} alt="" className="w-[55px] h-[55px]" />
          <h3 className="text-4xl text-[#6B8E23] group-hover:text-[#d8ff49] font-jersey10">
            Quest Leaders
          </h3>
          <p className="px-4 text-lg text-center font-itim">
            Teachers - lead the quests and empower your students. Assign quests,
            track progress, run contests and celebrate wins
          </p>
        </div>
      </div>
    </div>
  );
}

export default XPlanet;
