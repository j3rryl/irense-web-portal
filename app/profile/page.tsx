import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Page = async () => {
  const session = await getServerSession(authOptions)
  console.log("session ",session);
  

  if (!session) {
    // redirect('/signin?callbackUrl=/profile')
    console.log("No session");
    
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Profile</h1>
      </div>
    </section>
  )
}

export default Page