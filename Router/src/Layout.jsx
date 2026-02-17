import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'

//? ye outlet jahan v use kr lo jaise hum use kr rahein hain  header and footer ke beech mein toh 
//! toh ue ye header || footer hamesha smae rahega hum outlet mein page ghyma skte hain  
//? jaise beech mein home ayega => contacUS ayega => dynamically move kr skte 

function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default Layout