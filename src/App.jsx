import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Staff from './pages/Staff';
import History from './pages/History';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 h-screen bg-gray-800 text-white">
          <div className="p-4 text-2xl font-bold">SIGEMA</div>
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/dashboard">Status General</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/appointments">Gestor de Citas</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/staff">Personal</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/history">Historial de Citas</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/settings">Configuración</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 bg-gray-100 p-4">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/appointments">
              <Appointments />
            </Route>
            <Route path="/staff">
              <Staff />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
