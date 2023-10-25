import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: 'Xender',
  description: 'The next generation file sharing application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        <main>
          <Sidebar />
          {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
