import React from 'react';

function AccessControl({ users, toggleAccess }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Control de Acceso</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center mb-4">
            {user.name}
            <button
              className={`px-4 py-2 rounded ${
                user.hasAccess ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              }`}
              onClick={() => toggleAccess(user.id)}
            >
              {user.hasAccess ? 'Revocar Acceso' : 'Dar Acceso'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccessControl;
