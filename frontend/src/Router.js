import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainManagement from "./components/Train/View";
import TicketManagement from "./components/Ticket/View";
import Home from "./components/Home";
import CreateTicket from "./components/Ticket/CreateTicket"
import UpdateTicket from "./components/Ticket/UpdateTicket"
import CreateTrainSchedule from "./components/Train/CreateTrainScehdule";
import UpdateTrainSchedule from "./components/Train/UpdateTrainSchedule";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/train-management" element={<TrainManagement />} />
          <Route path="/train-create" element={<CreateTrainSchedule />} />
          <Route path="/train-update" element={<UpdateTrainSchedule />} />

          <Route path="/ticket-management" element={<TicketManagement />} />
          <Route path="/ticket-create" element={<CreateTicket />} />
          <Route path="/ticket-update" element={<UpdateTicket />} />
        </Routes>
      </Router>
    </div>
  );
}
