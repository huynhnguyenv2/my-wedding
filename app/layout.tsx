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
  description: "When two hearts become one ❤️",
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
        <meta
          property="og:url"
          content="https://my-wedding-gfz1.onrender.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hoàng ❤️ Nguyên" />
        <meta
          property="og:description"
          content="When two hearts become one ❤️"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/81d6adc6-b84f-42e1-b9f0-d361d1c6750b.png?token=qVKVBdd6qWIIveWQfYtwCcQuhCxPhx0pn_D3X2alFk4&height=1799&width=1200&expires=33270247764"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="my-wedding-gfz1.onrender.com"
        />
        <meta
          property="twitter:url"
          content="https://my-wedding-gfz1.onrender.com/"
        />
        <meta name="twitter:title" content="Hoàng ❤️ Nguyên" />
        <meta
          name="twitter:description"
          content="When two hearts become one ❤️"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/81d6adc6-b84f-42e1-b9f0-d361d1c6750b.png?token=qVKVBdd6qWIIveWQfYtwCcQuhCxPhx0pn_D3X2alFk4&height=1799&width=1200&expires=33270247764"
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
