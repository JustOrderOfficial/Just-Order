import React, { useState } from "react";
import Profile from "../Profile/Profile";
import Order from "../order/Order";
import Address from "../address/Address";
import Setting from "../setting/Setting";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return <Order />;
      case "profile":
        return <Profile />;
      case "address":
        return <Address />;
      case "settings":
        return <Setting />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="w-full sm:w-64 bg-[#1a1a1a] sm:h-screen border-b sm:border-b-0 sm:border-r border-gray-800 p-6">
        <div className="sticky top-0">
          <h2 className="text-xl font-bold mb-1 text-white">Account</h2>
          <p className="text-sm text-gray-400 mb-6">Nikita Choudhary</p>

          <nav className="space-y-2 text-sm">
            {[
              { key: "profile", label: "Profile" },
              { key: "orders", label: "Orders" },
              { key: "address", label: "Address" },
              { key: "settings", label: "Settings" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-black border-l-4 border-orange-500 text-orange-500 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-[#222]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default ProfilePage;
