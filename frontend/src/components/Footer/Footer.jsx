import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 px-4 sm:px-6 md:px-10'>
      
      {/* Logo + Title */}
      <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
        <img src={footer_logo} alt="footer logo" className='w-[50px] sm:w-[60px]' />
        <p className='text-[#383838] text-[32px] sm:text-[40px] lg:text-[46px] font-bold'>SHOPPER</p>
      </div>

      {/* Menu Links */}
      <ul className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-[50px] text-[16px] sm:text-[18px] md:text-[20px]'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='flex gap-4 sm:gap-[20px]'>
        <div className='cursor-pointer p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded-md'>
          <img src={instagram_icon} alt="Instagram" className='w-5 h-5' />
        </div>
        <div className='cursor-pointer p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded-md'>
          <img src={pintester_icon} alt="Pinterest" className='w-5 h-5' />
        </div>
        <div className='cursor-pointer p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded-md'>
          <img src={whatsapp_icon} alt="Whatsapp" className='w-5 h-5' />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='flex flex-col items-center gap-6 w-full mb-8 text-[#1a1a1a] text-[14px] sm:text-[16px] md:text-[20px]'>
        <hr className='w-full sm:w-[90%] md:w-[80%] border-none rounded-[10px] h-[2px] bg-[#c7c7c7]' />
        <p className='text-center px-2'>Copyright © 2025 — All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
