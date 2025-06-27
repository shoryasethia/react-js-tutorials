import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

// Only "Outlet" will change

export function Layout() {
  
  return (
    <>
      <Header />
      <Outlet />        
      <Footer />
    </>
  )
}
