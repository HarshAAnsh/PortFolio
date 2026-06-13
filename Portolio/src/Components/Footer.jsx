import React from 'react'

function Footer() {
  return (
   <footer className='mt-8 border z-10 border-[#33353F] border-l-transparent border-r-transparent text-white'>
    <div className='container p-4 mb:p-12 justify-between flex flex-col md:flex-row items-center gap-4 md:gap-0'>
        <div className='text-white text-2xl md:text-3xl font-black cursor-pointer'>
            PORTFOLIO<span className='text-primary'>.</span>
        </div>
        <p className='text-slate-600 text-sm md:text-base'>
            All rights reserved.
        </p>
    </div>

   </footer>
  )
}

export default Footer