import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata = {
  title: "CivicLink - Smart Civil Service Platform",
  description: "Modern platform for efficient civil service management",
  generator: 'v0.app'
}

import { AIChatWidget } from "@/components/ai-chat-widget"

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen w-full">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Topbar />
            <main className="flex-1">
              {children}

            </main>

          </div>
        </div>
        <AIChatWidget />
      </body>
    </html>
  )
}
