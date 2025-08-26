import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

function BreadCrum({ product }) {
  return (
    <div className="max-w-[1200px] mx-auto px-15 mt-5">
      <div className="flex items-center text-sm font-medium text-gray-600 gap-1 mb-5">
        <span className="hover:underline cursor-pointer">HOME</span>
        <img src={arrow_icon} alt="arrow" className="w-3 h-3 mx-1" />
        
        <span className="hover:underline   cursor-pointer">SHOP</span>
        <img src={arrow_icon} alt="arrow" className="w-3 h-3 mx-1" />
        
        <span className="hover:underline font-medium cursor-pointer capitalize">{product.category}</span>
        <img src={arrow_icon} alt="arrow" className="w-3 h-3 mx-1" />
        
        <span className="truncate max-w-[300px]" title={product.name}>
          {product.name}
        </span>
      </div>
    </div>
  );
}

export default BreadCrum;
