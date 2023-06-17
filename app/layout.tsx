import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iRense',
  description: 'Diabetic Retinopathy Web Portal',
}

import AuthContext from "./api/AuthContext";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import AuthPage from './authentication/page';

export default async function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect(`/authentication?callbackUrl=/`)
  // }
  return (
    <html>
      <body className={inter.className}>
        <AuthContext>
         {/* <ResponsiveSidebar appBar={<ResponsiveAppBar/>} content={children}/>  */}

          {session ? <ResponsiveSidebar appBar={<ResponsiveAppBar/>} content={children}/> : <AuthPage/>}
        </AuthContext>
      </body>
    </html>
  );
}
