import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const HackathonEvent = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHackathons = async () => {
      setLoading(true);
      try {
        const hackathonsSnapshot = await getDocs(collection(db, "hackathons"));
        const hackathonsData = hackathonsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHackathons(hackathonsData);
      } catch (err) {
        setError("Error fetching hackathons: " + err.message);
        console.error("Error fetching hackathons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-bold">Loading Hackathons...</div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Upcoming Hackathons</h1>
      {hackathons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200?text=Hackathon+Image"
                  alt={hackathon.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{hackathon.title}</h2>
                <p className="text-gray-600 mb-4">{hackathon.description}</p>
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-200"
                  onClick={() => alert(`Join ${hackathon.title}`)}
                >
                  Join Event
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 mt-6">No Hackathons Found</p>
      )}
    </div>
  );
};

export default HackathonEvent;
