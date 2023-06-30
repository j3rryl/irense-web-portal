import { API_URL } from '@/app/utils/constants'
 
export async function getTests() {
  const res = await fetch(`${API_URL}/rooms/`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })  
  const data = await res.json()  
  return data;
}