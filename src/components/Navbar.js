import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif'; // Asegúrate de que la ruta al GIF es correcta

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-white font-bold">
          <img src={logo} alt="Logo" className="h-12 w-15 mr-2" />
          Control de Accesos
        </Link>
        <div>
          <Link to="/" className="text-gray-400 hover:text-white mx-2">Acceso</Link>
          <Link to="/history" className="text-gray-400 hover:text-white mx-2">Historial</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
