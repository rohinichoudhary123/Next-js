"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const BannerSection = () => {
  const [model, setModel] = useState(false)
  return (
    <>
      <div
        className={`fixed duration-300 ${model ? "top-[50%]" : "top-[-1000px]"} left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px]`}
      >
        <form className="bg-white p-6 rounded shadow-md">
          {/* <h2 className="text-2xl font-bold relative mb-4">
            Enquired Now
            <button className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 " >
              <RxCross2 />
            </button>
          </h2> */}

          <div className=" flex  items-center justify-between">
            <h2 className="text-2xl font-bold  mb-4"> Enquired Now</h2>
            <button onClick={()=>setModel(false)} className=" text-black hover:text-gray-700 font-bold cursor-pointer focus:outline-none focus-ring-2 focus:right-gray-500 focus:ring-offset-2 "><RxCross2  size={23}/></button>
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md  shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md  shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              message
            </label>
            <textarea
              id="message"
              className="mt-1 resize-none block w-full border border-gray-300 rounded-md  shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring:2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      <section className='bg-[url("https://pinnacle-khaki.vercel.app/mediaFiles/Home%20page/Counter%20number/Hero%20section%20and%20logos/Frame%202095586641%201.webp")] bg-cover bg-center h-screen w-full'>
        <div className="max-w-[1280px] mx-auto h-full flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl text-white text-center font-bold">
            Live Above It All — The Pinnacle by <br />
            STJ Group, Mohali
          </h1>

          <p className="text-white text-center max-w-3xl">
            Standing tall at 36 floors, The Pinnacle offers panoramic views,
            futuristic engineering, and an elite lifestyle in the heart of Mohil
            booming urban landscape.
          </p>

          <button onClick={()=>setModel(true)} className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
