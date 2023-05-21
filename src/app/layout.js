import './globals.css'
import Navbar from '@/components/navbar/Navbar'

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex feita com NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main className='main-container'>{children}</main>
      </body>
    </html>
  )
}
