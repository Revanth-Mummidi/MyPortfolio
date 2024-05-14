
import EHLogo from "../Assets/1630615940866.jpeg"
import HyggexLogo from "../Assets/hyggexworld_logo.jpeg"
import React, { useState } from "react";

function Experience() {
 
  const ExperienceData=[
  {
     name:"Hyggex",
     path:HyggexLogo,
     role:"React JS Intern",
     duration:"-",
     location:"Remote",
     started:"Sep 2023",
     ended:"Present",
     description:( <p>In this internship I am currently working as a front end developer.I have completed Self Assessment Screens and integrated with <b> Api</b> .<br/> I also learn't about <b>Redux</b> and used Redux in the website.</p>),
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

  return (
    <section
      id="experience"
      className="min-h-[100vh] w-[100vw] bg-slate-700 flex flex-col items-center justify-center p-10"
    >
      <p className="text-[35px] my-10 md:text-[40px] font-bold text-white ">
        Experience
      </p>
      <div className="border-gray-300 bg-gray-900 shadow-black shadow-2xl border border-l-2 rounded-lg   items-center justify-center flex">
        <div className="sm:grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 px-5 md:px-10 py-10 gap-x-6 gap-y-2 items-center justify-center">
          {
            ExperienceData.map((data,index)=>{
              return(
                <Card key={index} data={data}/>
              )
            })
          }          
        </div>
      </div>
    </section>
  );
}

const Card = ({data}) => {
  const [rotate, setRotate] = useState(true);
  return (
    <div className="flip-card mx-auto my-8">
      <div
        onClick={() => {
          setRotate(!rotate);
        }}
        className={
          !rotate ? "flip-card-inner flip-card-rotate" : "flip-card-inner"
        }
      >
        <div className="lg:w-[520px] xl:w-[570px] sm:w-[400px] w-[300px]  shadow-2xl shadow-black flip-card-front aspect-video right-0 border-slate-700  border bg-slate-800 rounded-xl ">
          <FrontCard data={data} />
        </div>
        <div className="lg:w-[520px] xl:w-[570px]  sm:w-[400px] w-[300px] shadow-2xl shadow-black flip-card-back aspect-video right-0 border-slate-800 border  bg-slate-700 rounded-xl ">
          <BackCard data={data} />
        </div>
      </div>
    </div>
  );
};

const FrontCard = ({data}) => {
  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          {/* <div className="w-[50px] md:w-[80px] aspect-video bg-blue-900 rounded-lg"></div> */}
          <img src={data.path} className="w-[50px] md:w-[80px]  rounded-lg object-cover object-center" ></img>
          <p className="text-white font-semibold text-lg md:text-2xl">{data.name}</p>
        </div>
        <hr className="my-3"></hr>
        <div className="flex flex-col text-white font-normal justify-center flex-1 ">
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
  return (
    <div className="p-4 w-full h-full overflow-y-auto ">
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        
        <p className="text-white font-semibold text-lg md:text-2xl">Description</p>
      </div>
      <hr className="my-3"></hr>
      <div className="flex flex-col text-white font-normal justify-start flex-1 pb-2 ">
         {data.description}
      </div>
    </div>
  </div>);
};

export default Experience;
