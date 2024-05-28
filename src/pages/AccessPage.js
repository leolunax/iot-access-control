import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import AccessControl from '../components/AccessControl';
import axios from 'axios';

function AccessPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const toggleAccess = async (id) => {
    try {
      const user = users.find(user => user.id === id);
      const updatedUser = { ...user, access: !user.access };
      await axios.put(`http://localhost:3000/users/${id}`, { access: updatedUser.access });
      setUsers(users.map(user => user.id === id ? updatedUser : user));
    } catch (error) {
      console.error('Error updating user access:', error);
    }
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
