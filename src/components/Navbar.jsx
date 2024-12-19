import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition duration-300"
                >
                    Hackathon Manager
                </Link>

                {/* Links Section */}
                <div className="flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-yellow-300 transition duration-300 font-medium text-lg"
                    >
                        Home
                    </Link>
                    <Link
                        to="/create"
                        className="hover:text-yellow-300 transition duration-300 font-medium text-lg"
                    >
                        Create Hackathon
                    </Link>
                    <Link
                        to="/login"
                        className="hover:text-yellow-300 transition duration-300 font-medium text-lg"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="hover:text-yellow-300 transition duration-300 font-medium text-lg"
                    >
                        Signup
                    </Link>
                </div>

                {/* Button Section */}
                <Link
                    to="/create"
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                >
                    Create Hackathon
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
