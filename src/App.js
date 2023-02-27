import { useState } from "react";
import Footer from "./components/footer";
import HeaderMain from "./components/header-main";
import MainContent from "./components/main-content";
import Navbar from "./components/Navbar";

export default function App() {
  const darkgetter = sessionStorage.getItem('darkmode')
  const [darkMode,setDarkMode] = useState(darkgetter)


  return (
    <>
   
      <div className={`App ${darkMode ? 'dark textDark transition-colors' : "transition-colors"}`}>
        <div className={`container mx-auto p-2 px-12`}>
         
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center gap-6">
          <HeaderMain darkMode={darkMode} />
          <MainContent darkMode={darkMode}/>
          <Footer />
        </div>
      </div>
         
    </>
  );
}
