import './globals.css'
import { Inter } from 'next/font/google'
import AuthContext from "./contexts/AuthContext";
import { ThemeContextProvider } from './theme/ThemeContextProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iRense',
  description: 'Diabetic Retinopathy Web Portal',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContext>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}

