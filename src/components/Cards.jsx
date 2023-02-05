import React from 'react'
import Single from '../assets/Single.png'
import Partnership from '../assets/Partnership.jpg'
import Group from '../assets/Group.jpg'

export default function Cards() {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
      <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl felx flex-col p-4 my-5 rounded-lg hover:scale-110 duration-300'>
                    <img src={Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold py-3 text-center'>Single User</h2>
                    <p className='text-4xl font-bold text-center text-[#00df9a]'>150$</p>
                    <div className='text-center font-medium'>
                       <p className='text-lg py-2 border-b mx-8 mt-8'>Up to 500GB Storage</p>
                       <p className='text-lg py-2 border-b mx-8'>One Granted User</p>
                       <p className='text-lg py-2 border-b mx-8'>Send Up To 2GB</p> 
                    </div>
                    <button className='bg-black w-[200px] mx-[32%] my-6 py-4 rounded-md font-bold text-xl text-[#00df9a]'>START TRIAL</button>
                </div>



                <div className='w-full bg-gray-200 shadow-xl felx flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-110 duration-300'>
                    <img src={Partnership} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold py-3 text-center'>Partnership</h2>
                    <p className='text-4xl font-bold text-center text-[#00df9a]'>300$</p>
                    <div className='text-center font-medium'>
                       <p className='text-lg py-2 border-b border-gray-500 mx-8 mt-8'>Up to 1TB Storage</p>
                       <p className='text-lg py-2 border-b border-gray-500  mx-8'>Two Granted User</p>
                       <p className='text-lg py-2 border-b border-gray-500  mx-8'>Send Up To 5GB</p> 
                    </div>
                    <button className='bg-[#00df9a] w-[200px] mx-[32%] my-6 py-4 rounded-md font-bold text-xl text-black'>START TRIAL</button>
                </div>


                 <div className='w-full shadow-xl felx flex-col p-4 my-5 rounded-lg hover:scale-110 duration-300'>
                    <img src={Group} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold py-3 text-center'>Group</h2>
                    <p className='text-4xl font-bold text-center text-[#00df9a]'>450$</p>
                    <div className='text-center font-medium'>
                       <p className='text-lg py-2 border-b mx-8 mt-8'>Up to 5TB Storage</p>
                       <p className='text-lg py-2 border-b mx-8'>10 Granted User</p>
                       <p className='text-lg py-2 border-b mx-8'>Send Up To 10GB</p> 
                    </div>
                    <button className='bg-black w-[200px] mx-[32%] my-6 py-4 rounded-md font-bold text-xl text-[#00df9a]'>START TRIAL</button>
                </div>
      </div>
    </div>
  )
}
