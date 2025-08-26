import React, { useContext } from 'react';
import { dataContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

function Cartitem() {
  const { all_product, cartitem, RemovefromCart } = useContext(dataContext);

  const subtotal = all_product.reduce((acc, item) => {
    return acc + item.new_price * cartitem[item.id];
  }, 0);

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-start py-12 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-6xl">

        {/* Table Header - Desktop only */}
        <div className="hidden lg:grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-3 mb-6 text-sm">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart Items */}
        {all_product.map((item) => {
          if (cartitem[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="border-b py-6 text-gray-700 text-sm flex flex-col gap-3 lg:grid lg:grid-cols-6 lg:items-center lg:gap-4"
              >
                {/* Mobile Layout */}
                <div className="flex lg:hidden gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                  <div className="flex flex-col gap-2">
                    <p><span className="font-medium">Title:</span> {item.name}</p>
                    <p><span className="font-medium">Price:</span> ${item.new_price}</p>
                    <p><span className="font-medium">Qty:</span> {cartitem[item.id]}</p>
                    <p><span className="font-medium">Total:</span> ${(item.new_price * cartitem[item.id]).toFixed(2)}</p>
                    <button
                      onClick={() => RemovefromCart(item.id)}
                      className="text-red-600 text-sm underline w-fit"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                </div>
                <p className="hidden lg:block">{item.name}</p>
                <p className="hidden lg:block">${item.new_price}</p>
                <div className="hidden lg:flex">
                  <div className="border px-4 py-2 rounded text-center">
                    {cartitem[item.id]}
                  </div>
                </div>
                <p className="hidden lg:block">
                  ${(item.new_price * cartitem[item.id]).toFixed(2)}
                </p>
                <div className="hidden lg:flex">
                  <img
                    src={remove_icon}
                    alt="remove"
                    onClick={() => RemovefromCart(item.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}

        {/* Totals & Promo Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cart Totals */}
          <div className="p-4 ">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="space-y-4 text-gray-700 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-base text-gray-800">
                <p>Total</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="p-4 ">
            <p className="mb-3 text-gray-700">If you have a promo code, enter it here:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="promo code"
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-10">
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition w-full sm:w-auto">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
