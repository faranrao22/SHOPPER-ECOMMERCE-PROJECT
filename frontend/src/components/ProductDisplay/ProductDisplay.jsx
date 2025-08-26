import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { dataContext } from '../../context/ShopContext';

function ProductDisplay({ product }) {
  const { addToCart } = useContext(dataContext);

  return (
    <div className="max-w-[1200px] mx-auto px-15">
      <div className="flex flex-col lg:flex-row gap-8 py-10">

        {/* Images Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 justify-center">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={product.image}
                alt="thumb"
                className="w-16 h-20 sm:w-20 sm:h-26 object-cover "
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-shrink-0 mx-auto">
            <img
              src={product.image}
              alt="main"
              className="w-[260px] sm:w-[300px] lg:w-[360px] h-[360px] sm:h-[420px] lg:h-[465px] object-cover rounded shadow"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl lg:text-[26px] font-semibold mb-4 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
            ))}
            <img src={star_dull_icon} alt="star" className="w-5 h-5" />
            <span className="ml-2 text-gray-600 text-sm">(122)</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-4">
            <span className="line-through text-gray-500 text-base sm:text-lg">${product.old_price}</span>
            <span className="text-red-600 text-xl sm:text-2xl font-bold">${product.new_price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,
            worn as an undershirt or outer garment.
          </p>

          {/* Size Options */}
          <div className="mb-6">
            <h2 className="text-base sm:text-lg font-semibold mb-2">Select Size</h2>
            <div className="flex gap-2 flex-wrap">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <div
                  key={size}
                  className="px-4 py-2 text-sm cursor-pointer border rounded hover:bg-gray-100 transition"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product.id)}
            className="bg-red-600 text-white px-8 py-3 text-sm sm:text-base rounded hover:bg-red-700 transition mb-5"
          >
            ADD TO CART
          </button>

          {/* Category and Tags */}
          <p className="text-sm text-gray-800 mb-1">
            <span className="font-semibold">Category:</span> Men, Jacket, Bomber
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
