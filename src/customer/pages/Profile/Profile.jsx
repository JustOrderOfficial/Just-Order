import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import API_BASE_URL from "../../../config";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });

        if (res.status === 401) {
          toast.error("Session expired. Please login again.");
          localStorage.clear();
          return navigate("/login");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        toast.error("Failed to load profile");
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        email: user.email || "",
        mobile: user.mobile || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const [firstName, ...rest] = formData.fullName.trim().split(" ");
      const lastName = rest.join(" ");

      const payload = {
        firstName,
        lastName,
        email: formData.email,
        mobile: formData.mobile,
      };

      if (password.trim()) payload.password = password;

      const res = await fetch(`${API_BASE_URL}/api/users/profile-edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 401) {
        toast.error("Session expired. Please login again.");
        localStorage.clear();
        return navigate("/login");
      }

      if (!res.ok) throw new Error("Update failed");

      const updatedUser = await res.json();
      setUser(updatedUser);
      toast.success("Profile Updated Successfully!");
      setEditMode(false);
      setShowPasswordInput(false);
      setPassword("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
  };

  if (!user) {
    return (
      <div className="text-white p-10 animate-pulse">
        Loading profile...
      </div>
    );
  }

  const { fullName, email, mobile } = formData;

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Toaster />

      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto bg-[#1e1e1e] p-8 rounded-2xl shadow-lg">
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
            <p className="mt-2 text-lg font-medium">{fullName}</p>
          </div>

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              {editMode ? (
                <input
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              ) : (
                <p className="text-gray-300">{fullName}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-1 font-medium">Mobile</label>
              {editMode ? (
                <input
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
                  type="tel"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:border-orange-500"
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
                  name="email"
                  value={email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:border-orange-500"
                />
              ) : (
                <p className="text-gray-300">{email}</p>
              )}
            </div>

            {/* Change Password */}
            {editMode && (
              <div>
                <button
                  onClick={() => setShowPasswordInput(!showPasswordInput)}
                  className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition ${
                    showPasswordInput
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  } shadow-md mt-2`}
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
                      className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
