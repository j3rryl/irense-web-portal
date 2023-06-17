import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iRense',
  description: 'Diabetic Retinopathy Web Portal',
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

import AuthContext from "./api/AuthContext";

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  console.log("layout", { props }); // empty
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
