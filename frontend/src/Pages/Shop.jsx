import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/Newcollection/NewCollection'
import NewsLetter from '../components/Newsletter/NewsLetter'
import Footer from '../components/Footer/Footer'

function Shop() {
  return (
    <div >
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
        
      
    </div>
  )
}

export default Shop
