import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Hoàng ❤️ Nguyên",
  description: "Chúc mừng Hoàng và Nguyên đã kết hôn!",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="static/favicon.ico" />
        <meta property="og:title" content={String(metadata.title) || ""} />
        <meta property="og:description" content={metadata.description || ""} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://my-wedding-gfz1.onrender.com"
        />
        <meta
          property="og:image"
          content="https://my-wedding-gfz1.onrender.com/images/12.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
