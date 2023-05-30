// import './globals.css'


import Sidebar from '@/components/shared/Sidebar'
export const metadata = {
  title: 'Tabla De Simbolos',
  description: 'Proyecto De Compiladores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar/>
        {children}
        </body>
    </html>
  )
}
