import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack , IoArrowForward} from "react-icons/io5";
import logo from '../assets/logo.png';
import mascot from '../assets/mascot.png';
import leaf from '../assets/leaf.png';
import leafIcon from '../assets/leafIcon.png';
import treeIcon from '../assets/tree.png';

function Quizzes() {

  return (
    <>
    <div className="absolute min-h-screen bg-[#FEFEF0] flex flex-col items-center justify-center font-jersey p-6 relative overflow-hidden">
        <img src={leaf} alt="leaf" className="absolute top-1/4 right-16 h-12 opacity-80 rotate-[20deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-12 left-1/5 h-9 opacity-75 rotate-[5deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-1/4 right-1/4 h-14 opacity-65 rotate-[-25deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute top-1/2 left-6 h-11 opacity-60 rotate-[30deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-20 right-10 h-10 opacity-70 z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-10 left-1/4 h-14 opacity-75 z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-10 left-10 h-14 opacity-75 z-0" />
        <img src={leaf} alt="leaf" className="absolute top-40 right-1/3 h-16 opacity-80 z-0" />
        <img src={leaf} alt="leaf" className="absolute top-[120px] left-[50px] h-14 opacity-75 rotate-[5deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-[50px] right-[70px] h-11 opacity-85 rotate-[30deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-[90px] right-[100px] h-9 opacity-60 rotate-[-10deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-[140px] right-[60px] h-13 opacity-70 rotate-[15deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-[250px] right-[200px] h-13 opacity-70 rotate-[15deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute top-[200px] right-[25%] h-10 opacity-65 rotate-[-20deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute top-[50%] left-[20%] h-12 opacity-80 rotate-[10deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute bottom-[25%] left-[15%] h-9 opacity-75 rotate-[35deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute top-[15%] right-[15%] h-8 opacity-70 rotate-[-25deg] z-0" />
        <img src={leaf} alt="leaf" className="absolute top-[25%] right-[80%] h-8 opacity-70 rotate-[-25deg] z-0" />

        <img src={logo} alt="Quiz World Logo" className="absolute top-4 left-4 h-20 w-20" />

      <div className="flex items-center justify-center mb-6 gap-2">
        <h1 className="text-6xl font-bold text-green-700 flex items-center gap-2">
          <img src={leafIcon} alt="leaf" className="h-16 w-1000" /> Quiz World
        </h1>
      </div>

      <div className="bg-[#B5E48C]/60 rounded-lg shadow-md w-full max-w-6xl p-6 relative border border-green-200">

        <div className="flex items-start justify-between gap-2 mb-6">
          <p className="text-4xl text-center flex-1 text-green-900 font-jersey">
           1) What Does The Blue Dustbin Signify In Waste Segregation In India?
          </p>
          <img src={mascot} alt="mascot" className="absolute -top-20 left-[68vw] h-40 w-40 " />
        </div>

        <div className="flex flex-col gap-4">
          {["Wet Waste", "Plastic", "Dry Waste", "Medical Waste"].map(
            (option, index) => (
              <button
                key={index}
                className="w-full bg-[#9BD987] hover:bg-[#B5E48C] px-4 py-3 rounded-lg text-left text-green-900 text-4xl transition shadow-sm font-jersey"
              >
                {String.fromCharCode(97 + index)}) {option}
              </button>
            )
          )}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <img src={treeIcon} alt="tree" className="h-8 w-8" />
          <div className="flex-1 h-4 bg-[#B5E48C]/60 rounded-full overflow-hidden">
            <div className="h-4 w-1/4 bg-[#2E7D32] rounded-full"></div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-[#9BD0D1] px-6 py-2 rounded-md text-green-900 hover:bg-[#9BD0D1]/60 transition shadow-sm text-xl font-jersey"
          >
            <IoArrowBack className="text-2xl" /> Back
          </button>

          <button className="flex items-center gap-2 bg-[#9BD0D1] px-6 py-2 rounded-md text-green-900 hover:bg-[#9BD0D1]/60 transition shadow-sm text-xl font-jersey">
            <IoArrowForward className="text-2xl" /> Next
          </button>

          <button className="flex items-center gap-2 bg-[#9BD0D1] px-6 py-2 rounded-md text-green-900 hover:bg-[#9BD0D1]/60 transition shadow-sm text-2xl font-jersey">
            💡 Hint
          </button>
        </div>
      </div>

    </div>
    </>
  );
}

export default Quizzes;
