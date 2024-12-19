import React, { useState, useEffect } from 'react';
import HackathonCard from '../components/HackathonCard';

const HomePage = () => {
    const [hackathons, setHackathons] = useState([]);

    useEffect(() => {
        const savedHackathons = JSON.parse(localStorage.getItem('hackathons')) || [];
        setHackathons(savedHackathons);
    }, []);

    useEffect(() => {
        localStorage.setItem('hackathons', JSON.stringify(hackathons));
    }, [hackathons]);

    const handleAddHackathon = (newHackathon) => {
        setHackathons([...hackathons, newHackathon]);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Upcoming Hackathons</h1>
            <div className="flex justify-center mb-6">
                <button
                    onClick={() =>
                        handleAddHackathon({
                            title: 'New Hackathon',
                            description: 'Exciting new event.',
                            date: '2024-12-31',
                        })
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                >
                    Add Hackathon
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {hackathons.length > 0 ? (
                    hackathons.map((hackathon, index) => (
                        <HackathonCard
                            key={index}
                            title={hackathon.title}
                            description={hackathon.description}
                            date={hackathon.date}
                        />
                    ))
                ) : (
                    <p className="text-gray-600 text-center col-span-full">No hackathons to display.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
