import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

function EmergencyHistory({ emergencies, onClearHistory }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Historial</h2>
        <button
          onClick={onClearHistory}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Borrar Historial
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {emergencies.slice(0).reverse().map(emergency => ( // Mostrar las emergencias más nuevas primero
          <li key={emergency.id} className="bg-gray-700 p-4 rounded">
            <div className="flex items-center mb-2">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-2" />
              <div className="text-lg">{new Date(emergency.createdAt).toLocaleString()}</div>
            </div>
            <div>Temperatura: {emergency.temperature}°C, Humedad: {emergency.humidity}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmergencyHistory;
