import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PencilIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const [username, setUsername] = useState("Nikita Choudhary");
  const [mobile, setMobile] = useState("8411014247");
  const [email, setEmail] = useState("nikitachoudhary364@gmail.com");
  const [address, setAddress] = useState("Shardaram Park, Pune");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    toast.success("Profile Updated Successfully!");
    setEditMode(false);
    setShowPasswordInput(false);
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white px-6 py-10">
      <Toaster />
      <div className="max-w-2xl mx-auto bg-[#2d2d2d] p-8 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-orange-500">User Profile</h2>
          <button
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
            className="flex items-center gap-1 px-4 py-1.5 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition"
          >
            {editMode ? "Save" : "Edit"}
            <PencilIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/114504064?v=4"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-orange-500 object-cover"
            />
            <span className="absolute bottom-1 right-1 bg-orange-500 text-xs px-2 py-0.5 rounded-md">
              {editMode ? "Editable" : "Locked"}
            </span>
          </div>
          <p className="mt-2 text-lg font-medium">{username}</p>
        </div>

        <div className="space-y-5">
          {/* Username */}
          <div>
            <label className="block mb-1 font-medium">Username</label>
            {editMode ? (
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-[#1c1c1e] text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-300">{username}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            {editMode ? (
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="tel"
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-[#1c1c1e] text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-300">{mobile}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            {editMode ? (
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-[#1c1c1e] text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-300">{email}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address</label>
            {editMode ? (
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="3"
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-[#1c1c1e] text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            ) : (
              <p className="text-gray-300 whitespace-pre-wrap">{address}</p>
            )}
          </div>

          {/* Change Password */}
          {editMode && (
            <div>
              <button
                onClick={() => setShowPasswordInput(!showPasswordInput)}
                className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition 
                  ${
                    showPasswordInput
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  } 
                  shadow-md mt-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2zm6 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5m12 0V9a6 6 0 10-12 0v4"
                  />
                </svg>
                {showPasswordInput ? "Hide Password Input" : "Change Password"}
              </button>
              {showPasswordInput && (
                <div className="mt-3">
                  <label className="block mb-1 font-medium">New Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 rounded-md border border-gray-600 bg-[#1c1c1e] text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
