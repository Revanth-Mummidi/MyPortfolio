import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  const options = [
    { name: "About Me", path: "#homepage" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Acheivements", path: "#achievements" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div className="fixed flex flex-row  bg-slate-950  items-center py-4 px-7 w-full  z-10 ">
      <div className="self-start flex ">
        <h1 className="md:text-2xl text-lg text-white  font-bold">Revanth</h1>
      </div>
      <div className="hidden lg:flex flex-row flex-1 items-center justify-end ">
        {options.map((item, index) => {
          return (
            <div key={index} className="mx-10">
              <a href={item.path} className="text-white">{item.name}</a>
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
      <div className="relative flex flex-col  bg-slate-800 h-screen   items-center  w-full">
        <div className="flex-row justify-center items-center py-5 px-4   bg-slate-500  flex w-full">
          <h1 className="md:text-2xl text-lg text-white mr-7  font-bold">Revanth</h1>
          <IoClose className="text-white md:text-2xl text-lg font-bold" onClick={()=>{setSideNav(false)}} />
        </div>
        <div className="flex flex-col py-7 flex-1 items-start opacity-[0.9]  ">
          {options.map((item, index) => {
            return (
              <div key={index} className="my-5 ">
                <a href={item.path} className="text-white text-start text-sm md:text-base">{item.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
