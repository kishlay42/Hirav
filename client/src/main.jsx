import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import{
Home,
ContactUs,
News,
About,
MarketPlace,
Services,
SignIn,
}from './components/index'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router =createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="services" element={<Services />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
