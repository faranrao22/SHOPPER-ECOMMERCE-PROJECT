import React from 'react'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <Link
      to={`/product/${props.id}`}
      className="block w-[220px] hover:scale-105 transition duration-[600ms]"
    >
      <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name || "Product"} className="w-full" />
      <p className="my-[6px]">{props.name}</p>

      <div className="flex gap-[20px]">
        <div className="text-[#374151] text-[18px] font-semibold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </Link>
  )
}

export default Items
