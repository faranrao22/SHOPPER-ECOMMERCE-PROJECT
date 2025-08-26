import React from 'react'

import Items from '../items/Items'
import { useState } from 'react'
import { useEffect } from 'react'

function Popular() {
  let [data_product,setDataproduct]=useState([])
  useEffect(()=>{
 fetch('http://localhost:4000/api/popular-in-women')
    .then((response)=>response.json())
    .then((data)=>setDataproduct(data))

  },[])
  return (
    <div className="flex flex-col items-center gap-4 py-8 px-4 sm:px-6 md:px-8 lg:px-0">
      <h1 className="text-[#171717] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-center">
        POPULAR IN WOMEN
      </h1>

      <div className="w-[120px] sm:w-[160px] lg:w-[200px] h-[3px] bg-[#252525] rounded"></div>

      <div className="mt-8 flex flex-wrap gap-6 sm:gap-8 justify-center">
        {data_product.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
