import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex feita com NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='main-container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
