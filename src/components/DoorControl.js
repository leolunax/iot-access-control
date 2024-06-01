import React from 'react';
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid';

function DoorControl({ doors, toggleDoor }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Puertas</h2>
      <ul>
        {doors.map(door => (
          <li key={door.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              {door.status === 'open' ? (
                <LockOpenIcon className="h-6 w-6 text-green-500 mr-2" />
              ) : (
                <LockClosedIcon className="h-6 w-6 text-red-500 mr-2" />
              )}
              <span>Puerta {door.id}</span>
            </div>
            <button
              className={`px-4 py-2 rounded ${
                door.status === 'open' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              }`}
              onClick={() => toggleDoor(door.id)}
            >
              {door.status === 'open' ? 'Cerrar Puerta' : 'Abrir Puerta'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoorControl;
