import React, { useState } from "react";
import { FiBell, FiUser } from "react-icons/fi";

const TopBar = () => {
  const user = {
    name: "Admin",
    photoUrl: "admin.png", // Replace with the actual URL of the user's photo
  };

  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
    setShowUserMenu(false);
  };

  return (
    <div className="bg-white h-14 flex items-center justify-between shadow-md px-6 backdrop-blur-md bg-opacity-30 z-50">
      <div className="flex items-center space-x-4 h-16">
        <img
          src={user.photoUrl}
          alt={`${user.name}'s Photo`}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <div className="text-lg font-semibold font-raleway">{`Welcome to Bhoomi!`}</div>
          <div className="text-sm text-gray-500">Soil Analysis Dashboard</div>
        </div>
      </div>

      <div className="flex items-center space-x-4 relative">
        <button>
          <FiBell className="text-xl text-gray-600" size={22} />
        </button>

        <div className="relative">
          <FiUser
            onClick={() => setShowUserMenu(!showUserMenu)}
            className={`text-xl text-gray-600 cursor-pointer ${
              showUserMenu ? "text-blue-500" : ""
            }`}
            size={22}
          />

          {showUserMenu && (
            <div className="absolute top-full right-0 mt-2 bg-white bg-opacity-95 border border-gray-300 rounded-md shadow-md p-2">
              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline block w-full text-left cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
