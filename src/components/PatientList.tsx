import { usePatient } from "../store/store";
import PatientListed from "./PatientListed";


export default function PatientList() {
  const { patients } = usePatient();
  console.log(patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>

  
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {' '}
                <span className="text-indigo-500 font-bold">paceintes y citas</span></p>
                {patients.map((patient) => (
                    <PatientListed
                        key={patient.id}
                        patient={patient}
                    >
                    </PatientListed>
                ))}
       </>        
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Comienza agregando paciente {" "}
            <span className="text-indigo-500 font-bold">y apareceran aqui!</span>
          </p>

        </>
      )}
    </div>
  );
}