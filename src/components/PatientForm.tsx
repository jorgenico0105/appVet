import { useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import Alert from './Alert'
import type { DraftPati } from '../types'
import { usePatient } from '../store/store'
import { useEffect } from 'react'
export default function PatientForm() {
    const {register,handleSubmit,formState:{errors},reset,setValue}=useForm<DraftPati>()

    const {addPatient,activeId,patients,updatePatient}=usePatient()

   
    useEffect(() => {
        if (activeId) {
          const activePatint = patients.filter(pat => pat.id === activeId)[0];
          setValue('name',activePatint.name)
          setValue('caretaker',activePatint.caretaker)
          setValue('email',activePatint.email)
          setValue('date',activePatint.date)
          setValue('symptoms',activePatint.symptoms)
          }
      }, [activeId]);
      const registerPatient=(data:DraftPati)=>{
        if(activeId){
            updatePatient(data)
            toast.info('Registro Actulizado')
        }else{
            addPatient(data)
            toast.success('Registro Exitoso!')
        }
        reset()
    }
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-9">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
              Añade Pacientes y {''}
              <span className="text-indigo-600 font-bold">Administralos</span>
          </p>
  
          <form 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(registerPatient)}
          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente"
                        {...register('name',{
                            required:'El nombre es obligatorio',
                            minLength:{
                                value:2,
                                message:'Minimo 2 caracteres'
                            },
                         
                        })} 
                    />
                    {errors.name && (
                        <Alert>
                        {errors.name?.message?.toString()}
                        </Alert>
                    )}
                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Propietario" 
                      {...register('caretaker',{
                        required:'El nombre del propietario obligatorio',
                        minLength:{
                            value:2,
                            message:'Minimo 2 caracteres'
                        },
                     
                    })} 
                  />
                   {errors.caretaker && (
                        <Alert>
                        {errors.caretaker?.message?.toString()}
                        </Alert>
                    )}
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Email de Registro" 
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email No Válido'
                        }
                      })} 
                />
                 {errors.email && (
                        <Alert>
                        {errors.email?.message?.toString()}
                        </Alert>
                    )}
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3  border border-gray-100"  
                      type="date" 
                      {...register('date',{
                        required:'Fecha es obligatoria',
                    })} 
                  />
                  {errors.date && (
                    <Alert>
                    {errors.date?.message?.toString()}
                    </Alert>
                  )}
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                  Síntomas 
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-3  border border-gray-100"  
                      placeholder="Síntomas del paciente" 
                      {...register('symptoms',{
                        required:'Los sintomas del paciente son obligatorios',
                        minLength:{
                            value:3,
                            message:'Minimo 2 caracteres'
                        },
                    })} 
                  ></textarea>
                  {errors.symptoms && (
                        <Alert>
                        {errors.symptoms?.message}
                        </Alert>
                    )}
              </div>
  
              <input
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                  value='Guardar Paciente'
              />
          </form> 
      </div>
    )
  }