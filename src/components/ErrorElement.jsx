import React from 'react'

export default function ErrorElement() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-white group cursor-not-allowed '>
       <h1 className='text-red-600 text-6xl text-center font-bold uppercase rotate-12 group-hover:rotate-0 transition-all delay-200 '>Page <span className='text-[#3F3D56] underline group-hover:no-underline transition-all'>not</span> Found</h1>
       <p><img src={require('../aset/image-error.png')} alt='ilastratorError' width={500} height={500} className=" mt-4 transition-all delay-200 rotate-12 group-hover:rotate-0"/></p>
    </div>
  )
}
