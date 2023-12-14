import React from 'react'
import { FiSearch } from 'react-icons/fi';

import { FaRocket } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";

export const Newsletter = () => {
  return (
    <div>
      <div>
      <h3 className='text-lg font-bold mb-2 items-center gap-2'>
      {/* <FaEnvelopeOpenText/> */}
      <SlEnvolopeLetter />
      Email me for jobs</h3>
      <p className='text-primary/75 text-base mb-4'>Put esse eiusmod aute. Sit enim dolre. Aute ea fugiat comondo as foes.</p>

      <div className='w-full space-y-4'>
            <input type="email" name="email" id="email" placeholder='name@email.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
            <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
      </div>
      </div>

      {/* 2nd part */}
      <div>
      <h3 className='text-lg font-bold mb-2 items-center gap-2'>
      {/* <FaRocket/> */}
      <FaRocket />
      Email me for jobs</h3>
      <p className='text-primary/75 text-base mb-4'>Put esse eiusmod aute. Sit enim dolre. Aute ea fugiat comondo as foes.</p>

      <div className='w-full space-y-4'>
            <input type="email" name="email" id="email" placeholder='name@email.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
            <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
      </div>
      </div>
      
      
    </div>
  )
}

export default Newsletter