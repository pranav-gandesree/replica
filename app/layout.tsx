

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "Ithaca",
  description: "A company designed to accelerate the crypto frontier",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html lang="en">
      <body className="bg-white text-[#094D3E] min-h-screen">
        <div className="flex flex-col min-h-screen">
          <div className="max-w-3xl mx-auto px-8 py-12 w-full">
        
              <Navigation />
  
            <main className="px-4 mt-4">{children}</main>
          </div>
          <Footer />
        </div>


      </body>
    </html>
  )
}