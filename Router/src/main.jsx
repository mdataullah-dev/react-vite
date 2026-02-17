import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

//import App from './App.jsx'
import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import AboutUs from './components/About/AboutUs.jsx';
import Contact from './components/ContactUs/Contact.jsx';


import Layout from './Layout.jsx';
import React from 'react';
import User from './components/User/User.jsx';
import Git, { githubInfoLoader } from './components/GitHub/Git.jsx';


/*
//*⚡ Important Concept

?Do routing systems hote hain:

*1️⃣ Old Way

!BrowserRouter + Routes + Route

*2️⃣ New Way (Recommended)

!createBrowserRouter + RouterProvider

?Dono ko mix nahi karna.
*/


//? RouterProvider => wants or takes props

//!router banana seekho :

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//        path : "",
//        element: <Home />
//       },
//       {
//         path: 'about',
//         element: <AboutUs />
//       },
//       {
//         path : 'contact',
//         element : <Contact />
//       }

//     ]
//   }
// ])

//? another way to do routing is :-

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}>
//       <Route path='about' element = {<AboutUs />}>
//       <Route path='contact' element = {<Contact />}>
//       </Route>
//       </Route>
//       </Route>
//     </Route>
//   )
// )


///// using self closing tags:-

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />} >

//       <Route path='' element={<Home />} />
//       <Route path='about' element = {<AboutUs />} />
//       <Route path='contact' element = {<Contact />} />
//       <Route path='user/:id' element = {<User />} />
//       <Route path='github' element = {<Git />} />
      
//     </Route>
//   )
// )

//? :id bola hai humne toh we can use that ins USER component file


//? Loader 

//? loader optimization deta hai => koi v data fetch krna hai api wegra se
//? so we do direct api call from here using loader 
//? useEffect se v fast 
///? jaise hi mouse ka cursor us github likha hua header pr jayega bina click kiye => wahan pr fecthing chalu ho jati and usko cache mein v rakh leta hai ye 
//? loader ke ander hi call back milta hai wahin se api fwtch ka logic likh sjte ..=> but hum dusri file mein likh kr import kr letre hain
//? ya method call kr do yahan se 
//*    <Route loader = { ({req{}) = fetch("https//:api")  } /> 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >

      <Route path='' element={<Home />} />
      <Route path='about' element = {<AboutUs />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='user/:id' element = {<User />} />
      <Route
       loader = {githubInfoLoader}
       path='github'
       element = {<Git />} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
       
)
