import React from 'react'
import { categories } from '../Data/data'
const Menu = () => {
  return (
    <div className='max-w-[1640px] mx-auto py-8 px-24'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-orange-600'>Top Rated Menu Items</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 '>
        {
            categories.map((item)=>(
                
                    <div className='shadow-xl p-4 gap-1 flex items-center justify-between w-full bg-gray-100 rounded-lg hover:scale-105 duration-500 '>
                        <h2 className='font-bold sm:text-[xl]'>{item.name}</h2>
                        <img  src={item.image}  alt={item.name} />
                    </div>
                
            ))
        }
        </div>

      
    </div>
  )
}

export default Menu
