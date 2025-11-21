import './globals.css';

export const metadata = {
  title: 'Brainrot Calculator',
  description: 'Minimal brainrot calculator for My Brainrot Egg Farm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
