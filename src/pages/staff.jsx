import React, { useState } from 'react';
import { PencilIcon } from 'lucide-react';

const CitaForm = ({ onSubmit, citaToEdit }) => {
  const [cita, setCita] = useState(
    citaToEdit || {
      paciente: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      fecha: '',
      horaEntrada: '',
      horaSalida: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cita);
    setCita({
      paciente: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      fecha: '',
      horaEntrada: '',
      horaSalida: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <label htmlFor="paciente" className="block font-bold text-gray-700 mb-1">
          Nombre Paciente:
        </label>
        <input
          type="text"
          id="paciente"
          name="paciente"
          value={cita.paciente}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <div>
        <label htmlFor="apellidoPaterno" className="block font-bold text-gray-700 mb-1">
          Apellido paterno:
        </label>
        <input
          type="text"
          id="apellidoPaterno"
          name="apellidoPaterno"
          value={cita.apellidoPaterno}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <div>
        <label htmlFor="apellidoMaterno" className="block font-bold text-gray-700 mb-1">
          Apellido Materno:
        </label>
        <input
          type="text"
          id="apellidoMaterno"
          name="apellidoMaterno"
          value={cita.apellidoMaterno}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block font-bold text-gray-700 mb-1">
          Teléfono:
        </label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={cita.telefono}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <div>
        <label htmlFor="fecha" className="block font-bold text-gray-700 mb-1">
          Fecha:
        </label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={cita.fecha}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <div>
        <label htmlFor="horaEntrada" className="block font-bold text-gray-700 mb-1">
          Hora Entrada:
        </label>
        <input
          type="time"
          id="horaEntrada"
          name="horaEntrada"
          value={cita.horaEntrada}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <div>
        <label htmlFor="horaSalida" className="block font-bold text-gray-700 mb-1">
          Hora Salida:
        </label>
        <input
          type="time"
          id="horaSalida"
          name="horaSalida"
          value={cita.horaSalida}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-opacity-10 backdrop-blur-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 bg-opacity-80 text-white p-2 rounded cursor-pointer hover:bg-green-700 transition-colors duration-200"
      >
        {citaToEdit ? 'Actualizar Cita' : 'Agregar Cita'}
      </button>
    </form>
  );
};

const CitasTable = ({ citas, onEdit }) => {
  return (
    <table className="w-full border-separate border-spacing-0 mt-5 overflow-hidden rounded-lg">
      <thead>
        <tr>
          <th className="p-3 bg-gray-200 bg-opacity-30 font-bold text-gray-700">Nombre</th>
          <th className="p-3 bg-gray-200 bg-opacity-30 font-bold text-gray-700">Teléfono</th>
          <th className="p-3 bg-gray-200 bg-opacity-30 font-bold text-gray-700">Fecha</th>
          <th className="p-3 bg-gray-200 bg-opacity-30 font-bold text-gray-700">Hora Entrada</th>
          <th className="p-3 bg-gray-200 bg-opacity-30 font-bold text-gray-700">Hora Salida</th>
          <th className="p-3 bg-gray-200 bg-opacity-30 font-bold text-gray-700">Editar</th>
        </tr>
      </thead>
      <tbody>
        {citas.map((cita, index) => (
          <tr key={index}>
            <td className="p-3 bg-white bg-opacity-10 text-gray-700">{`${cita.paciente} ${cita.apellidoPaterno} ${cita.apellidoMaterno}`}</td>
            <td className="p-3 bg-white bg-opacity-10 text-gray-700">{cita.telefono}</td>
            <td className="p-3 bg-white bg-opacity-10 text-gray-700">{cita.fecha}</td>
            <td className="p-3 bg-white bg-opacity-10 text-gray-700">{cita.horaEntrada}</td>
            <td className="p-3 bg-white bg-opacity-10 text-gray-700">{cita.horaSalida}</td>
            <td className="p-3 bg-white bg-opacity-10 text-gray-700">
              <button onClick={() => onEdit(index)} className="bg-transparent border-none cursor-pointer text-green-600 text-xl">
                <PencilIcon size={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [citas, setCitas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (newCita) => {
    if (editingIndex !== null) {
      const updatedCitas = [...citas];
      updatedCitas[editingIndex] = newCita;
      setCitas(updatedCitas);
      setEditingIndex(null);
    } else {
      setCitas([...citas, newCita]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="min-h-screen p-5 bg-[url('/assets/03.jpg')] bg-cover bg-center bg-fixed">
      <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg mb-5">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Gestor de Citas Médicas</h1>
        <CitaForm onSubmit={handleSubmit} citaToEdit={editingIndex !== null ? citas[editingIndex] : null} />
      </div>
      <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Citas Programadas</h2>
        <CitasTable citas={citas} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;