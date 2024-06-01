import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-10 mr-2" />
          <span className="text-white text-lg font-semibold">EmergencyDoors</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white text-lg font-semibold">
            Control de Puertas
          </Link>
          <Link to="/history" className="text-white text-lg font-semibold">
            Historial de Emergencias
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
