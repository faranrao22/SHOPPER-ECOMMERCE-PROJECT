import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { dataContext } from '../../context/ShopContext'
import { Menu, X } from 'lucide-react'

function Navbar() {
  let [menu, setmenu] = useState("shop")
  const { gettotalcartitem } = useContext(dataContext)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className=' font-secondary flex justify-between items-center shadow-sm py-4 px-6 bg-white relative overflow-x-clip'>

      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src={logo} alt="logo" />
        <p className='text-[#171717] text-xl font-semibold'>SHOPPER</p>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex items-center gap-[50px] text-[#626262] text-[20px] font-semibold'>
        <li onClick={() => setmenu("shop")} className='cursor-pointer flex flex-col items-center'>
          <Link to='/'>Shop</Link>
          {menu === "shop" && <hr className='border-none w-[90%] h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
        <li onClick={() => setmenu("men")} className='cursor-pointer flex flex-col items-center'>
          <Link to="/mens">Men</Link>
          {menu === "men" && <hr className='border-none w-[90%] h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
        <li onClick={() => setmenu("women")} className='cursor-pointer flex flex-col items-center'>
          <Link to='/womens'>Women</Link>
          {menu === "women" && <hr className='border-none w-[90%] h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
        <li onClick={() => setmenu("kids")} className='cursor-pointer flex flex-col items-center'>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr className='border-none w-[90%] h-[3px] rounded-[10px] bg-[#FF4141]' />}
        </li>
      </ul>

      {/* Desktop Right Buttons */}
      <div className='hidden lg:flex items-center gap-[45px]'>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}  className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]'>Logout</button>
        :<Link to='/login'>
          <button className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]'>
            Login
          </button>
        </Link>}
        
        <Link to='/cart'>
          <div className='relative'>
            <img src={cart_icon} alt="cart" />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {gettotalcartitem()}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className='lg:hidden'>
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className='absolute right-0 h-screen top-full  w-[50%] bg-white shadow-md py-4 px-6 z-50 lg:hidden'>
          <ul className='flex flex-col gap-6 text-[#626262] text-[18px] font-semibold'>
            <li onClick={() => { setmenu("shop"); setMobileMenu(false) }}>
              <Link to='/'>Shop</Link>
            </li>
            <li onClick={() => { setmenu("men"); setMobileMenu(false) }}>
              <Link to='/mens'>Men</Link>
            </li>
            <li onClick={() => { setmenu("women"); setMobileMenu(false) }}>
              <Link to='/womens'>Women</Link>
            </li>
            <li onClick={() => { setmenu("kids"); setMobileMenu(false) }}>
              <Link to='/kids'>Kids</Link>
            </li>
            <li>
               {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}  className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]'>Logout</button>
        :<Link to='/login'>
          <button className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]'>
            Login
          </button>
        </Link>}
            </li>
            <li>
              <Link to='/cart' className='flex items-center gap-3'>
                <img src={cart_icon} alt="cart" className='w-6 h-6' />
                <span className='bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {gettotalcartitem()}
                </span>
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
