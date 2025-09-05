import { useState } from "react";
import { Link } from "react-router-dom";

function EditProfile() {

  return (
    <>
     <div className="min-h-screen bg-[#FEFEF0] p-6 font-jersey ">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold text-green-700 tracking-wider font-jersey tracking-tight outlined-text">
          GAIAQUEST
        </h1>
        <div className="flex gap-4">
          <Link
          to={"/"}
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition text-2xl">
            Home
          </Link>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition text-2xl">
            Logout
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden max-w-5xl mx-auto">

        <div className="bg-[#8FD0D2] px-6 py-3">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            EDIT PROFILE
          </h2>
        </div>

        <div className="flex flex-col md:flex-row p-6 gap-8">

          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="w-40 h-40 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <span className="text-gray-400">Avatar</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-[#8FD0D2] text-white rounded-md hover:bg-teal-500 text-2xl">
              CHANGE AVATAR
            </button>
          </div>

          <div className="flex-1">
    
            <div className="mb-4 flex items-center justify-between">
              <label className="text-2xl text-teal-700 w-1/3">
                Display Name
              </label>
              <input
                type="text"
                defaultValue="Harry Potter"
                className="flex-1 border border-teal-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400 text-2xl "
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <label className="text-2xl text-teal-700 w-1/3">
                Username
              </label>
              <input
                type="text"
                defaultValue="@Theboywholived"
                className="flex-1 border border-teal-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400 text-2xl "
              />
            </div>

           
            <div className="text-center mb-8">
              <button className="px-6 py-2 bg-[#8FD0D2] text-white rounded-md hover:bg-teal-500 text-2xl">
                SAVE CHANGES
              </button>
            </div>

            <h3 className="text-teal-700 mb-4 text-2xl">
              CHANGE PASSWORD
            </h3>

            <div className="mb-4 flex items-center justify-between">
              <label className="text-2xl text-teal-700 w-1/3">
                Current Password
              </label>
              <input
                type="password"
                className="flex-1 border border-teal-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400 text-2xl "
              />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <label className="text-2xl text-teal-700 w-1/3">
                New Password
              </label>
              <input
                type="password"
                className="flex-1 border border-teal-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400 text-2xl "
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <label className="text-2xl text-teal-700 w-1/3">
                Confirm Password
              </label>
              <input
                type="password"
                className="flex-1 border border-teal-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400 text-2xl "
              />
            </div>

            <div className="text-center">
              <button className="px-6 py-2 bg-[#8FD0D2] text-white rounded-md hover:bg-teal-500 text-2xl">
                CHANGE PASSWORD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default EditProfile;
