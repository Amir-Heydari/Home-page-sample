import React from 'react'
import Laptop from '../assets/Laptop.jpg'
export default function Second() {
  return (
    <div className=' bg-white py-20 px-5 w-full'>
      <div className='w-max-[1240] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='a' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold uppercase '>Full option and easy learning dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Manage your data easily</h1>
          <p className='md:text-2xl sm:text-xl text-l font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolorem veniam atque, corporis quod cupiditate,
           voluptatum neque nulla velit natus, eos reprehenderit quam debitis alias!
            Numquam velit voluptatum accusamus hic inventore!</p>
            <button className='bg-black w-[200px] mx-auto my-7 py-4 rounded-md font-bold text-xl text-[#00df9a]'>GET STARTED</button>
        </div>
      </div>
    </div>
  )
}
