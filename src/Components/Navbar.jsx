import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  const options = [
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Acheivements", path: "#achievements" },
    { name: "Profiles ", path: "#profiles" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div className="fixed flex flex-row  bg-slate-950  items-center py-4 px-7 w-full  z-10 ">
      <div className="self-start flex ">
        <a href="#homepage" className="md:text-2xl cursor-pointer text-lg text-white  font-bold">Revanth</a>
      </div>
      <div className="hidden lg:flex flex-row flex-1 items-center justify-end ">
        {options.map((item, index) => {
          return (
            <div key={index} className="mx-10 w-[50px] items-center flex justify-center">
              <a href={item.path} className="text-white font-semibold hover:underline hover:underline-offset-4  hover:text-slate-300 hover:text-lg">{item.name}</a>
            </div>
          );
        })}
      </div>

      {sideNav ? (
        <SideNavBar options={options} setSideNav={setSideNav} />
      ) : (
        <div className="self-center flex flex-row flex-1 justify-end items-center lg:hidden ">
          <GiHamburgerMenu
            className="text-white text-2xl font-bold"
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
  return (
    <div className="absolute lg:hidden right-0 top-0 ">
      <div className="relative flex flex-col  bg-slate-800 h-screen   items-center ">
        <div className="flex-row justify-center items-center py-5 px-4   bg-slate-500  flex w-full">
          <a href="#homepage" className="md:text-2xl cursor-pointer text-lg text-white mr-7  font-bold">Revanth</a>
          <IoClose className="text-white md:text-2xl text-lg font-bold" onClick={()=>{setSideNav(false)}} />
        </div>
        <div className="flex flex-col py-7 flex-1 items-start opacity-[0.9]  ">
          {options.map((item, index) => {
            return (
              <div key={index} className="my-5 h-[50px] items-center flex cursor-pointer justify-center">
                <a href={item.path} className="text-white text-start text-sm md:text-base hover:underline hover:underline-offset-4  hover:text-slate-300 ">{item.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
