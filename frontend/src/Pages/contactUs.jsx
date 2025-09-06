import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import groupLeaves from "../assets/group_Leaves.png";

function ContactUs() {
  return (
    <div className="w-full min-h-screen py-8 bg-[#FEF6C9] flex flex-col items-center">
      {/* Scoreboard */}
      <h2 className="text-6xl font-bold mb-6 font-jersey15">
        The Scoreboard Of Impact
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="w-[250px] h-[100px] border-2 border-black rounded-2xl flex flex-col items-center justify-center bg-[#FEF6C9]">
          <p className="text-4xl font-bold font-jersey10">10000+</p>
          <span className="text-2xl font-jersey15">Students</span>
        </div>
        <div className="w-[250px] h-[100px] border-2 border-black rounded-2xl flex flex-col items-center justify-center bg-[#FEF6C9]">
          <p className="text-4xl font-bold font-jersey10">100+</p>
          <span className="text-2xl font-jersey15">Schools & Colleges</span>
        </div>
        <div className="w-[250px] h-[100px] border-2 border-black rounded-2xl flex flex-col items-center justify-center bg-[#FEF6C9]">
          <p className="text-4xl font-bold font-jersey10">20+</p>
          <span className="text-2xl font-jersey15">NGOs Connected</span>
        </div>
      </div>

      {/* Contact */}
      <h2 className="text-6xl font-bold mb-6 font-jersey15">Contact Us</h2>
      <div className="flex flex-row gap-12">
        {/* Form */}
        <form className="w-[500px] border-2 border-black rounded-xl p-5 flex flex-col gap-3 bg-[#FEF6C9]">
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-black rounded-xl px-3 py-1 outline-none  text-2xl"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-black rounded-xl px-3 py-1 outline-none text-2xl"
          />
          <textarea
            placeholder="Your Message....."
            className="border-2 border-black rounded-xl px-3 py-2 outline-none h-20 resize-none text-2xl"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-5 py-1 hover:bg-[#6B8E23] duration-300 text-2xl"
          >
            SEND
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-2xl text-black">
          <p className="flex items-center gap-2">
            <FaEnvelope /> contact.gaiaquest@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> +91 9876543201
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin /> linkedin
          </p>
          <p className="flex items-center gap-2">
            <FaGithub /> github?
          </p>
        </div>
      </div>

      {/* Bottom row of icons/hearts */}
      <img src={groupLeaves} alt="Drops" className="h-6 w-100 my-20" />
    </div>
  );
}

export default ContactUs;
