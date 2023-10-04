import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainManagement from "./components/Train/View";
import TicketManagement from "./components/Ticket/View";
import Home from "./components/Home";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/train-management" element={<TrainManagement />} />
          <Route path="/ticket-management" element={<TicketManagement />} />
        </Routes>
      </Router>
    </div>
  );
}
