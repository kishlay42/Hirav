import React from 'react'
import NavBar from '../NavBar/NavBar'
import TrendingArticles from './TrendingArticles'
import Forum from './Forum'
import TwitterFeeds from './TwitterFeeds'
const News = () => {
  return (
    <><NavBar/>
    <div className='flex flex-row gap-32 mx-auto mt-10 pb-10'>
      <div className='w-[60%] mr-20'>
        <h1 className='text-4xl mx-auto text-center mt-24 font-bold ml-16'>Trending Articles</h1>
        <div className='mt-8'><TrendingArticles/></div>
        <h1 className='text-4xl mx-auto text-center mt-24 font-bold ml-16'>Join Discussion Groups</h1>
        
        <div className='mt-8'><Forum/></div>
      </div>
      <div className='w-[25%] bg-white rounded-xl'><TwitterFeeds/></div>
    </div>
    </>
  )
}

export default News