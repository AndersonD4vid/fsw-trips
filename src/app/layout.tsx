import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500', '600', '700'] })

export const metadata = {
  title: 'FWS Trips',
  description: 'Sistema de Reserva de Viagens! Reserve sua viagem de maneira fácil!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className} suppressHydrationWarning={true} >
        <NextAuthProvider>
          <h1>Header</h1>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
