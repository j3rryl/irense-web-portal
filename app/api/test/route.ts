import { API_URL } from '@/app/utils/constants'
import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch(`${API_URL}/rooms`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log(res);
  
  const data = await res.json()
 
  return NextResponse.json({ data })
}