import React from 'react'

export default function News() {
  return (
    <div className=' w-full py-15 text-white'>
        <div className='max-w-[1240] mx-auto grid sm:grid-cols-2 grid-cols-1 my-20 '>

           <div className='mx-auto gl:col-span-2' >
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold '>Want Tips and Tricks to optimize your flow?</h1>
                <p className='text-[#00df9a] md:text-2xl sm:text-xl text-l pt-3'>Join our newspaper to get notified</p>
           </div>

            <div>
                <div className=' mx-auto flex flex-col sm:flex-row w-full justify-center items-center my-5  '> 
                    <input type={'text'} placeholder={'  Enter Your Email'} className={'rounded-md w-60  py-3 text-xl'} />
                    <button className='bg-[#00df9a] w-[200px] mx-4  my-3 py-3 rounded-md font-medium text-sm md:text-xl text-black'>NOTIFY ME!</button>
                </div>
                <p className=''>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span>.</p>
            </div>
            
           

        </div>
    </div>
  )
}
