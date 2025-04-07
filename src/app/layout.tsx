import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SHT Education - Công nghệ và Giáo dục SHT',
  description: 'Công ty Cổ phần Công nghệ và Giáo dục SHT - Nền tảng giáo dục trực tuyến hàng đầu dành cho học sinh Việt Nam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow mb-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
