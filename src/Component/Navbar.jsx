import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <h1 className="text-lg">Hackathon Management</h1>
      <button onClick={onLogout} className="ml-auto bg-red-500 p-2 rounded">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;