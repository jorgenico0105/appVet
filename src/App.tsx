import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

function App() {
  

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:mx-auto md:w-2/3">
          Seguimiento de pacientes {' '}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>
        <div className="mt-12 md:flex">
          <PatientForm></PatientForm>
          <PatientList></PatientList>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
    )
}

export default App
