import React, { useContext } from 'react'
import { dataContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Items from '../components/items/Items'

function ShopCategory(props) {
  const { all_product } = useContext(dataContext)

  return (
    <div className="w-[94%] sm:w-[90%] md:w-[88%] lg:w-[82%] mx-auto">
      
      {/* Banner */}
      <img
        className="w-full my-6 rounded-md object-cover"
        src={props.banner}
        alt="Category Banner"
      />

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Showing 1–12</span> out of 36 products
        </p>
        <button className="flex items-center gap-2 py-2 px-4 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition text-sm sm:text-base">
          Sort by
          <img src={dropdown_icon} alt="Sort" className="w-3 h-3" />
        </button>
      </div>

      {/* Responsive Products Grid - Cards Centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 justify-items-center">
        {all_product.map((item, index) =>
          props.category === item.category ? (
            <Items
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>

      {/* Explore More */}
      <div className="ml-[450px] flex justify-center items-center mt-16 mb-24 w-[180px] h-[55px] sm:h-[60px] rounded-full bg-[#ededed] text-[#787878] text-base font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
