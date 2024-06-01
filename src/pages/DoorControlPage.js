import React, { useState, useEffect } from 'react';
import DoorControl from '../components/DoorControl';
import axios from 'axios';

function DoorControlPage() {
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    fetchDoors();
  }, []);

  const fetchDoors = async () => {
    try {
      const response = await axios.get('http://localhost:3000/door');
      setDoors(response.data);
    } catch (error) {
      console.error('Error fetching doors:', error);
    }
  };

  const toggleDoor = async (id) => {
    try {
      const door = doors.find(d => d.id === id);
      const newStatus = door.status === 'open' ? 'closed' : 'open';
      await axios.put('http://localhost:3000/door', { status: newStatus });
      setDoors(doors.map(d => d.id === id ? { ...d, status: newStatus } : d));
    } catch (error) {
      console.error('Error toggling door:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Control de Puertas</h1>
      <p className="mb-6 text-center">Administra y controla el estado de las puertas de la fábrica. Puedes abrir o cerrar las puertas manualmente o ver su estado actual.</p>
      <DoorControl doors={doors} toggleDoor={toggleDoor} />
    </div>
  );
}

export default DoorControlPage;
