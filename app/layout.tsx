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

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  // console.log("layout", { props }); // empty
  return (
    <html>
      <body className={inter.className}>
        <AuthContext>
          <ResponsiveSidebar appBar={<ResponsiveAppBar/>} content={children}/>
        </AuthContext>
      </body>
    </html>
  );
}
