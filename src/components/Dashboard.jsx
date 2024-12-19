import React from 'react';
import HackathonCard from './HackathonCard';

const Dashboard = ({ hackathons }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">My Hackathons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <p>No hackathons to display.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
