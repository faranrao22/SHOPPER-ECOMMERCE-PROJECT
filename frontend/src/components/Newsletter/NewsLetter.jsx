import React from 'react';

function NewsLetter() {
  return (
    <div className='w-[90%] md:w-[85%] lg:w-[80%] min-h-[40vh] flex flex-col items-center justify-center m-auto px-4 sm:px-6 md:px-10 mb-[100px] lg:mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-5 rounded-2xl shadow-sm'>

      <h1 className='text-[#2f2f2f] text-[26px] sm:text-[34px] lg:text-[42px] font-semibold text-center leading-snug'>
        Get Exclusive Offers On Your Email
      </h1>

      <p className='text-[#4a4a4a] text-[15px] sm:text-[18px] text-center'>
        Subscribe to our newsletter and stay updated
      </p>

      <div className='w-full max-w-[730px] flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-white sm:h-[65px] p-2 sm:p-0 rounded-full shadow-md border border-[#e3e3e3]'>
        <input
          type="email"
          placeholder="Enter your email"
          className='flex-grow w-full px-5 py-3 sm:py-0 sm:ml-6 text-[16px] text-[#515151] placeholder-[#9e9e9e] outline-none bg-[#f9f9f9] sm:bg-white rounded-full sm:rounded-none sm:rounded-l-full'
        />
        <button className='w-full sm:w-[160px] h-[45px] sm:h-full rounded-full bg-black text-white font-medium text-[16px] transition duration-200 hover:opacity-90'>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
