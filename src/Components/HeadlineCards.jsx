import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-24 py-10 grid md:grid-cols-3 gap-6">
        <div className="relative rounded-xl">
          <div className=" text-white bg-black/40 absolute w-full h-full rounded-xl">
            <h1 className="font-bold px-2 pt-4 text-2xl lg:text-4xl">Sun's Out BOGO'S out</h1>
            <p className="px-3 ">Through 8/26</p>
            <button className="text-black border-white bg-white mx-2 absolute bottom-4 rounded-lg p-1 px-3 hover:bg-orange-600 hover:text-white">
              Order Now   
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          />
        </div>
        <div className="relative rounded-xl">
          <div className=" text-white bg-black/40 absolute w-full h-full rounded-xl">
            <h1 className="font-bold px-2 pt-4 text-2xl lg:text-4xl">Sun's Out BOGO'S out</h1>
            <p className="px-3 ">Through 8/26</p>
            <button className="text-black border-white bg-white mx-2 absolute bottom-4 rounded-lg p-1 px-3  hover:bg-orange-600 hover:text-white">
              Order Now   
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          />
        </div>
        <div className="relative rounded-xl">
          <div className=" text-white bg-black/40 absolute w-full h-full rounded-xl">
            <h1 className="font-bold px-2 pt-4 text-2xl lg:text-4xl">Sun's Out BOGO'S out</h1>
            <p className="px-3 ">Through 8/26</p>
            <button className="text-black border-white bg-white mx-2 absolute bottom-4 rounded-lg p-1 px-3  hover:bg-orange-600 hover:text-white">
              Order Now   
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/1362044/pexels-photo-1362044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          />
        </div>
    </div>
  );
};

export default HeadlineCards;
