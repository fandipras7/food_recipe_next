import React from 'react'
import Footer from '../components/module/Footer'
import Navbar from "../components/module/Navbar"

const Page404 = () => {
  return (
    <>
      <Navbar />
      <div style={{
        height : 'calc(100vh - 380px) ',
        boxSizing : 'border-box',
        overflow : 'hidden',
        display : 'flex'
      }}>
        <h1 style={{
          margin: 'auto'
        }}>404, Sorry Page Not Found</h1>
      </div>
      <Footer />
    </>
  )
}

export default Page404