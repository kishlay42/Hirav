import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import{
Home,
News,
About,
MarketPlace,
InvestmentPlanner,
Services,
SignIn,
SignUp
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
          <Route path="invest" element={<InvestmentPlanner />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="services" element={<Services />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
