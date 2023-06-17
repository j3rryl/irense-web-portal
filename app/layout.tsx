import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iRense',
  description: 'Diabetic Retinopathy Web Portal',
}

import AuthContext from "./api/AuthContext";

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
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
