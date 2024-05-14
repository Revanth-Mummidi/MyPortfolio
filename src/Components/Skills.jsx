
import React, { useState } from "react";

function Skills() {
  const skills = [
    { name: "React JS", percentage: "85%" },
    { name: "React Native", percentage: "90%" },
    { name: "Node JS", percentage: "75%" },
    { name: "Mongo DB", percentage: "75%" },
    { name: "Express JS", percentage: "75%" },
    { name: "C++", percentage: "90%" },
    { name: "Python", percentage: "75%" },
    { name: "DSA", percentage: "85%" },
  ];
  return (
    <section
      id="skills"
      className="min-h-[100vh] w-[100vw] bg-slate-700 flex flex-col items-center justify-center p-10"
    >
      <p className="text-[45px] my-10 md:text-[50px] font-bold text-white">
        Skills
      </p>
          
      <div className="border-gray-300 bg-gray-900 shadow-black shadow-2xl border border-l-2 rounded-lg   items-center justify-center flex">
        {/* <LeftContent/> */}
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20 py-10 gap-x-6 gap-y-2 items-center justify-center">
        {skills.map((data, index) => {
            return (
              //   <div key={index} className='w-[100px] lg:w-[140px] my-5 mx-5 rounded-full shadow-black shadow-2xl  p-4 bg-gradient-to-bl from-blue-700 to-purple-900 aspect-square items-center justify-center flex'>
              //   <p className='text-center font-semibold text-lg text-white'>{data}</p>
              //  </div>
              <div key={index} className="">
                <SkillCircle openTxt={data.name} closedTxt={data.percentage} />
              </div>
            );
          })}
        </div>
      </div>
        <p className="text-[20px] md:text-[30px] font-semibold mt-10 text-white text-center">
        Click on the skill to check the percentage
      </p>
    </section>
  );
}

function SkillCircle({ openTxt, closedTxt }) {
  const [rotate, setRotate] = useState(true);
  return (
    <div className=" self-center cursor-pointer flip-card">
      <div
        onClick={()=>{
          setRotate(!rotate);
        }}
        className={
          !rotate ? "flip-card-inner flip-card-rotate" : "flip-card-inner"
        }
      >
        <div
          className={
            "bg-gradient-to-bl flip-card-front mt-0 shadow-2xl shadow-black from-[#021f66] via-[#214dc7]  to-[#c142da] p-4 rounded-full w-[100px] lg:w-[140px] aspect-square my-5 mx-5   justify-center items-center transition-transform delay-700"
          }
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center ">
            <p className="text-center font-semibold text-lg text-white">
              {openTxt}
            </p>
          </div>
        </div>
        <div
          className={
            "bg-gradient-to-bl flip-card-back  shadow-2xl shadow-black from-[#071844] via-[#071844] via-[#2D87B6] to-[#2D87B6] p-4 rounded-full w-[100px] lg:w-[140px] aspect-square my-5 mx-5   justify-center items-center transition-transform delay-700"
          }
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center">
            <p className="text-center font-semibold text-lg text-white">
              {closedTxt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
