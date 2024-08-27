
import { Patient } from '../types/index';
import { toast } from 'react-toastify';
import Patientitem from './Patientitem';
import { usePatient } from '../store/store';
type PatientListedProps={
    patient:Patient
}

export default function PatientListed({patient}:PatientListedProps) {
    const {removePatient,getPatientId}=usePatient()
    const handleClick=()=>{
        removePatient(patient.id)
        toast.error('Paciente eliminado')
    }
  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
        <Patientitem label='ID' data={patient.id}></Patientitem>
        <Patientitem label='Nombre' data={patient.name}></Patientitem>
        <Patientitem label='Propietario' data={patient.caretaker}></Patientitem>
        <Patientitem label='Email' data={patient.email}></Patientitem>
        <Patientitem label='Fecha' data={patient.date.toString()}></Patientitem>
        <Patientitem label='Sintomas' data={patient.symptoms}></Patientitem>
        <div className='flex justify-between gap-3 mt-10 flex-col md:flex-row'>
            <button
            type='button'
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg'
            onClick={()=>getPatientId(patient.id)}
            >
                Editar
            </button>
            <button
            type='button'
            className='py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-lg'
            onClick={handleClick}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}
