import React from "react";

function WhyWorks() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#FEFEF0] flex flex-col justify-center items-center gap-y-5">
      <div className="-mt-5 text-6xl  text-[#323232]">
        More Than Just A Game
      </div>

      <div className="grid grid-cols-3 gap-10 tracking-wider">
        <div className="w-[352px] h-[196px] flex flex-col items-center justify-center bg-[#9BD0D199] border-[4px] border-[#049BA9] rounded-[20px] text-[#049BA9] group hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#049BA9] hover:border-[#d2f7f899] hover:border-[8px]">
          <p className="text-8xl pl-5 group-hover:text-[#d2f7f899]">1000+</p>
          <p className="text-5xl group-hover:text-[#d2f7f899]">Trees Planted</p>
        </div>

        <div className="w-[352px] h-[196px] flex flex-col items-center justify-center bg-[#9BD0D199] border-[4px] border-[#049BA9] rounded-[20px] text-[#049BA9] group hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#049BA9] hover:border-[#d2f7f899] hover:border-[8px]">
          <p className="text-7xl pl-5 group-hover:text-[#d2f7f899]">
            50,000+ L
          </p>
          <p className="mt-4 text-5xl group-hover:text-[#d2f7f899]">
            Water Saved
          </p>
        </div>

        <div className="w-[352px] h-[196px] flex flex-col items-center justify-center bg-[#9BD0D199] border-[4px] border-[#049BA9] rounded-[20px] text-[#049BA9] group hover:scale-105 hover:shadow-2xl duration-600 hover:bg-[#049BA9] hover:border-[#d2f7f899] hover:border-[8px]">
          <p className="mt-4 text-7xl pl-5 group-hover:text-[#d2f7f899]">
            1200+ KG
          </p>
          <p className="pt-1 text-[45px] tracking-normal group-hover:text-[#d2f7f899]">
            Waste Segregated
          </p>
        </div>
      </div>

      <div className="mt-10 text-6xl  text-[#323232]">Why It Works</div>

      <div className="grid grid-cols-3 gap-10 font-itim">
        <div className="w-[352px] h-[270px] flex flex-col items-center justify-center bg-[#D9ED92] border-[4px] border-[#6B8E23] rounded-[30px] text-center text-[#323232] gap-10  px-5  hover:bg-[#6B8E23] group hover:border-[#D9ED92] hover:border-[8px] duration-600 hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl group-hover:text-[#FEFEF0]">
            NEP 2020 <br /> emphasizes experimental learning
          </p>
          <p className="text-2xl text-[#2E7D32] group-hover:text-[#D9ED92]">
            theory → hands-on challenges
          </p>
        </div>

        <div className="w-[352px] h-[270px] flex flex-col items-center justify-center bg-[#D9ED92] border-[4px] border-[#6B8E23] rounded-[30px] text-center text-[#323232] gap-10  px-5  hover:bg-[#6B8E23] group hover:border-[#D9ED92] hover:border-[8px] duration-600 hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl group-hover:text-[#FEFEF0]">
            UNESCO reports <br />
            gamified learning boosts retention by 70%.
          </p>
          <p className="text-2xl text-[#2E7D32] group-hover:text-[#D9ED92]">
            with streaks, quests and leaderboards
          </p>
        </div>

        <div className="w-[352px] h-[270px] flex flex-col items-center justify-center bg-[#D9ED92] border-[4px] border-[#6B8E23] rounded-[30px] text-center text-[#323232] gap-10  px-5  hover:bg-[#6B8E23] group hover:border-[#D9ED92] hover:border-[8px] duration-600 hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl group-hover:text-[#FEFEF0]">
            Every student quest inspires their home, eco-club, and beyond.
          </p>
          <p className="text-2xl text-[#2E7D32] group-hover:text-[#D9ED92]">
            from one lesson → to classrooms → to society
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyWorks;
