import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import Profiles from "./Components/Profiles";
import { Fade } from "react-reveal";
import AnimatedCursor from "react-animated-cursor";

import BgVideo from "./Assets/mixkit-night-sky-covered-with-stars-39768-hd-ready.mp4"
import {  useDispatch, useSelector } from "react-redux";


import GetColor from "./GetColor";
import { setTheme } from "./Redux/ThemeSlice";

function App() {
  const {theme} =useSelector(state=>state.theme);
  const Color = GetColor(useSelector(state=>state.theme));
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(setTheme("Dark"));
  },[]);
  return (
   

  
    <div  className={` relative overflow-y-auto gap-0 ${Color.background_color} ${Color.text_color} w-full overflow-x-hidden  relative no-scrollbar `}>
       {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-[100%] h-[100%] object-fill -z-10"
      >
        <source src={BgVideo} type="video/mp4" />
        
      </video> */}
      <div className="cursor__dot hidden lg:block">
        <AnimatedCursor
         
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Navbar />
      <HomePage />
      <Fade bottom duration={1500} distance="150px">
        <Skills />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Experience />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Projects />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Achievements />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Profiles />
      </Fade>
      <Contact />
      <div onClick={()=>{
        if(theme!="Dark")
        dispatch(setTheme("Dark"));
        else
        dispatch(setTheme("Light"));
      }} className={`fixed top-36 right-10 hover:opacity-40  opacity-70 ${Color.navbar_bg_color} shadow-md ${Color.shadow_color} ${Color.border_color1} w-[73px] aspect-square flex items-center justify-center border text-white rounded-full p-5 `}>
         <p>{theme}</p>
      </div>
    </div>

  );
}

export default App;
