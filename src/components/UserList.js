import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

function UserList({ users }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Usuarios con Acceso</h2>
      <ul>
        {users.filter(user => user.hasAccess).map(user => (
          <li key={user.id} className="mb-4 flex items-center">
            <UserIcon className="h-6 w-6 text-green-500 mr-2" />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
