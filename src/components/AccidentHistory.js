import React from 'react';

function AccidentHistory({ accidents }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Accidentes</h2>
      <ul>
        {accidents.map(accident => (
          <li key={accident.id} className="mb-4">
            <div className="text-lg">{accident.date}</div>
            <div>{accident.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccidentHistory;
