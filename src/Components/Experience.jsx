
import EHLogo from "../Assets/1630615940866.jpeg"
import HyggexLogo from "../Assets/hyggexworld_logo.jpeg"
import HackerEarth from "../Assets/HE_identity.png";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import InncirclesArenaLogo from "../Assets/inncirclesarena_logo.jpeg";
import GetColor from "../GetColor";
import { useSelector } from "react-redux";
import StarsBackground from "../common/StarsBackground";

function Experience() {
  const Color= GetColor(useSelector(state=>state.theme));
 
  const ExperienceData=[
    {
      name:"Inncircles",
      path:InncirclesArenaLogo,
      role:"Product Developer Intern",
      duration:"-",
      location:"Remote",
      started:"Aug 2024",
      ended:"Working Currently",
      description:( <p>Worked with MongoDB, Express, Node.js, and AngularJS for web development, implementing complex
        aggregations and writing backend services for efficient data handling.<br/>
        • Contributed to Android development using React Native and created shared components like Search
        Component, Filter Pipe, and International Telephone Input.<br/>
        • Developed dynamic UI components and replicated the figma design for Inncirclest AI marketing website in
        NextJS. Implemented functionality to download data from the table through Excel files, ensuring
        improved usability and smooth integration.</p>),
   },
  {
     name:"Hyggex",
     path:HyggexLogo,
     role:"React JS Intern",
     duration:"3 months",
     location:"Remote",
     started:"Sep 2023",
     ended:"Jun 2024",
     description:( <p>In this internship I am currently working as a front end developer.<br/>I have completed Self Assessment Screens and Mock Test Screen and then integrated with <b> Api.</b> <br/> I also used <b>Redux</b> in the website. I made responsive designs using <b>Tailwind CSS</b></p>),
  },
  {
    name:"Evaluate Health",
    path:EHLogo,
    role:"React Native Intern",
    duration:"4 months",
    location:"Remote",
    started:"Sep 2023",
    ended:"Jan 2024",
    description:( <p>In this internship I worked as React Native developer.I have completed Calendar and Profile modules with complete functionalities and integrated with <b>Restful Api</b> .<br/> I also learn't about <b>Redux</b> and used Redux throught the app.<br/>I have also implemented <b>Pagination</b> to with stand large amount of data in Client side </p>),
 },
]
const VolunteerExperienceData=[
  {
     name:"Hacker Earth Lead",
     path:HackerEarth,
     role:"HECA",
     duration:"-",
     location:"VIIT",
     started:"Sep 2023",
     ended:"Still in the role",
     description:( <p>I worked as Hacker Earth Lead in our College.In which my responsbility is to improve coding culture in our college.<br/>As a part of it I worked as a problem setter for weekly coding contest with average participation of <b>500+</b> students. <br></br>I also conducted a national wide coding contest Code-Sprint as a part of Vista Technical Event in our College with nearly <b>400</b> participants. We also conducted seminars to junios on Competitve Coding.</p>),
  },
 
]
  return (
    <section
      id="experience"
      className={` ${Color.text_color1} w-[100vw] relative  flex flex-col items-center justify-center p-10`}
    >

      <p className="text-[35px] my-10 md:text-[40px] font-bold  ">
        Experience
      </p>
      <div className={`${Color.border_color1} ${Color.text_color} w-[90vw] ${Color.card_bg_color} ${Color.shadow_color} shadow-2xl relative overflow-hidden
      border border-l-2 rounded-lg   items-center justify-center flex flex-col`}>
      <div className="z-0 "> 
          <StarsBackground/>
      </div>
     
        <p className=" text-3xl mt-10 font-semibold">Intern Experience</p>
        <div className="sm:grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2  px-5 md:px-10 py-10 gap-x-12 gap-y-2 items-center justify-center">
        <Fade left duration={1500}>
          {
            ExperienceData.map((data,index)=>{
              return(
                <Card key={index} data={data}/>
              )
            })
          }    
          </Fade>      
        </div>
       <div className={`flex flex-row w-full border ${Color.border_white}`}>

       </div>
        <p className=" text-3xl mt-10 font-semibold">Volunteer Experience</p>
        <Fade left duration={1500}>
        <div className="flex flex-row items-center justify-center">
          
          {
            VolunteerExperienceData.map((data,index)=>{
              return(
                <Card key={index} data={data}/>
              )
            })
          }          
        </div>
        </Fade>
      </div>
      <p className="text-[20px] md:text-[30px] font-semibold mt-10  text-center">
      Click on the card to check the description
      </p>
    </section>
  );
}

const Card = ({data}) => {
  const [rotate, setRotate] = useState(true);
  
  const Color= GetColor(useSelector(state=>state.theme));
  
  return (
     
    <div className="flip-card cursor-pointer mx-auto my-8">
      <div
        onClick={() => {
          setRotate(!rotate);
        }}
        className={
          !rotate ? "flip-card-inner flip-card-rotate" : "flip-card-inner"
        }
      >

        <div className={`lg:w-[520px] xl:w-[500px]  sm:w-[400px]  w-[280px] shadow-2xl ${Color.shadow_color} flip-card-front aspect-video right-0 ${Color.border_color2}  border bg-gradient-to-l ${Color.gradient_colors1} rounded-xl `}>
          <FrontCard data={data} />
        </div>
        <div className={`lg:w-[520px] xl:w-[500px]  sm:w-[400px] w-[280px] shadow-2xl ${Color.shadow_color} flip-card-back aspect-video right-0 ${Color.border_color2} border  ${Color.background_color} rounded-xl `}>
          <BackCard data={data} />
        </div>
      </div>
    </div>
   
  );
};

const FrontCard = ({data}) => {
  return (
    <div className="p-4 cursor-pointer w-full h-[270px] lg:h-full overflow-y-scroll no-scrollbar flex">
      <div className="w-full h-full flex flex-col ">
        <div className="flex flex-row justify-between items-center">
          {/* <div className="w-[50px] md:w-[80px] aspect-video bg-blue-900 rounded-lg"></div> */}
          <img src={data.path} className="w-[50px] md:w-[80px]  rounded-lg object-cover object-center" ></img>
          <p className=" font-semibold text-lg md:text-2xl">{data.name}</p>
        </div>
        <hr className="my-3"></hr>
        <div className="flex flex-col  font-normal justify-center flex-1 ">
           <div className="flex flex-row justify-between ">
              <p>Role :-</p>
              <p>{data.role}</p>
           </div>
           <div className="flex flex-row justify-between ">
              <p>Worked for :-</p>
              <p>{data.duration}</p>
           </div>
           <div className="flex flex-row justify-between">
              <p>Location :-</p>
              <p>{data.location}</p>
           </div>
           <div className="flex flex-row justify-between ">
              <p>Started :-</p>
              <p>{data.started}</p>
           </div>
           <div className="flex flex-row justify-between">
              <p>Ended :-</p>
              <p>{data.ended}</p>
           </div>
        </div>
      </div>
    </div>
  );
};
const BackCard = ({data}) => {
  const Color = GetColor(useSelector(state=>state.theme));
  return (
    <div className={`${Color.text_color1}  p-4 cursor-pointer w-full h-[270px] lg:h-full overflow-y-auto no-scrollbar flex `}>
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row justify-center items-center">
        
        <p className="font-semibold text-lg md:text-2xl">Description</p>
      </div>
      <hr className="my-3 text-black "></hr>
      <div className="flex flex-col  font-normal justify-start flex-1 pb-2 ">
         {data.description}
      </div>
    </div>
  </div>);
};

export default Experience;
