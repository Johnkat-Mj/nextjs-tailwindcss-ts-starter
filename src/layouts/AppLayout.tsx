import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

export default function AppLayout({children}:{children:ReactNode}) {
  return (
    <ThemeProvider attribute='class' >
      {children}
    </ThemeProvider>
  )
}
