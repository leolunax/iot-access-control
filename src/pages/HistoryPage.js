import React, { useState, useEffect } from 'react';
import AccidentHistory from '../components/AccidentHistory';
import axios from 'axios';

function HistoryPage() {
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    fetchAccidents();
  }, []);

  const fetchAccidents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/emergencies');
      setAccidents(response.data);
    } catch (error) {
      console.error('Error fetching emergencies:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Historial de Accidentes</h1>
      <AccidentHistory accidents={accidents} />
    </div>
  );
}

export default HistoryPage;
