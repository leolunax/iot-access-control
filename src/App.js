import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccessPage from './pages/AccessPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-6 container mx-auto">
        <Routes>
          <Route path="/" element={<AccessPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
