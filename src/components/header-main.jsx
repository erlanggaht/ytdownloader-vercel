import React from 'react'

function HeaderMain({darkMode}) {
  return (
    <>
       <div className="headerMain text-center flex flex-col items-center ">
          <div className="imageLogo">
            <img src="https://img.icons8.com/wired/128/0ea5e9/youtube--v1.png" alt="logoyoutube"/>
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
