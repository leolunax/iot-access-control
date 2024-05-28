import React, { useState } from 'react';
import AccidentHistory from '../components/AccidentHistory';

function HistoryPage() {
  const [accidents, setAccidents] = useState([
    { id: 1, date: '2024-05-01', description: 'Incendio simulado' },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Historial de Accidentes</h1>
      <AccidentHistory accidents={accidents} />
    </div>
  );
}

export default HistoryPage;
