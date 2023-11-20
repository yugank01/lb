import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lawbriefcase',
  description: 'FREE LEGAL ADVICE JUST A FEW CLICK AWAY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="2MiXRmQPvY3ZYWNfs9NZZ6uksEFQMkbNwWKzxVuglmg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
