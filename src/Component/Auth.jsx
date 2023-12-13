import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function Auth() {
  return (
    <div>
    <button className='gap-2  flex justify-center items-center transition duration-100 ' >
    {/* font-semibold gap-2 w-full h-11 rounded-md shadow-md   text-white text-sm  bg-red-600 hover:bg-red-700 transition duration-100 active:bg-red-800' */}
        <FcGoogle className=''/>
        <div 
         className='text-1xl' >Google</div>
                       
      </button>
      
    </div>
  )
}
