import React from 'react'
import logoYoutube from '../aset/logoYoutube.png'

function HeaderMain({darkMode}) {
  return (
    <>
       <div className="headerMain text-center flex flex-col items-center ">
          <div className="imageLogo">
            <img src={logoYoutube} alt="logoyoutube"/>
          </div>
          <div className="title mt-2">
            <h1 className={`text-3xl sm:text-3xl text-slate-800  ${darkMode ? 'textDark' : ""}`}>
              Unduh Video Youtube 
            </h1>
            <span className={`text-2xl text-slate-800 ${darkMode ? 'textDark' : ""}`}>Gratis. <strong className='text-sky-500'>Mudah!</strong></span>
          </div>
        </div>
    </>
  )
}

export default HeaderMain
