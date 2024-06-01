import React, { useState, useEffect } from 'react';
import EmergencyHistory from '../components/EmergencyHistory';
import axios from 'axios';

function EmergencyHistoryPage() {
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    const fetchEmergencies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/emergencies');
        setEmergencies(response.data);
      } catch (error) {
        console.error('Error fetching emergencies:', error);
      }
    };

    fetchEmergencies(); // Fetch initially
    const interval = setInterval(fetchEmergencies, 5000); // Fetch every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClearHistory = async () => {
    try {
      await axios.delete('http://localhost:3000/emergencies');
      setEmergencies([]);
    } catch (error) {
      console.error('Error clearing emergency history:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Historial de Emergencias</h1>
      <p className="mb-6 text-center">Consulta el historial de emergencias registradas, incluyendo la temperatura y humedad al momento del incidente.</p>
      <EmergencyHistory emergencies={emergencies} onClearHistory={handleClearHistory} />
    </div>
  );
}

export default EmergencyHistoryPage;
