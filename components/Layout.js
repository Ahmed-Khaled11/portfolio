import React from 'react'
import NavBar from './Navbar'

export default function Layout({children}) {
  return (
    <>
          <NavBar />
          {children}
    </>
  )
}
