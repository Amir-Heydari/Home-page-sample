import React from 'react'
import {
    FaInstagram,
    FaTelegram,
    FaFacebook,
    FaTwitter,
    FaGithub
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-5 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] my-3'>LOGO</h1>
              <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iste maxime delectus numquam cum, aliquid, dicta totam vero saepe aspernatur et pariatur! Aut fugiat ducimus sequi veniam architecto saepe nobis?</p>
            <div className='flex justify-between  my-5'>
                <FaFacebook size={30} />
                <FaGithub size={30} />
                <FaInstagram size={30} />
                <FaTelegram size={30} />
                <FaTwitter size={30} />
            </div>
        </div>
        
        
        <div className='flex lg:col-span-2 justify-between mt-6'>
            <div>
                <h6 className='text-lg'>Solutions</h6>
                <ul>
                    <li className='text-gray-500 py-2'>One</li>
                    <li className='text-gray-500 py-2'>Two</li>
                    <li className='text-gray-500 py-2'>Four</li>
                    <li className='text-gray-500 py-2'>Five</li>
                </ul>
            </div>
            


            <div>
                <h6 className='text-lg'>Support</h6>
                <ul>
                    <li className='text-gray-500 py-2'>One</li>
                    <li className='text-gray-500 py-2'>Two</li>
                    <li className='text-gray-500 py-2'>Four</li>
                    <li className='text-gray-500 py-2'>Five</li>
                </ul>
            </div>




            <div>
                <h6 className='text-lg'>Company</h6>
                <ul>
                    <li className='text-gray-500 py-2'>One</li>
                    <li className='text-gray-500 py-2'>Two</li>
                    <li className='text-gray-500 py-2'>Four</li>
                    <li className='text-gray-500 py-2'>Five</li>
                </ul>
            </div>


            <div>
                <h6 className='text-lg'>Legal</h6>
                <ul>
                    <li className='text-gray-500 py-2'>One</li>
                    <li className='text-gray-500 py-2'>Two</li>
                    <li className='text-gray-500 py-2'>Four</li>
                    <li className='text-gray-500 py-2'>Five</li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}
