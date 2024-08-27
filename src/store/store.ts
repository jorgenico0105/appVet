
import { create } from "zustand";
import { DraftPati, Patient } from "../types";
import {v4 as uuidv4} from 'uuid'
import { devtools,persist} from 'zustand/middleware'

type PatientState={
    patients:Patient[]
    activeId:Patient['id']
    addPatient:(data:DraftPati)=>void
    removePatient:(id:Patient['id'])=>void
    getPatientId:(id:Patient['id'])=>void
    updatePatient:(data:DraftPati)=>void
}
const patientId=(patient:DraftPati):Patient=>{
    return{...patient,id:uuidv4() }
}

export const usePatient=create<PatientState>()(devtools (persist((set)=>({
    patients:[],
    activeId:'',
    addPatient:(data)=>{
        const newPatient=patientId(data)
        set ((state)=>({
            patients:[...state.patients,newPatient],
            
        }))
    },
    removePatient:(id)=>{
        set((state)=>({
            patients: state.patients.filter(pati=>pati.id!=id),
        }))
    },
    getPatientId:(id)=>{
        set(()=>({
            activeId: id
        }))
    },
    updatePatient: (data) => {
        set((state) => ({
            patients: state.patients.map((pat) => 
                pat.id === state.activeId ? {id:state.activeId, ...data} : pat
            ),
            activeId: ''
        }));
    }
    
}),{
    name:'patient-storage',
})
))

