type PatientItemProps={
    label:string,
    data:string
}

export default function Patientitem({label,data}:PatientItemProps) {
  return (
    <p className='font-bold mb-3 text-indigo-700 uppercase'>
            {label}: {' '}
            <span className='font-normal normal-case text-gray-700'>{data}</span>
        </p>
  )
}
