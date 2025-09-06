import React from "react";
import leaf from "../assets/leaf.png"; 
import heart from "../assets/heart.png";

function AboutUs() {
  return (
    <div className="w-full min-h-screen py-20 bg-[#FEF6C9] flex flex-col items-center relative">
      <h2 className="text-7xl font-bold mb-2 font-jersey15">About Us</h2>
      <h3 className="text-5xl mb-8 font-jersey15">Our Story</h3>

      <div className="max-w-6xl p-8 border-2 border-black rounded-xl bg-[#FEF6C9] relative">
        <p className="mb-4 text-gray-800 text-3xl">
          GaiaQuest began as our response to the challenge: how can we make
          environmental education more engaging for students? Too often, it
          stays locked in textbooks, far from real action.
        </p>

        <p className="mb-4 text-gray-800 text-3xl">
          With GaiaQuest, we’re reimagining eco-learning as a quest—students
          explore short lessons, complete fun challenges like saving water or
          planting trees, and earn drops, badges, and ranks on leaderboards.
          Teachers guide progress with quizzes and contests, while NGOs connect
          these quests to real-world impact.
        </p>

        <p className="text-gray-800 text-3xl">
          Together, we’re helping classrooms become playgrounds for
          sustainability—and students, the heroes of their own green journey.
        </p>

        <img
          src={leaf}
          alt="leaf"
          className="absolute -bottom-5 -right-5 w-35 h-35 opacity-100"
        />
      </div>

      <div className="flex gap-4 mt-8">
        {[...Array(5)].map((_, i) => (
          <img src={heart} alt="heart" className="w-10 h-10" key={i} />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
