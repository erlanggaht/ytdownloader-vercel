import React, { useEffect } from 'react'
import { About, Home } from './icon'

export default function Navbar({darkMode,setDarkMode}) {

  function darkModes(e) {
    e.preventDefault()
    setDarkMode(darkMode ? false : true)

   
  }
  useEffect(()=>{
      localStorage.setItem('darkmode',darkMode ? true : false)
    
  },[darkMode])

  return (
    <div id='navbar' className="flex flex-row justify-between items-center text-md mb-6 mt-2">
        <div className={`navbar-left text-sky-500 sm:text-sky-500  uppercase text-1xl flex gap-3 ${darkMode ? 'text-slate-50' : "text-sky-500"} `}>
        <a href='/youtdownload' className='hover:text-sky-800'><span><Home/></span></a>
        <a href='/youtdownload' className='hover:text-sky-800'><span><About/></span></a>
        </div>
    <span className='navbar-right cursor-pointer bg-sky-500 p-2 rounded-sm  text-slate-50 hover:bg-sky-700' onClick={(e)=>darkModes(e)}>{darkMode ? "LightMode" : "DarkMode"}</span>
    </div>
  )
}
