import React from 'react'
import { ArrowRight } from 'lucide-react';


function Features() {
  return (
<> 
<div className='justify-center p-2'>
         <div className=' w-full md:w-[66%] mx-auto text-center my-12' >
          <h1 className='text-[#000229] font-bold text-2xl md:text-4xl mb-2'>Our Exciting Features</h1>
          <p className='text-[#5f6368] text-lg  '>More then 15,000 companies trust and chosr Itech</p>
         </div>

    <div className='container max-w-6xl mx-auto grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-16 p-2'>

      <div className='bg-white w-full  md:w-[23rem] h-[20rem] space-y-6 p-8  mb-3 rounded-3xl border hover:shadow-md transition duration-400 ease-in-out hover:scale-105'>
        <img src="/assets/cardImage1.jpg" alt="" />
        <h1 className='text-3xl font-semibold'>A Unified View of The Customer</h1>
        <button className='p-3 bg-blue-200 text-blue-600 rounded-full'><ArrowRight/></button>
      </div>

      <div className='bg-white w-full md:w-[23rem] h-[20rem] space-y-6 p-8  mb-3 rounded-3xl border hover:shadow-md   transition duration-400 ease-in-out hover:scale-105'>
        <img src="/assets/cardImage2.jpg" alt="" />
        <h1 className='text-3xl text-[#000229] font-semibold'>Al Data Analysis</h1>
        <button className='p-3 bg-blue-200 text-blue-600 rounded-full'><ArrowRight/></button>
      </div>

      <div className='bg-white w-full md:w-[23rem] h-[20rem] space-y-6 p-8  mb-3 rounded-3xl border hover:shadow-md  transition duration-400 ease-in-out hover:scale-105'>
        <img src="/assets/cardImage3.jpg" alt="" />
        <h1 className='text-3xl text-[#000229] font-semibold'>Al Data Analysis</h1>
        <button className='p-3 bg-blue-200 text-blue-600 rounded-full'><ArrowRight/></button>
      </div>

    </div>
</div>

</>
    
  )
}

export default Features