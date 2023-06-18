import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iRense',
  description: 'Diabetic Retinopathy Web Portal',
}

import AuthContext from "./contexts/AuthContext";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import AuthPage from './authentication/page';
import { ThemeContextProvider } from './theme/ThemeContextProvider';

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
          <ThemeContextProvider>
          {session ? <ResponsiveSidebar appBar={<ResponsiveAppBar/>} content={children}/> : <AuthPage/>}
          </ThemeContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
