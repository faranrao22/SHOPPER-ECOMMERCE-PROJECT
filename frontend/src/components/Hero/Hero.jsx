import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

function Hero() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-[60px] lg:px-[100px] bg-[linear-gradient(180deg,_#fde1ff,_#ffffff)] overflow-hidden">
      
      {/* Left side */}
      <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start mt-10 lg:mt-0">
        <h2 className="text-[#090909] text-[20px] md:text-[24px] lg:text-[26px] font-semibold uppercase">
          New Arrivals Only
        </h2>

        <div className="flex flex-col leading-none">
          <div className="flex justify-center lg:justify-start items-center gap-3 md:gap-4">
            <p className="text-[#171717] text-[48px] md:text-[60px] lg:text-[72px] font-semibold lowercase">new</p>
            <img src={hand_icon} alt="Hand Icon" className="w-[40px] md:w-[50px]" />
          </div>
          <p className="text-[#171717] text-[48px] md:text-[60px] lg:text-[72px] font-semibold lowercase">collections</p>
          <p className="text-[#171717] text-[48px] md:text-[60px] lg:text-[72px] font-semibold lowercase">for everyone</p>
        </div>

        <button className="flex items-center justify-center gap-3 w-[200px] md:w-[220px] h-[50px] rounded-full bg-[#ff4141] text-white text-[16px] md:text-[18px] font-medium mt-4">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow Icon" className="w-[18px] md:w-[20px]" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center mt-10 lg:mt-0">
        <img src={hero_image} alt="Hero" className="w-full max-w-[400px] md:max-w-[500px] object-contain" />
      </div>
    </div>
  )
}

export default Hero
