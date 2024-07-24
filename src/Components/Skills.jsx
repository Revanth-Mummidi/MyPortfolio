import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Fade } from "react-reveal";
import GetColor from "../GetColor";
import { useSelector } from "react-redux";

function Skills() {
  const skills = [
    { name: "React JS", percentage: 85 },
    { name: "React Native", percentage: 90 },
    { name: "Node JS", percentage: 85 },
    { name: "Mongo DB", percentage: 85 },
    { name: "Express JS", percentage: 85 },
    { name: "C++", percentage: 90 },
    { name: "Python", percentage: 80},
    { name: "DSA", percentage: 85 },
  ];
  const val = 66;
  
  const Color=GetColor(useSelector(state=>state.theme));
  return (
    <section
      id="skills"
      className={` ${Color.text_color1} w-[100vw] md:mt-0 flex  flex-col items-center justify-center p-10`}
    >
      <p className="text-[35px] my-10 md:text-[40px] font-bold ">
        Skills
      </p>

      <div className={`${Color.border_color1} w-[90vw] ${Color.card_bg_color} ${Color.shadow_color} shadow-2xl border border-l-2 rounded-lg   items-center justify-center flex`}>
        {/* <LeftContent/> */}
        <div className={` ${Color.text_color} sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20 py-10 gap-x-6 gap-y-2 items-center justify-center`}>
          <Fade bottom duration={1500}>
            {skills.map((data, index) => {
              return (
                //   <div key={index} className='w-[100px] lg:w-[140px] my-5 mx-5 rounded-full shadow-black shadow-2xl  p-4 bg-gradient-to-bl from-blue-700 to-purple-900 aspect-square items-center justify-center flex'>
                //   <p className='text-center font-semibold text-lg '>{data}</p>
                //  </div>
                <div key={index} className="cursor-pointer">
                  <SkillCircle
               
                    openTxt={data.name}
                    closedTxt={data.percentage}
                  />
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
      <p className="text-[20px] md:text-[30px] font-semibold mt-10  text-center">
        Click on the skill to check the percentage
      </p>
    </section>
  );
}

function SkillCircle({ openTxt, closedTxt }) {
  const [rotate, setRotate] = useState(true);
  const [displayedPercent, setDisplayedPercent] = useState(0);
  
  const Color=GetColor(useSelector(state=>state.theme));

  useEffect(() => {

      let currentPercent = 0;
      const interval = setInterval(() => {
        currentPercent += 1; 
        setDisplayedPercent(Math.min(currentPercent, closedTxt));
        if (currentPercent >= closedTxt) {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    
  }, [rotate]);
  return (
    <div className=" self-center cursor-pointer flip-card">
      <div
        onClick={() => {
          setRotate(!rotate);
        }}
       
        className={
          !rotate ? "flip-card-inner flip-card-rotate" : "flip-card-inner"
        }
      >
        <div
          className={
            `bg-gradient-to-bl flip-card-front mt-0 shadow-2xl ${Color.shadow_color} ${Color.gradient_colors1} p-4 rounded-full w-[100px] lg:w-[140px] aspect-square my-5 mx-5   justify-center items-center transition-transform delay-700`
          }
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center ">
            <p className="text-center font-semibold text-lg ">
              {openTxt}
            </p>
          </div>
        </div>
        <div
          className={
            `bg-gradient-to-bl flip-card-back  shadow-2xl ${Color.shadow_color} ${Color.gradient_colors2} rounded-full  my-5 mx-5   justify-center items-center transition-transform delay-700`
          }
        >
          <div className="w-full  h-full relative flex flex-col items-center justify-center">
            {/* <p className="text-center font-semibold text-lg ">
              {closedTxt}
            </p> */}
            <CircularProgress value={displayedPercent}  />
          </div>
        </div>
      </div>
    </div>
  );
}

const CircularProgress = ({ value  }) => {
  const Color=GetColor(useSelector(state=>state.theme));

  return (
    <div  className="w-[100px] lg:w-[140px] aspect-square relative" >
      <CircularProgressbar
        value={value}
        background
        backgroundPadding={4}
        styles={buildStyles({
          backgroundColor: "transparent",
          textColor: "rgb(51 65 85 / var(--tw-bg-opacity))",
          pathColor: Color.progressbar,
          trailColor: "transparent",
          textSize: "20px",
        })}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <p style={{color:Color.progressbar}} className={`text-center font-bold text-lg  `}>
          {`${value}%`}
        </p>
      </div>
    </div>
  );
};
export default Skills;
