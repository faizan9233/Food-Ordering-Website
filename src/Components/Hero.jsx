import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
        <div className=' max-h-[500px] relative'>
            <div className='font-bold bg-black/40 text-gray-200 absolute w-full h-full flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'> <span className='text-orange-600 '>Foods</span> Delivered</h1>
            </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg" alt="" />
        </div>
      
    </div>
  )
}

export default Hero
