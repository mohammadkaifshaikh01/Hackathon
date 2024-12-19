import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth } from "../firebase";

const Dashboard = () => {
  const [participatedHackathons, setParticipatedHackathons] = useState([]);
  const [createdHackathons, setCreatedHackathons] = useState([]);
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    if (!userEmail) return;

    const fetchHackathons = async () => {
      const hackathonCollection = collection(db, "hackathons");

      try {
        const createdQuery = query(hackathonCollection, where("creator", "==", userEmail));
        const createdSnapshot = await getDocs(createdQuery);
        setCreatedHackathons(createdSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        const participatedQuery = query(hackathonCollection, where("participants", "array-contains", userEmail));
        const participatedSnapshot = await getDocs(participatedQuery);
        setParticipatedHackathons(participatedSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching hackathons:", error.message);
      }
    };

    fetchHackathons();
  }, [userEmail]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Participated Hackathons</h2>
        {participatedHackathons.length > 0 ? (
          participatedHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white rounded-lg shadow-lg p-6 mb-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold">{hackathon.title}</h3>
              <p className="text-gray-600">{hackathon.date}</p>
            </div>
          ))
        ) : (
          <p>No participated hackathons.</p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Created Hackathons</h2>
        {createdHackathons.length > 0 ? (
          createdHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white rounded-lg shadow-lg p-6 mb-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold">{hackathon.title}</h3>
              <p className="text-gray-600">{hackathon.date}</p>
            </div>
          ))
        ) : (
          <p>No created hackathons.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
