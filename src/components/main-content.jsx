import React, {  useEffect, useReducer, useState } from "react";
import axios from "axios";
import "../index.css";
import IconDownload, { ChevRon, CloseIcon, DesktopIcon, MobileIcon } from "./icon";
import {Link} from 'react-router-dom'
function MainContent({darkMode}) {
  
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [tutorView,setTutorView] = useState(false)
  const [tutorViewMobile,setTutorViewMobile] = useState(false)
  const [nullInput,setNullInput] = useState(false)
  const [undefinedInput,setUndefinedInput] = useState(false)
  const initialState = {};
  function reducer(state, action) {
    switch (action.type) {
      case "GETDATA":
        return {
          data:  action.payload.data,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  function GetApi() {
    if(!url) {
      setUndefinedInput(true)
      setTimeout(()=>{setUndefinedInput(false)},1500)
      return      
    } 
    setLoading(true);
    axios
      .get(`https://famous-visor-fox.cyclic.app/download?url=${url}`)
      .then((response) => {
        dispatch({ type: "GETDATA", payload: response });
        setLoading(false);
        setNullInput(false)
        document.querySelector('#root').removeAttribute('style') 

      })
      .catch((error) => {
        setLoading(false);
        setNullInput(true)
        return error;
      });
  };

  function HandleTutorial(){
    return (
      <>
      <div className="tutor fixed top-0 bottom-0 right-0 left-0 m-14 sm:m-24 bg-white text-sky-600 overflow-auto  sm:overflow-auto z-50 shadow-xl">
        <div className="close absolute top-4 right-4 left-4 flex gap-1 justify-between text-md" >
          <div className=" hidden sm:inline-flex"><ChevRon/><span className="text-slate-900">KlikTombol</span> ESC ( Close )  </div>
           <span onClick={()=>setTutorView(false)} className='cursor-pointer shadow-sm'><CloseIcon/></span></div>
        <div className="content-tutor sm:grid sm:grid-cols-2 flex flex-col items-center justify-center h-full mt-14 sm:mt-12 m-10 sm:m-12 sm:mt-4 p-2">
          <div>
            <img src={require('../aset/image-tutorial.png')} alt='ilustartorTutorial' className="sm:w-[480px] sm:h-[400px] h-[200px] w-[320px]" />
          </div>
          <div className="text-md sm:text-1xl capitalize text-slate-800">
        <p>1. Masukan url youtube.</p>
        <p>2. Klik download.</p>
        <p>3. Pilih format yang di inginkan.</p>
        <div>4. Untuk yang tidak langsung mungunduh. di browser : 
          <ul className=" mt-2 text-md sm:text-1xl uppercase pt-1 pb-1 sm:pb-0 sm:pb-0 ">
            <li className="sm:inline-block block text-center p-1 rounded-sm sm:rounded-none sm:p-2 m-1 bg-sky-600 mx-1 text-slate-100 hover:bg-sky-500 transition-colors hover:text-white "><Link to={`/cara-download/chrome`}>Chrome</Link></li>
            <li className="sm:inline-block block text-center p-1 rounded-sm sm:rounded-none sm:p-2 m-1 bg-sky-600 mx-1 text-slate-100 hover:bg-sky-500 transition-colors hover:text-white "><Link to={`/cara-download/firefox`}>Mozilla Firefox</Link></li>
           
          </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

  function HandleTutorialMobile(){
    return (
      <>
      <div className="tutor fixed top-0 bottom-0 right-0 left-0 m-14 sm:m-24 bg-white text-sky-600 overflow-auto  sm:overflow-auto z-50 shadow-xl">
        <div className="close absolute top-4 right-4 left-4 flex gap-1 justify-between text-md" >
          <div className=" hidden sm:inline-flex"><ChevRon/><span className="text-slate-900">KlikTombol</span> ESC ( Close )  </div>
           <span onClick={()=>setTutorViewMobile(false)} className='cursor-pointer shadow-sm'><CloseIcon/></span></div>
        <div className="content-tutor sm:grid sm:grid-cols-2 flex flex-col items-center justify-center h-full mt-14 sm:mt-12 m-10 sm:m-12 sm:mt-4 p-2">
          <div>
            <img src={require('../aset/image-tutorial-mobile.png')} alt='ilustartorTutorial' className="sm:w-[480px]  w-[320px]" />
          </div>
          <div className="text-md sm:text-1xl capitalize text-slate-800">
        <p>1. Masukan url youtube.</p>
        <p>2. Klik download.</p>
        <p>3. Pilih format yang di inginkan.</p>
        <p className="text-sm italic p-3">Noted : untuk user android biasanya langsung melakukan unduh</p>
        <div className="text-1xl">4. Untuk yang tidak langsung mungunduh. di browser : 
          <ul className=" mt-2 text-md sm:text-1xl uppercase pt-1 pb-1 sm:pb-0 sm:pb-0 ">

            <li className="sm:inline-block block text-center p-1 rounded-sm sm:rounded-none sm:p-2 m-1 bg-sky-600 mx-1 text-slate-100 hover:bg-sky-500 transition-colors hover:text-white "><Link to={`/cara-download/mobile-chrome`}>Semua Browser</Link></li>

            
          </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

  useEffect(()=>{
    
    if(tutorView || tutorViewMobile) {
      document.body.addEventListener('keyup',function(e){
        if(e.key === 'Escape') {
          setTutorView(false)
          setTutorViewMobile(false)
        }
      })
    }
 
  },[tutorView,tutorViewMobile])
 
  return (
    <>
    {tutorView ? <HandleTutorial/>
    : tutorViewMobile ? <HandleTutorialMobile/> : null}
   
      <div className="main-content my-8 text-center">
        <label htmlFor="demoTextBox">
          {" "}
         <span className="text-md">URL Youtube : </span>  <br />
          <input
            id="demoTextBox"
            type="text"
            placeholder="contoh : https://www.youtube.com/watch?v=AKbelTywKhs"
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button
          className={`buttonSubmit bg-sky-500  py-[10px] px-[18px] text-[1rem] ml-1 inline-flex flex-row relative text-slate-100 `}
          type="submit"
          onClick={() => GetApi()}
        >
          <span>{loading ? 'Please Wait' : "Download"}</span>{" "}
          {loading ? (
            <div className="spinner2 absolute -top-4 -right-7"></div>
          ) : null}
        </button><br/>
        <span className="mt-2 inline-block text-sky-400">{nullInput ? "Url Youtube tidak valid/kosong !" : undefinedInput ? "Input tidak boleh kosong, masukan URL!" : ""}</span>
      </div>
      <div>
              <div className="bg-slate-50 p-5 rounded-sm border border-solid border-slate-100 shadow-sm flex justify-between text-sm text-slate-700 ">
               <div>Cara Download  <span className="text-sky-500 text-md cursor-pointer" onClick={()=>setTutorView(true)}>Klik Disini</span></div>  <DesktopIcon/>
                </div>
                <div className="mt-2 bg-slate-50 p-5 rounded-sm border border-solid border-slate-100 shadow-sm flex justify-between text-sm text-slate-700">
               <div>Cara Download  <span className="text-sky-500 text-md cursor-pointer" onClick={()=>setTutorViewMobile(true)}>Klik Disini</span></div>  <MobileIcon/>
                </div>
                </div>
                  <div className="sm:grid sm:grid-cols-4 gap-7 flex flex-row flex-wrap ">
        {state.data &&
          state.data.info.map((m, i) => {
            return (
                <div
                  className="card bg-sky-500 text-slate-50 pt-3 pb-5 px-3 text-center sm:text-left text-lg sm:text-1xl w-full  sm:w-auto rounded shadow-md  hover:bg-sky-600 transition-colors cursor-pointer relative group"
                  key={i} onClick={()=> window.open(m.url,"_blank")}
                >
                  <IconDownload />
                  Format :<br />{" "}
                  <span className="text-white font-semibold uppercase">
                    {m.container}
                  </span>{" "}
                  <br />
                  <div className="mt-5">
                    Kualitas :<br />{" "}
                    <div className="text-white font-semibold sm:underline uppercase">
                      {m.quality} - {m.qualityLabel} 
                      
                    </div>{" "}<br/>
                    Size :<br />{" "}
                    <div className="text-white font-semibold  uppercase">
                      {m.contentLength === "notfound" ? "-" : Math.round(m.contentLength * 9.5367e-7)+" MB" } 
                      </div>
                  </div>
                </div>
            );
          })}
      </div>
    </>
  );
}

export default MainContent;
