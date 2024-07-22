
import React, { useState } from "react";
import { Fade } from "react-reveal";
import GetColor from "../GetColor";
import { useSelector } from "react-redux";

function Projects() {
 
  const Color= GetColor(useSelector(state=>state.theme));
  const ProjectsData=[
  {
    name:"Fit Foods",
    tech:"React JS , Tailwind CSS , Mongo DB , NodeJs , ExpressJs",
    github:"https://github.com/Revanth-Mummidi/Fit_Foods",
    preview:"https://fit-foods.onrender.com/",
    description:"It is website which helps users to give personalized food choices according to their health issues and allergies.It helps users to identify the foods which are suitable for their allergies or health issues and which are not.Users can store their health reports as well."
  },
  {
    name:"Craft Sale",
    tech:"React JS , Tailwind CSS ",
    github:"https://github.com/Revanth-Mummidi/client",
    preview:"https://craftsale.vercel.app/",
    description:"It is an Ecommerce Website in which user can buy or sell the hand made crafts.I followed micro service architecture for the backend and in front end I used React Js along with Tailwind CSS."
  },
  {
    name:"Insta Clone",
    tech:"React Native, CSS",
    github:"https://github.com/Revanth-Mummidi/insta",
    preview:"",
    description:"It is a replicate of Instagram Social Media App. I built Instagram Clone using React Native in which I made Profile and Home Screens which contains Posts,Stories and Highlights"
  },
  {
    name:"Portfolio",
    tech:"React JS , Tailwind CSS",
    github:"https://github.com/Revanth-Mummidi/MyPortfolio",
    preview:"https://my-portfolio-git-master-revanthmummidis-projects.vercel.app/",
    description:"Welcome to my portfolio website, made using React JS and Tailwind CSS. This site showcases my projects and skills with a focus on dynamic animations and a responsive design that ensures a seamless experience across all devices. Also added themes with redux.",
  },
]

  return (
    <section
      id="projects"
      className={`${Color.text_color1} w-[100vw] flex flex-col items-center justify-center p-10`}
    >
      <p className="text-[35px] my-10 md:text-[40px] font-bold  ">
        Projects
      </p>
      <div className={`${Color.border_color1} ${Color.card_bg_color} w-[90vw] ${Color.shadow_color} shadow-2xl border border-l-2 rounded-lg   items-center justify-center flex`}>
        <div className="sm:grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 px-5 md:px-10 py-10 gap-x-12 gap-y-2 items-center justify-center">
        <Fade left duration={1500}>
          {
            ProjectsData.map((data,index)=>{
              return(
                <Card key={index} data={data}/>
              )
            })
          }        
          </Fade>  
        </div>
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
        <div  className={`lg:w-[520px] flex ${Color.text_color} flex-row justify-center items-center xl:w-[500px] sm:w-[400px] w-[280px] lg:h-[400px]  shadow-2xl ${Color.shadow_color} flip-card-front aspect-video right-0 ${Color.border_color1} bg-gradient-to-l ${Color.gradient_colors1}  border  rounded-xl `}>
          {/* <FrontCard data={data} /> */}
          <p className="text-[40px] lg:text-[60px] font-bold ">{data.name}</p>
        </div>
        <div className={`lg:w-[520px] xl:w-[500px]  sm:w-[400px] w-[280px] shadow-2xl ${Color.shadow_color} blur-0 flip-card-back aspect-video lg:h-[400px] right-0 ${Color.border_color2} border ${Color.background_color} rounded-xl `}>
          <BackCard data={data} />
        </div>
      </div>
    </div>
  );
};


const BackCard = ({data}) => {
  return (
    <div className="p-4 w-full h-full overflow-y-scroll no-scrollbar ">
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row justify-center items-center">
        
        <p className="  font-semibold text-lg md:text-2xl">Details</p>
      </div>
      <hr className="my-3"></hr>
      <div className=" flex flex-row  items-center gap-5">
        <p className="font-semibold  text-sm md:text-lg">Technologies :</p>
        <p className="text-sm md:text-lg flex flex-1 flex-row justify-end">{data.tech}</p>
        </div>
        <div className=" flex flex-row  items-center gap-5">
        <p className="font-semibold  text-sm md:text-lg">GitHub :</p>
        <a href={data.github} className="text-sm md:text-lg flex flex-1 flex-row justify-end underline underline-offset-2">View</a>
        </div>
        <div className={data.preview==""?"hidden":" flex flex-row  items-center gap-5"}>
        <p className="font-semibold  text-sm md:text-lg">Preview :</p>
        <a href={data.preview} className="text-sm md:text-lg flex flex-1 flex-row justify-end underline underline-offset-2">View</a>
        </div>
       
        <div className=" flex flex-row  items-center gap-6">
        <p className="font-semibold  text-sm md:text-lg text-start self-start ">Description : </p>
        
      <div className="flex flex-row  font-normal justify-start flex-1 pb-2 ">
         <p className="text-sm md:text-lg flex flex-1 flex-row justify-end">
          {data.description}
          </p>
      </div>
        </div>
    </div>
  </div>);
};

export default Projects;
