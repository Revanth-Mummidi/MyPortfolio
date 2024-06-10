
import React from "react";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import GetColor from "../GetColor";

function Achievements() {
 
  const Color= GetColor(useSelector(state=>state.theme));
  const AchievementsData=[
  "Ranked 1st in coding contest conducted in our college and won Mr.Coder Title in our college",
  "Secured 2nd rank in Code Wars conducted by JNTUGV",
   "Qualified for Semi-Final Round in Turing Cup National Wide Coding contest",
   "Solved more than 1000+ problems from Leetcode , Codechef , GeeksForGeeks , CodeForces",
   "Achieved Knight Badge at Leetcode (Highest Rated : 1891)",
   "Achieved 3 star at CodeChef (Highest Rated : 1764)"
  
]

  return (
    <section
      id="achievements"
      className=" w-[100vw] flex flex-col items-center justify-center p-10"
    >
      <p className={` ${Color.text_color1} text-[35px] my-10 md:text-[40px] font-bold  `}>
        Achievements
      </p>
      <div className={`${Color.border_color1} ${Color.card_bg_color} w-[90vw] ${Color.shadow_color} shadow-2xl border border-l-2 rounded-lg  p-10 items-center justify-center flex`}>
        <div className="overflow-x-auto no-scrollbar">
      <Fade left duration={2000}>
         <ul className="list-disc gap-5">

          {
            AchievementsData.map((data,index)=>{
              return(
                <li key={index} className=" font-semibold md:text-xl my-10 lg:text-3xl">{index+1} {")"} {data}</li>
              )
            })
          }
         </ul>
        </Fade>
          </div>
      </div>
    
    </section>
  );
}




export default Achievements;
