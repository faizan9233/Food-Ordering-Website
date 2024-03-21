import {data} from '../Data/data.js';
import React from 'react'
import { useState } from 'react';

const Food = () => {
    const [food,setfood] = useState(data);

    const Filterfood = (cate)=>{
        setfood(
          data.filter((item)=>{
            return item.category === cate; 
          })
        )
    }
    const Filterprice = (cate)=>{
        setfood(
          data.filter((item)=>{
            return item.price === cate; 
          })
        )
    }

  return (
    <div className='mx-w-[1640px] mx-auto py-8 px-24'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-orange-600'>Top Rated Menu Items</h1>

        {/* //Filter rows */}
        <div className='flex flex-col lg:flex-row justify-between max-w-[1200px] mt-3'>
            <div> 
              <h1 className='font-bold'>Filter Type</h1>
              <div className='flex justify-between flex-wrap'>
                <button className='m-1 text-orange-600  px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    setfood(data);
                }}>All</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterfood('burger')
                }}>Burgers</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                   Filterfood('pizza')
                }}>Pizzas</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterfood('salad')
                }}>Salads</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterfood('chicken')
                }}>Chicken</button>
              </div>
            </div>
         <div>
            <h1 className='font-bold'>Filter Price</h1>
            <div className='flex flex-wrap max-w-[390px] w-full'>
                <button className='m-1 text-orange-600  px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterprice('$')
                }}>$</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterprice('$$')
                }}>$$</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterprice('$$$')
                }}>$$$</button>
                <button className='m-1 text-orange-600 px-3 p-1 border rounded-xl border-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>{
                    Filterprice('$$$$')
                }}>$$$$</button>
               
            </div>
         </div>
    
        </div>

        
        {/* Showing Data  */}

        <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6'>
        {
            food.map(item=>{
                return(
                <div key={item.id} className='shadow-lg rounded-lg hover:scale-105 duration-500'>
                   <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                   <div className='flex justify-between px-2 py-4'>
                     <p className='font-bold'>{item.name}</p>
                    <p className='p1'>
                        <span className='bg-orange-500 rounded-full p-1'>{item.price}</span>
                    </p>
                   </div>
                </div>
                );
            })
        }

</div>
       
      
    </div>
  )
}

export default Food
