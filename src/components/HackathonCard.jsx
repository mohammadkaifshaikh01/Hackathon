import React from 'react';

const HackathonCard = ({ title, description, date }) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm text-gray-400 mt-2">Date: {date}</p>
        </div>
    );
};

export default HackathonCard;
