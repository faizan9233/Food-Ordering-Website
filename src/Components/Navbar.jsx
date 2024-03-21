import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoHelpCircleSharp } from "react-icons/io5";
import { BsFillSave2Fill } from "react-icons/bs";
import { FcInvite } from "react-icons/fc";
const Navbar = () => {
    const [nav,Setnav] = useState(false);
    const [btnstate, setbtnstate] = useState(false);
    const Toggle=() =>{
        setbtnstate(!btnstate);
    }
  return (
    <div className="max-w-[1640px] mx-auto p-4 flex items-center justify-between">
        {/* left side */}
      <div className="flex items-center justify-between gap-3">
        <div onClick={()=> Setnav(!nav)}>
          {!nav ? <AiOutlineMenu size={30}/> : ''} 
        </div>
        <div>
            <h1 className="font-bold text-xl sm:text-2xl">
                Best <span className="text-orange-600">Eats</span>
            </h1>
        </div>
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]">
           <button onClick={()=>{
            setbtnstate(true);
           }}> <p className={btnstate ? "bg-black text-white rounded-full p-2 duration-500": "rounded-full p-2 duration-500"}>Deliver</p> </button>
           <button onClick={()=>{
            setbtnstate(false)
           }}> <p className={!btnstate ? "bg-black text-white rounded-full p-2 duration-500" : " rounded-full p-2 duration-500"  }>Pickup</p> 
           </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex justify-between items-center gap-2">
        <div className="flex bg-gray-300 p-3 rounded-full items-center justify-center w-[180px] sm:w-[300px] md:w-[500px] lg:w-[600px]">
            <CiSearch size={20}className="mr-3"/>
            <input type="text" placeholder="Search Food.." className="bg-transparent focus:outline-none w-full " />
      </div>
      </div>
    
      
      <div className="flex items-center justify-center bg-black text-white p-2 rounded-full px-4 ">
        <FaCartShopping className="mr-2"/>
        <button>Cart</button>
      </div>
      
    {
       nav &&  <div className="h-screen fixed top-0 bottom-0 left-0 w-full bg-black/60">
        </div>
    }
    {/* //Mobile bar */}
    <div className={nav ? "fixed z-10 h-screen left-0 top-0 w-[300px] shadow:lg bg-white " : "fixed  h-screen left-[-100%] top-0 w-[15%] shadow:lg bg-white z-10"}>
        <div>
            <h1 className="font-bold text-2xl p-4">
                Best <span className="text-orange-600">Eats</span>
            </h1>
           {nav && <IoCloseSharp size={30} className="absolute top-4 right-4" onClick={()=> Setnav(false)}/>} 
        </div>
        <div className="flex items-center p-4 gap-2 mt-5">
            <CiDeliveryTruck  size={20}/>
            <ul>
                <li className=" text-2xl">Orders</li>
            </ul>
        </div>
        <div className="flex items-center p-4 gap-2">
            <FaHeart  size={20}/>
            <ul>
                <li className=" text-2xl">Favourite</li>
            </ul>
        </div>
        <div className="flex items-center p-4 gap-2">
            <FaWallet  size={20}/>
            <ul>
                <li className=" text-2xl">Wallet</li>
            </ul>
        </div>
        <div className="flex items-center p-4 gap-2">
            <IoHelpCircleSharp  size={20}/>
            <ul>
                <li className=" text-2xl">Help</li>
            </ul>
        </div>
        <div className="flex items-center p-4 gap-2">
            <BsFillSave2Fill  size={20}/>
            <ul>
                <li className=" text-2xl">Best ones</li>
            </ul>
        </div>
        <div className="flex items-center p-4 gap-2">
            <FcInvite  size={20}/>
            <ul>
                <li className=" text-2xl">Invite Friends</li>
            </ul>
        </div>
    </div>
     
    </div>
    
  );
};

export default Navbar;
