import React from 'react';
import Typed from 'react-typed';

function First() {
  return (
    <div className='text-white' >
      <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] p-2 font-bold md:text-3xl sm:text-2xl text-l'>Sample Head</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold m-2 py-2'>Sample Site Title </h1>
        <div className='flex justify-center items-center '>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Somthing to re-type here </p>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={['One', 'Two', 'Three']} typeSpeed={100} backSpeed={120} loop />
        </div>
        <p className='md:text-xl text-l font-bold mt-2 text-gray-500'>Developed by AMIR-H</p>
        <button className='bg-[#00df9a] w-[200px] mx-auto my-7 py-4 rounded-md font-bold text-xl text-black'>GET STARTED</button>
      </div>
    </div>
  )
}

export default First;
