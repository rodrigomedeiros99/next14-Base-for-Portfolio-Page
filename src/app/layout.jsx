import Link from 'next/link'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Inicial',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto">
          <header className="flex items-center justify-between w-full py-10">
            <span className="text-2xl font-black cursor-default">RODRIGO MEDEIROS</span>
            <nav className="flex gap-10">
              <Link href="/">Inicial</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/admin/subscribers">Subscribe</Link>
            </nav>
          </header>

          {children}

          <footer className="p-10">
            <p>Rodrigo Medeiros &copy; React-Next-DOM</p>
          </footer>
        </div>
      </body>
    </html>
  )
}