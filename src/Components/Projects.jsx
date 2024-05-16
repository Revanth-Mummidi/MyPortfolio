
import EHLogo from "../Assets/1630615940866.jpeg"
import HyggexLogo from "../Assets/hyggexworld_logo.jpeg"
import React, { useState } from "react";

function Projects() {
 
  const ProjectsData=[
  {
    name:"Fit Foods",
    tech:"React JS , Tailwind CSS",
    github:"",
    preview:"",
    description:(<p>It is website which helps users to give personalized food choices according to their health issues and allergies.
      It helps users to identify the foods which are suitable for their allergies or health issues and which are not.
      Users can store their health reports as well.
    </p>)
  },
  {
    name:"Craft Sale",
    tech:"React JS , Tailwind CSS , Mongo DB , NodeJs , ExpressJs",
    github:"",
    preview:"",
    description:(<p>It is an Ecommerce Website in which user can buy or sell the hand made crafts.I followed micro service architecture for the backend and in front end I used React Js along with Tailwind CSS.</p>)
  },
  {
    name:"Insta Clone",
    tech:"React Native",
    github:"",
    preview:"",
    description:(<p>It is a replicate of Instagram Social Media App. I built Instagram Clone using React Native in which I made Profile and Home Screens which contains Posts,Stories and Highlights</p>)
  }
]

  return (
    <section
      id="projects"
      className="w-[100vw] bg-slate-700 flex flex-col items-center justify-center p-10"
    >
      <p className="text-[35px] my-10 md:text-[40px] font-bold text-white ">
        Projects
      </p>
      <div className="border-gray-300 bg-gray-900 w-[90vw] shadow-black shadow-2xl border border-l-2 rounded-lg   items-center justify-center flex">
        <div className="sm:grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 px-5 md:px-10 py-10 gap-x-12 gap-y-2 items-center justify-center">
          {
            ProjectsData.map((data,index)=>{
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
        <div  className="lg:w-[520px] flex flex-row justify-center items-center xl:w-[500px] sm:w-[400px] w-[280px]  shadow-2xl shadow-black flip-card-front aspect-video right-0 border-slate-700 bg-gradient-to-l from-slate-700 via-slate-600 via-slate-600 to-slate-900   border  rounded-xl " >
          {/* <FrontCard data={data} /> */}
          <p className="text-[40px] lg:text-[60px] font-bold text-white">{data.name}</p>
        </div>
        <div className="lg:w-[520px] xl:w-[500px]  sm:w-[400px] w-[280px] shadow-2xl shadow-black blur-0 flip-card-back aspect-video right-0 border-slate-800 border  bg-slate-700 rounded-xl ">
          <BackCard data={data} />
        </div>
      </div>
    </div>
  );
};


const BackCard = ({data}) => {
  return (
    <div className="p-4 w-full h-full overflow-y-auto no-scrollbar ">
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row justify-center items-center">
        
        <p className="text-white  font-semibold text-lg md:text-2xl">Details</p>
      </div>
      <hr className="my-3"></hr>
      <div className="text-white flex flex-row  items-center gap-5">
        <p className="font-semibold text-white text-sm md:text-lg">Frameworks :</p>
        <p className="text-sm md:text-lg flex flex-1 flex-row justify-end">{data.tech}</p>
        </div>
        <div className="text-white flex flex-row  items-center gap-5">
        <p className="font-semibold text-white text-sm md:text-lg">GitHub :</p>
        <a href={data.github} className="text-sm md:text-lg flex flex-1 flex-row justify-end underline underline-offset-2">View</a>
        </div>
        <div className="text-white flex flex-row  items-center gap-5">
        <p className="font-semibold text-white text-sm md:text-lg">Preview :</p>
        <a href={data.preview} className="text-sm md:text-lg flex flex-1 flex-row justify-end underline underline-offset-2">View</a>
        </div>
       
        <div className="text-white flex flex-row  items-center gap-6">
        <p className="font-semibold text-white text-sm md:text-lg text-start self-start ">Description : </p>
        
      <div className="flex flex-row text-white font-normal justify-start flex-1 pb-2 ">
         <p className="text-sm md:text-lg flex flex-1 flex-row justify-end">
          {data.description}
          </p>
      </div>
        </div>
    </div>
  </div>);
};

export default Projects;
