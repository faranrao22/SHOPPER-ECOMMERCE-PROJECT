import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className="w-[90%] lg:w-[80%] h-auto lg:h-[60vh] m-auto mt-[100px] flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-[60px] py-12 bg-[linear-gradient(180deg,_#fde1ff,_#ffffff)] rounded-xl overflow-hidden">

      {/* left side */}
      <div className="flex flex-col text-center lg:text-left items-center lg:items-start gap-2">
        <h1 className="text-[#171717] text-[40px] md:text-[50px] lg:text-[60px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[40px] md:text-[50px] lg:text-[60px] font-semibold">Offers For You</h1>
        <p className="text-[#171717] text-[14px] md:text-[16px] font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-[160px] md:w-[180px] h-[45px] md:h-[50px] rounded-full bg-[#ff4141] text-white text-[15px] md:text-[16px] font-medium mt-4">
          Check Now
        </button>
      </div>

      {/* right side */}
      <div className="flex items-center justify-center">
        <img src={exclusive_image} alt="Exclusive offer" className="w-[250px] md:w-[300px] object-contain" />
      </div>

    </div>
  )
}

export default Offers
