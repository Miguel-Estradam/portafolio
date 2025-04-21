import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import React from 'react'
import theme from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '@/components/ui/Header'

const AppMui = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <AppRouterCacheProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="grid grid-cols-24 min-h-screen ">
        <Header />
        <main className="col-span-23 w-full h-full min-h-screen">{children}</main>
        <footer></footer>
      </div>
    </ThemeProvider>
    
  </AppRouterCacheProvider>
  )
}

export default AppMui
