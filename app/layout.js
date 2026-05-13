import '@/styles/globals.css'

export const metadata = {
  title: 'Expense Tracker',
  description: 'A personal expense tracker with live currency conversion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
