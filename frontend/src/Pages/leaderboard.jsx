import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import leaf from "../assets/leaf.png";
import drops from "../assets/drops.png";
import fire from "../assets/fire.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Leaderboard() {
  //dummy data
  const students = [
    {
      username: "Noobmaster",
      scores: [22, 22, 22, 22, 22, 22],
      time: "1:15:00",
      class: "TE 10",
    },
    {
      username: "Posidon",
      scores: [15, 4, 7, 10, 25, 22],
      time: "1:15:00",
      class: "SE 9",
    },
    {
      username: "SkullCrusher",
      scores: [2, 14, 15, 2, 21, 20],
      time: "1:15:00",
      class: "TE 11",
    },
    {
      username: "ElvishBhai",
      scores: [22, 22, 22, 22, 22, 22],
      time: "1:15:00",
      class: "BE 12",
    },
    {
      username: "IronFist",
      scores: [12, 18, 20, 15, 22, 10],
      time: "1:15:00",
      class: "SE 8",
    },
    {
      username: "DarkKnight",
      scores: [10, 9, 14, 20, 22, 17],
      time: "1:15:00",
      class: "TE 9",
    },
    {
      username: "ShadowHunter",
      scores: [18, 12, 16, 20, 14, 19],
      time: "1:15:00",
      class: "BE 10",
    },
    {
      username: "CyberNinja",
      scores: [22, 5, 13, 8, 17, 21],
      time: "1:15:00",
      class: "TE 10",
    },
    {
      username: "Phantom",
      scores: [9, 14, 20, 11, 15, 18],
      time: "1:15:00",
      class: "TE 12",
    },
    {
      username: "StormBreaker",
      scores: [19, 22, 16, 12, 20, 14],
      time: "1:15:00",
      class: "SE 7",
    },
    {
      username: "BlazeRider",
      scores: [8, 10, 22, 19, 13, 16],
      time: "1:15:00",
      class: "TE 8",
    },
    {
      username: "Ashmit B",
      scores: [80, 100, 220, 19, 13, 16],
      time: "1:15:00",
      class: "TE 9",
    },
  ];

  // calculate total score
  const dataWithScores = students.map((s) => ({
    ...s,
    total: s.scores.reduce((a, b) => a + b, 0),
  }));

  // sort by score descending
  const sortedData = [...dataWithScores].sort((a, b) => b.total - a.total);

  // pagination
  const itemsPerPage = 4;
  const [page, setPage] = useState(0);
  const startIndex = page * itemsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden bg-[#FEFEF0]">
        {/* navbar */}
        <div className="mt-[1%] w-full mx-auto flex justify-around items-center">
          <div
            className="text-6xl tracking-wide font-bold"
            style={{
              WebkitTextStroke: "1px #6B8E23",
              WebkitTextFillColor: "#D9ED92",
            }}
          >
            GAIAQUEST
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/home"
              className="px-4 py-1 rounded-[10px] flex items-center justify-center bg-[#D9ED92] border-[3px] border-transparent hover:border-[#2E7D32] text-2xl duration-300 cursor-pointer text-[#2E7D32]"
            >
              Home
            </a>

            <a
              href="/quests"
              className="px-4 py-1 rounded-[10px] flex items-center justify-center bg-[#D9ED92] border-[3px] border-transparent hover:border-[#2E7D32] text-2xl duration-300 cursor-pointer text-[#2E7D32]"
            >
              Quests
            </a>

            <a
              href="/quiz"
              className="px-4 py-1 rounded-[10px] flex items-center justify-center bg-[#D9ED92] border-[3px] border-transparent hover:border-[#2E7D32] text-2xl duration-300 cursor-pointer text-[#2E7D32]"
            >
              Quiz
            </a>

            <a
              href="/leaderboard"
              className="px-4 py-1 rounded-[10px] flex items-center justify-center bg-[#D9ED92] border-[3px] border-transparent hover:border-[#2E7D32] text-2xl duration-300 cursor-pointer text-[#2E7D32]"
            >
              Leaderboard
            </a>

            <a
              href="/rewards"
              className="px-4 py-1 rounded-[10px] flex items-center justify-center bg-[#D9ED92] border-[3px] border-transparent hover:border-[#2E7D32] text-2xl duration-300 cursor-pointer text-[#2E7D32]"
            >
              Rewards
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-1">
              <img src={fire} alt="" className="h-[30px] w-[30px]" />
              <p className="mt-4 text-xl font-inter font-bold text-[#FFCE00]">
                10
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img src={drops} alt="" className="mt-2 h-[35px] w-[35px]" />
              <p className="mt-4 text-xl font-inter font-bold text-[#049BA99E]">
                10
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={leaf} alt="" className="mt-2 h-[30px] w-[30px]" />
              <p className="mt-4 text-xl font-inter font-bold text-[#2E7D32]">
                2500 XP
              </p>
            </div>
            <div className="mt-2 flex items-center gap-1 cursor-pointer">
              <MdAccountCircle size={40} className="text-teal-600" />
              <IoChevronDown size={15} className="text-teal-600" />
            </div>
          </div>
        </div>
        <div className="w-full mt-[2%] text-6xl flex justify-center">
          LEADERBOARD
        </div>

        {/* ranks */}
        <div className="mt-[2.8%] flex justify-center items-start gap-10 tracking-wide">
          <div className="w-[180px] h-[100px] rounded-[20px] bg-[#9BD0D1] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl duration-300">
            <div className="-mt-7 mb-1 w-[50px] h-[50px] bg-[#C0C0C0] border-[3px] border-[#FEFEF0D9] text-white rounded-full flex justify-center items-center text-3xl">
              2
            </div>
            <h4 className=" text-4xl ">Raj</h4>
            <p className="text-xl">830</p>
          </div>

          <div className="w-[200px] h-[120px] rounded-[20px] bg-[#F76A6ABD] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl duration-300">
            <div className="-mt-10 mb-1 w-[50px] h-[50px] bg-[#FFE66D] border-[5px] border-[#CBA560] text-white rounded-full flex justify-center items-center text-3xl">
              1
            </div>
            <h4 className=" text-5xl ">Ashmit</h4>
            <p className="text-2xl">1000</p>
          </div>
          <div className="w-[180px] h-[100px] rounded-[20px] bg-[#FFE66D] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl duration-300">
            <div className="-mt-7 mb-1 w-[50px] h-[50px] bg-[#CBA560] border-[3px] border-[#FEFEF0D9] text-white rounded-full flex justify-center items-center text-3xl">
              3
            </div>
            <h4 className=" text-4xl ">Shub</h4>
            <p className="text-xl">900</p>
          </div>
        </div>

        {/* table */}
        <div className="h-[65%] -mt-[2%] w-[80%] flex flex-col justify-center mx-auto tracking-wide">
          {/* Header */}
          <div className="h-[12%] flex items-center justify-center text-3xl border-[3px] border-[#2E7D32] text-[#2E7D32] bg-[#D9ED9280] rounded-[50px]">
            <div className="w-[10%] text-center"># RANK</div>
            <div className="w-[40%] text-center">USERNAME</div>
            <div className="w-[25%] text-center">CLASS</div>
            <div className="w-[25%] text-center flex items-center justify-center gap-2">
              <img src={drops} alt="" className="w-[35px] h-[35px]" />
            </div>
          </div>

          {/* Body */}
          <div className="mt-[1.5%] flex flex-col bg-[#D9ED9280] rounded-[50px] text-2xl">
            {currentData.map((student, idx) => (
              <div
                key={student.username}
                className="flex items-center justify-center text-[#2E7D32] hover:scale-101 hover:shadow-2xl hover:rounded-[50px] duration-300"
              >
                <div className="w-[10%] py-[1%] text-center">
                  #{startIndex + idx + 1}
                </div>
                <div className="w-[40%] text-center">
                  {student.username.toUpperCase()}
                </div>
                <div className="w-[25%] text-center">{student.class}</div>
                <div className="w-[25%] text-center text-3xl">
                  {student.total}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-[1.5%] flex justify-center items-center gap-10">
            {/* Prev button */}
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              className={`w-12 h-12 flex items-center justify-center rounded-full border-[1px] ${
                page === 0
                  ? "bg-[#2E7D32] text-[#D9ED9280] cursor-not-allowed"
                  : "bg-[#2E7D32] text-[#FEFEF0] hover:opacity-90 cursor-pointer hover:scale-105 duration-300"
              }`}
            >
              <FaArrowLeft />
            </button>

            <span className="text-[#2E7D32] text-2xl">
              {page + 1} / {totalPages}
            </span>

            {/* Next button */}
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              className={`w-12 h-12 flex items-center justify-center rounded-full border-[1px] ${
                page === totalPages - 1
                  ? "bg-[#2E7D32] text-[#D9ED9280] cursor-not-allowed"
                  : "bg-[#2E7D32] text-[#FEFEF0] hover:opacity-90 cursor-pointer hover:scale-105 duration-300"
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
