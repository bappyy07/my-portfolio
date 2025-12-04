import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Sections/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Sections/Footer'

const App = () => {
  return (
    <ThemeProvider>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet/>
        </main>
        <Footer/>
    </ThemeProvider>
    
  )
}

export default App