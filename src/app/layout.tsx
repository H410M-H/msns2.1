// layout.tsx
import "~/styles/globals.css";
import { Inter } from 'next/font/google'
import { type Metadata } from "next";
import Header from "./_components/shared/nav/Header";
import { Footer } from "./_components/shared/footer/footer";
import { ClientScrollArea } from "./_components/(blocks)/ClientScrollArea";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'M.S. NAZ HIGH SCHOOL®',
  description: 'Pursuit of Excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-emerald-100 font-serif`}>
        <Header />
        <ClientScrollArea>
          {children}
        </ClientScrollArea>
        <Footer />
      </body>
    </html>
  )
}