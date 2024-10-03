import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h2 className="text-2xl font-bold p-4">SIGEMA</h2>
      <nav className="mt-10">
        <ul>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/dashboard">Status General</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/appointments">Gestor de Citas</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/staff">Personal</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/history">Historial de Citas</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/settings">Configuración</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/logout">Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
