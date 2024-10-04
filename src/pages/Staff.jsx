import React, { useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const citasIniciales = [
  { id: 1, nombre: "Juan", apellidoPaterno: "Pérez", apellidoMaterno: "Gómez", numeroCita: 1001, peso: 70, talla: 170, telefono: "1234567890", horaInicio: "09:00", horaFin: "09:30" },
  { id: 2, nombre: "María", apellidoPaterno: "González", apellidoMaterno: "López", numeroCita: 1002, peso: 65, talla: 165, telefono: "0987654321", horaInicio: "10:00", horaFin: "10:30" },
]

export default function GestorCitasMedicas() {
  const [citas, setCitas] = useState(citasIniciales)
  const [modalAgregarAbierto, setModalAgregarAbierto] = useState(false)
  const [modalVerInfoAbierto, setModalVerInfoAbierto] = useState(false)
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null)
  const [nuevoPaciente, setNuevoPaciente] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    peso: 0,
    talla: 0,
    telefono: '',
    horaInicio: '',
    horaFin: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNuevoPaciente(prev => ({ ...prev, [name]: value }))
  }

  const agregarPaciente = () => {
    const nuevaCita = {
      ...nuevoPaciente,
      id: citas.length + 1,
      numeroCita: Math.floor(Math.random() * 9000) + 1000
    }
    setCitas([...citas, nuevaCita])
    setModalAgregarAbierto(false)
    setNuevoPaciente({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      peso: 0,
      talla: 0,
      telefono: '',
      horaInicio: '',
      horaFin: ''
    })
  }

  const verInformacion = (paciente) => {
    setPacienteSeleccionado(paciente)
    setModalVerInfoAbierto(true)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Gestor de Citas Médicas</h1>
      
      <Dialog open={modalAgregarAbierto} onOpenChange={setModalAgregarAbierto}>
        <DialogTrigger asChild>
          <Button className="mb-4">Agregar Paciente</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agregar Nuevo Paciente</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nombre" className="text-right">Nombre</Label>
              <Input id="nombre" name="nombre" value={nuevoPaciente.nombre} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="apellidoPaterno" className="text-right">Apellido Paterno</Label>
              <Input id="apellidoPaterno" name="apellidoPaterno" value={nuevoPaciente.apellidoPaterno} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="apellidoMaterno" className="text-right">Apellido Materno</Label>
              <Input id="apellidoMaterno" name="apellidoMaterno" value={nuevoPaciente.apellidoMaterno} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="peso" className="text-right">Peso (kg)</Label>
              <Input id="peso" name="peso" type="number" value={nuevoPaciente.peso} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="talla" className="text-right">Talla (cm)</Label>
              <Input id="talla" name="talla" type="number" value={nuevoPaciente.talla} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="telefono" className="text-right">Teléfono</Label>
              <Input id="telefono" name="telefono" value={nuevoPaciente.telefono} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="horaInicio" className="text-right">Hora de Inicio</Label>
              <Input id="horaInicio" name="horaInicio" type="time" value={nuevoPaciente.horaInicio} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="horaFin" className="text-right">Hora de Fin</Label>
              <Input id="horaFin" name="horaFin" type="time" value={nuevoPaciente.horaFin} onChange={handleInputChange} className="col-span-3" />
            </div>
          </div>
          <Button onClick={agregarPaciente}>Agregar Paciente</Button>
        </DialogContent>
      </Dialog>

      <Table>
        <TableCaption>Lista de citas médicas programadas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido Paterno</TableHead>
            <TableHead>Apellido Materno</TableHead>
            <TableHead>Número de Cita</TableHead>
            <TableHead>Hora de Inicio</TableHead>
            <TableHead>Hora de Fin</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {citas.map((cita) => (
            <TableRow key={cita.id}>
              <TableCell>{cita.nombre}</TableCell>
              <TableCell>{cita.apellidoPaterno}</TableCell>
              <TableCell>{cita.apellidoMaterno}</TableCell>
              <TableCell>{cita.numeroCita}</TableCell>
              <TableCell>{cita.horaInicio}</TableCell>
              <TableCell>{cita.horaFin}</TableCell>
              <TableCell>
                <Button onClick={() => verInformacion(cita)}>Ver más información</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={modalVerInfoAbierto} onOpenChange={setModalVerInfoAbierto}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Información del Paciente</DialogTitle>
          </DialogHeader>
          {pacienteSeleccionado && (
            <div className="grid gap-4 py-4">
              <div>Nombre: {pacienteSeleccionado.nombre}</div>
              <div>Apellido Paterno: {pacienteSeleccionado.apellidoPaterno}</div>
              <div>Apellido Materno: {pacienteSeleccionado.apellidoMaterno}</div>
              <div>Número de Cita: {pacienteSeleccionado.numeroCita}</div>
              <div>Peso: {pacienteSeleccionado.peso} kg</div>
              <div>Talla: {pacienteSeleccionado.talla} cm</div>
              <div>Teléfono: {pacienteSeleccionado.telefono}</div>
              <div>Hora de Inicio: {pacienteSeleccionado.horaInicio}</div>
              <div>Hora de Fin: {pacienteSeleccionado.horaFin}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}