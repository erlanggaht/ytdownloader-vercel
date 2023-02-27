import React from "react";
import { Link, useParams } from "react-router-dom";
import { Back } from "./icon";
import "../index.css";

function Figure({browser,idGambar}) {
  return (

  <>
    <figure className="">
      <img
        src={require(`../aset/imagesTutor/${browser}${idGambar}.PNG`)}
        width="150"
        className="shadow-lg rounded-md h-[100%]"
        alt="tutorial-download-foto"
      />
    </figure>
  </>
  )
}

export default function CaraDownload() {
  const { browser } = useParams();

  return (
    <>
      {browser === "chrome" ? (
        <Browser browser={browser} />
      ) : browser === "firefox" ? (
        <Browser browser={browser} />
      ) : null}
      {browser === "mobile-chrome" ? (
        <Browser browser={browser} />
      ) : browser === "mobile-safari" ? (
        <Browser browser={browser} />
      ) : null}
    </>
  );
}

function Browser({ browser }) {
  let incl = browser.includes("mobile");
  // function hiddenstrip() {
  //   if (incl) {
  //     let brow = Array.from(browser);
  //     brow[6] = " ";
  //     return brow;
  //   } else {
  //     return browser;
  //   }
  // }

  return (
    <div className="rootMe container relative mx-auto min-h-screen items-center flex items-center justify-center">
      <div className="absolute top-5 left-0 scale-[1.2] text-sky-500 hover:text-sky-800 transition-all cursor-pointer sm:inline hidden ">
        {" "}
        <Link to="/">
          {" "}
          <Back />
        </Link>{" "}
      </div>
      <div className="main bg-white shadow-sm p-8 sm:m-1 m-5">
        <h1 className="text-2xl sm:text-3xl uppercase text-center">
          Cara Download Di <span className="text-sky-500">{incl ? "Browser Mobile" : browser}</span>
        </h1>
        <div className="text-1xl capitalize text-sky-800 mt-3">
          <p>1. Masukan url youtube.</p>
          <p>2. Klik download.</p>
          <p>3. Pilih format yang di inginkan.</p>
          <p className="text-sm italic p-3">Noted : untuk user android biasanya langsung melakukan unduh</p>
          <div>
            4. Untuk yang tidak langsung mungunduh. di {incl ? "Browser Mobile" : browser} :
            <ul className=" mt-6 ">
              {incl ? (
                <div className="shadow-lg p-2 ">
                    <div className="my-3 p-2 text-slate-800">
                      <ol className="list-disc mx-5"><li> Copy Link URL Youtube</li>
                  <li> Paste url. klik download</li>
                  <li>Pilih Format Video</li>
                  <li>Cari Menu Download.</li>
                  <li> Simpan Video</li></ol>
                  
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <Figure browser={browser} idGambar={''}/>
                  <Figure browser={browser} idGambar={'1'}/>
                  <Figure browser={browser} idGambar={'2'}/>
                  <Figure browser={browser} idGambar={'3'}/>
                  <Figure browser={browser} idGambar={'4'}/>
                </div>
              
                </div>
              ) : (
                <img
                  src={require(`../aset/imagesTutor/${browser}.gif`)}
                  width="580"
                  className="shadow-lg rounded-md"
                  alt="tutorial-download-foto"
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
