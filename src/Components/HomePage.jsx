import React, {  useState } from 'react'
import ProfilePic from "../Assets/ProfilePic-photoaidcom-cropped.jpg"
import { Fade } from 'react-reveal';
import Arrow from "../Assets/toppng.com-arrow-pointing-to-left-comments-curved-arrow-vector-980x858.png"

function HomePage() {
  const Abilities=["Full Stack Web Developer","React Native Developer","Competitive Programmer"];
  const [idx,setIdx]=useState(0);

   setTimeout(()=>{
      setIdx((idx+1)%Abilities.length);
   },[2000])
  
  

  return (
    <section className='bg-slate-700 mt-[60px] h-[100vh] w-[100vw] text-white justify-center items-center py-5 mb-10' id='homepage'>
         <Fade bottom duration="1500" distance="120px">

    
            <div className='grid  grid-cols-1 md:grid-cols-2 h-full w-full '>
                <div className='flex flex-1 flex-row items-center justify-center'>
                    <div className='flex  relative flex-col gap-5'>
                    <div className='mb-10 md:mb-0'>

                    <LeftContent/>
                    <p className='md:hidden text-[25px] text-center font-semibold '>Click to know about me ☝️</p>
                    </div>
                    <div className='absolute hidden md:block -top-10 -right-28 lg:-right-28 '>
                    <div className='flex flex-col gap-5 '>

                    <p className='font-semibold text-2xl md:text-3xl text-center'>Click here</p> 
                    <img src={Arrow} className='lg:w-16 w-14 aspect-video -rotate-12 mr-4 '></img>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-1 flex-col items-center justify-center  text-center md:text-start'>
                    <div className='flex flex-col gap-3 lg:gap-6' >
                        <p className='font-sans font-semibold  text-[30px]  lg:text-[40px]'>Hello , I'm </p>
                        <p className='font-sans font-semibold text-[40px]  lg:text-[50px] text-orange-300 '>Revanth Mummidi</p>
                        <p className='font-sans font-semibold mt-3 text-[20px] lg:text-[30px] '>{Abilities[idx]}</p>
                        <div className='flex flex-row mt-5 gap-5 justify-center md:justify-start items-center  '>
                           <a href={"mailto:mummidirevanth@gmail.com"}>
                             <CustomButton content={"Hire Me"}  />
                            </a>
                            <a href="https://drive.google.com/file/d/11EHZH1jkyQ8pb7w278LFrppHkgwJeqZD/view?usp=sharing">

                            <CustomButton content={"Resume"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
    </section>
  )
}
function LeftContent(){
    const [rotate,setRotate]=useState(true);
    return(
        <div  className=" self-center cursor-pointer flip-card hover:animate-pulse mb-10">

        <div onClick={()=>{
       setRotate(!rotate);
       // console.log(rotate);
     }}  className={!rotate?"flip-card-inner flip-card-rotate":"flip-card-inner"}>
       <img
         src={ProfilePic}
         className={
           "bg-gradient-to-bl flip-card-front shadow-2xl shadow-black   rounded-full w-[300px] lg:w-[400px] aspect-square mx-auto  justify-center items-center transition-transform delay-700"
         }
       >
    
       
       </img>
       <div
         className={
          
             " flip-card-back  shadow-2xl shadow-black  bg-gradient-to-bl from-slate-700 via-slate-600 via-slate-600 to-slate-900  p-10 rounded-full w-[300px] lg:w-[400px] aspect-square mx-auto  justify-center items-center transition-transform delay-700"
         }
       >
         <div className="w-full h-full  flex flex-col ">

          <p className='underline underline-offset-4 font-bold text-xl text-white text-center'>About me</p>
           <p className="text-white font-semibold   mt-4 overflow-y-auto no-scrollbar p-5 text-wrap">
            I'm a passionate full stack developer and also competitive programmer.
            I'm currently pursing B.Tech 3rd year at Vignan's Institute of Information technology.
            I have strong foundation in web development and also in Frontend Android Development.
            I'm eager to learn and work on projects.
           </p>
          
         </div>
       </div>
       </div>
       
       </div>
    )
}
function CustomButton({content}){
    return(
        <div className='cursor-pointer hover:opacity-[0.5] bg-gradient-to-l from-slate-700 via-slate-600 via-slate-600 to-slate-900 px-8 py-3 rounded-lg shadow-2xl shadow-black '>
            <p className='font-semibold text-lg'>{content}</p>
        </div>
    )
}



export default HomePage