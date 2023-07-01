import { Patient } from '@/app/interfaces';
import { API_URL } from '@/app/utils/constants'
 
export async function getPatients() {
  const res = await fetch(`${API_URL}/patients/`, {
    // next: {
    //   revalidate: 3
    // },
    headers: {
      'Content-Type': 'application/json',
    },
  })  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()  
  return data;
}

export async function getPatient({id} : {id: number}) {
    const res = await fetch(`${API_URL}/patients/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })  
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    const data = await res.json()  
    return data;
}

export async function addPatient({patient} : {patient: Patient}) {
    const res = await fetch(`${API_URL}/patients/`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
    })  
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    const data = await res.json()  
    return data.message;
}

export async function updatePatient({id} : {id: number}) {
    const res = await fetch(`${API_URL}/patients/${id}/`, {
        method:'PUT',
    })  
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    const data = await res.json()  
    return data;
}