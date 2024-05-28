import React, { useState } from 'react';
import UserList from '../components/UserList';
import AccessControl from '../components/AccessControl';

function AccessPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Usuario 1', hasAccess: true },
    { id: 2, name: 'Usuario 2', hasAccess: false },
  ]);

  const toggleAccess = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, hasAccess: !user.hasAccess } : user));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Accesos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserList users={users} />
        <AccessControl users={users} toggleAccess={toggleAccess} />
      </div>
    </div>
  );
}

export default AccessPage;
