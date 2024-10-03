import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const doctors = [
  { id: '1', name: 'Dr. Juan Pérez', specialty: 'Cardiología' },
  { id: '2', name: 'Dra. Ana Gómez', specialty: 'Pediatría' },
  { id: '3', name: 'Dr. Luis Rodríguez', specialty: 'Dermatología' },
];

const Appointments = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestor de Citas</h1>
      <AppointmentForm doctors={doctors} />
    </div>
  );
};

export default Appointments;
