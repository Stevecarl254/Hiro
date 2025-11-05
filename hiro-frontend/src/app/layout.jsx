import React from "react"
import { Playfair_Display } from "next/font/google"
import { Geist } from "next/font/google"
import "../globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "Hiro - Premium Catering Services",
  description: "Exquisite catering for corporate events, weddings, and private parties",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
