import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DoorControlPage from './pages/DoorControlPage';
import EmergencyHistoryPage from './pages/EmergencyHistoryPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-6 container mx-auto">
        <Routes>
          <Route path="/" element={<DoorControlPage />} />
          <Route path="/history" element={<EmergencyHistoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
