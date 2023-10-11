// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainManagement from "./components/Train/View";
import TicketManagement from "./components/Ticket/View";
import Home from "./components/Home";
import CreateTicket from "./components/Ticket/CreateTicket";
import UpdateTicket from "./components/Ticket/UpdateTicket";
import CreateTrainSchedule from "./components/Train/CreateTrainSchehdule";
import UpdateTrainSchedule from "./components/Train/UpdateTrainSchedule";

import LoginPage from "./components/Auth/Login"; // Import LoginPage component
import RegisterPage from "./components/Auth/Register";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />


          <Route path="/home" element={<Home />} />
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
