import React, { useDebugValue, useEffect, useState } from 'react'
import ProfilePic from "../Assets/ProfilePic-photoaidcom-cropped.jpg"

function HomePage() {
  const Abilities=["Full Stack Web Developer","React Native Developer","Competitive Programmer"];
  const [idx,setIdx]=useState(0);

   setTimeout(()=>{
      setIdx((idx+1)%Abilities.length);
   },[2000])
  
  

  return (
    <section className='bg-slate-700 mt-[60px] h-[70vh] w-[100vw] text-white justify-center items-center py-5' id='homepage'>
            <div className='grid  grid-cols-1 md:grid-cols-2 h-full w-full '>
                <div className='flex flex-1 flex-row items-center justify-center'>
                    <div>

                    <LeftContent/>
                    </div>
                </div>
                <div className='flex flex-1 flex-col items-center justify-center  text-center md:text-start'>
                    <div className='flex flex-col gap-3 lg:gap-6' >
                        <p className='font-sans font-semibold  text-[30px]  lg:text-[40px]'>Hello , I'm </p>
                        <p className='font-sans font-semibold text-[40px]  lg:text-[50px] text-orange-300 '>Revanth Mummidi</p>
                        <p className='font-sans font-semibold mt-3 text-[20px] lg:text-[30px] '>{Abilities[idx]}</p>
                        <div className='flex flex-row mt-5 gap-5 justify-center md:justify-start items-center  '>
                            <CustomButton content={"Hire Me"}  />
                            <CustomButton content={"Resume"}/>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
function LeftContent(){
    const [rotate,setRotate]=useState(false);
    return(
        <div  className=" self-center  flip-card hover:animate-pulse ">

        <div onClick={()=>{
       setRotate(!rotate);
       // console.log(rotate);
     }}  className={!rotate?"flip-card-inner flip-card-rotate":"flip-card-inner"}>
       <img
         src={ProfilePic}
         className={
           "bg-gradient-to-bl flip-card-front shadow-2xl shadow-black  from-[#051A91] via-[#061C93] via-[#2284F1] to-[#1F80EB] rounded-full w-[300px] md:w-[300px] aspect-square mx-auto  justify-center items-center transition-transform delay-700"
         }
       >
    
       
       </img>
       <div
         className={
          
             " flip-card-back  shadow-2xl shadow-black bg-gradient-to-bl from-[#071844] via-[#071844] via-[#2D87B6] to-[#2D87B6] p-10 rounded-full w-[300px] md:w-[300px] aspect-square mx-auto  justify-center items-center transition-transform delay-700"
         }
       >
         <div className="w-full h-full relative flex flex-col ">

          
           <p className="text-white font-bold text-3xl my-auto ">
          
           </p>
          
         </div>
       </div>
       </div>
       
       </div>
    )
}
function CustomButton({content}){
    return(
        <div className='cursor-pointer bg-violet-800 px-8 py-3 rounded-lg shadow-2xl shadow-black hover:animate-bounce'>
            <p>{content}</p>
        </div>
    )
}



export default HomePage