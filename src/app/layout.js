import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Rocket NFTs',
  description: 'Descubra a verdadeira arte digital e colecione diversas NFTs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
