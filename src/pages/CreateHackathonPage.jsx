import React, { useState } from 'react';
import '../index.css';

const CreateHackathonPage = ({ onAddHackathon }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleCreate = () => {
        if (title && description && date) {
            const newHackathon = { title, description, date };
            onAddHackathon(newHackathon);
            setTitle('');
            setDescription('');
            setDate('');
            alert('Hackathon created successfully!');
        } else {
            alert('Please fill out all fields!');
        }
    };

    return (
        <div className="hackathon-container">
            <h2 className="heading">Create a New Hackathon</h2>
            <div className="input-group">
                <label className="label">Title</label>
                <input
                    className="input-field"
                    placeholder="Enter hackathon title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label className="label">Description</label>
                <textarea
                    className="input-field"
                    placeholder="Provide a brief description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label className="label">Date</label>
                <input
                    className="input-field"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button
                className="submit-btn"
                onClick={handleCreate}
            >
                Create Hackathon
            </button>
        </div>
    );
};

export default CreateHackathonPage;
