"use client";
import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/authentication?callbackUrl=${window.location.origin + pathname}`)
    }
  })
  return (
    <>
    <div>
      This is the profile page page, sir.
    </div>
    </>
  )
}
