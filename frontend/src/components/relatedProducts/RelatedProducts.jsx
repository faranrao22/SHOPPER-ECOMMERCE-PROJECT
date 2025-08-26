import React from 'react';
import data_product from '../Assets/data';
import Items from '../items/Items';

function RelatedProducts() {
  return (
    <div className="flex flex-col items-center py-10 sm:py-14 px-4">
      {/* Heading */}
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold mb-2 text-center">
        Related Products
      </h1>

      {/* Divider */}
      <hr className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-[10px] bg-[#252525] mb-8" />

      {/* Items Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {data_product.map((item, index) => (
          <Items
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
