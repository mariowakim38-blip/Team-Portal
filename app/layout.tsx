import './globals.css'

export const metadata = {
  title: 'GymTrack',
  description: 'Track progress. Build champions.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
