import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import BgVideo from "../Assets/mixkit-night-sky-covered-with-stars-39768-hd-ready.mp4";
import GetColor from "../GetColor";
import { useSelector } from "react-redux";

function Navbar() {
  const [sideNav, setSideNav] = useState(false);
  const Color=GetColor(useSelector(state=>state.theme));
  const options = [
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Acheivements", path: "#achievements" },
    { name: "Profiles ", path: "#profiles" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div className={`fixed flex flex-row  shadow-2xl ${Color.shadow_light_color} ${Color.navbar_bg_color}  items-center py-4 px-[4vw] w-full  z-10 `}>
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-[100%] h-[100%] object-fill -z-10"
      >
        <source src={BgVideo} type="video/mp4" />
        
      </video> */}
      <div className="self-start flex ">
        <a href="#homepage" className="md:text-2xl cursor-pointer text-lg  font-bold">Revanth</a>
      </div>
      <div className="hidden lg:flex flex-row flex-1 items-center justify-end ">
        {options.map((item, index) => {
          return (
            <div key={index} className="mx-10 w-[50px] items-center flex justify-center">
              <a href={item.path} className={` font-semibold hover:underline hover:underline-offset-4  hover:${Color.hover_text_color} hover:text-lg`}>{item.name}</a>
            </div>
          );
        })}
      </div>

      {sideNav ? (
        <SideNavBar options={options} setSideNav={setSideNav} />
      ) : (
        <div className="self-center flex flex-row flex-1 justify-end items-center lg:hidden ">
          <GiHamburgerMenu
            className="text-2xl font-bold"
            onClick={() => {
              setSideNav(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
function SideNavBar({ options , setSideNav}) {
  const Color=GetColor(useSelector(state=>state.theme));
  return (
    <div className="absolute lg:hidden right-0 top-0 ">
      <div className="relative flex flex-col   h-screen   items-center ">
        <div className={`lex-row justify-between items-center py-5  px-10   ${Color.small_navbar_bg_color}  flex w-full`}>
          <a href="#homepage" className="md:text-2xl cursor-pointer text-lg  mr-7  font-bold">Revanth</a>
          <IoClose className=" md:text-2xl text-lg font-bold" onClick={()=>{setSideNav(false)}} />
        </div>
        <div className={`flex flex-col py-7 px-20 flex-1 items-start opacity ${Color.navbar_bg_color} opacity-[0.95] `}>
          {options.map((item, index) => {
            return (
              <div key={index} className="my-5 h-[50px] items-center opacity-100 flex cursor-pointer justify-center">
                <a href={item.path} className={`font-semibold text-start text-base md:text-lg hover:underline hover:underline-offset-4  hover:${Color.hover_text_color} `}>{item.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
