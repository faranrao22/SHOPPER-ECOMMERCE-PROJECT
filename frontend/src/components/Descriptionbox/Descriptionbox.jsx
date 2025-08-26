import React from 'react';

function Descriptionbox() {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-[170px] my-16 lg:my-[120px]">
      
      {/* Tabs (Description / Reviews) */}
      <div className="flex flex-col sm:flex-row">
        <div className="flex border border-[#d0d0d0] justify-center items-center text-sm sm:text-base font-semibold w-full sm:w-[171px] h-[50px]">
          Description
        </div>
        <div className="flex border border-[#d0d0d0] justify-center items-center text-sm sm:text-base font-semibold w-full sm:w-[171px] h-[50px] bg-[#FBFBFB] text-[#555]">
          Reviews (122)
        </div>
      </div>

      {/* Content Box */}
      <div className="flex flex-col gap-6 border border-[#D0D0D0] p-6 sm:p-8 text-sm sm:text-base text-[#333] bg-white mt-2 leading-relaxed">
        <p>
          An e-commerce website is an online platform that allows businesses or individuals to buy and sell products or services over the internet. Unlike traditional physical stores, e-commerce websites are accessible anytime and anywhere, making shopping more convenient for customers around the world.
        </p>
        <p>
          An e-commerce website is like having your shop open 24/7, but online. Customers can browse products, add them to their cart, pay securely, and get them delivered to their door. It’s an essential part of modern business, connecting sellers and buyers quickly and easily.
        </p>
      </div>

    </div>
  );
}

export default Descriptionbox;
