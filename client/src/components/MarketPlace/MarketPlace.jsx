import React from 'react'
import NavBar from '../NavBar/NavBar'
import InvestmentSelector from './InvestmentSelector'
import TrendingOpportunities from './TrendingOpportunities'
import EcoProducts from './EcoProducts'
const MarketPlace = () => {
  return (
    <><NavBar/>
     <main className="flex flex-col pt-16 mx-auto">
      <div className="flex flex-row pb-10 mt-0 mx-auto max-w-full  bg-white w-[85%] rounded-xl max-md:mt-0">
        <InvestmentSelector />

      </div>
      <TrendingOpportunities />
      <EcoProducts />      
    </main></>
  )
}

export default MarketPlace