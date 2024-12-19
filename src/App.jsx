import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Component/Auth";
import Dashboard from "./Component/Dashboard";
import HackathonEvent from "./Component/HackathonEvent";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect user to dashboard if already logged in
    if (auth.currentUser) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hackathonevents" element={<HackathonEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
