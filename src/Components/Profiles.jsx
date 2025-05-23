import React from 'react'
import { useSelector } from 'react-redux';
import { Fade } from 'react-reveal';
import GetColor from '../GetColor';
import StarsBackground from '../common/StarsBackground';


function Profiles() {
 
  
  const Color= GetColor(useSelector(state=>state.theme));
    const ProfilesData=[
    {
      name:"Codechef",
      pic:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png",
      description:(<p>(Highest Rated : 1768)</p>),
      link:"https://www.codechef.com/users/revanth_2004",
    },
    {
      name:"LeetCode",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OLhpfd9XJnvSrvV48lTTdQmWmV82Qm3jkM8gtWbBg69a7ydQTNAewakMbQn7bK7kW6I&usqp=CAU",
      description:(<p>(Highest Rated : 1891)</p>),
      link:"https://leetcode.com/u/revanth_2004/",
    },
    {
      name:"CodeForces",
      pic:"https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
      description:(<p>(Highest Rated : 1310)</p>),
      link:"https://codeforces.com/profile/revanth_2004",
    },
    {
      name:"GeeksForGeeks",
      pic:"https://i.ytimg.com/vi/8pG8wbqPQGU/sddefault.jpg",
      description:(<p>Problems Solved : 231</p>),
      link:"https://www.geeksforgeeks.org/user/mummidirevanth/",
    },
    {
      name:"GitHub",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8El9ay-ffxJvETGylQQ1hG9NfRk_PwR2C9sjzmNm4Dw&s",
      description:"Repositories : 16",
      link:"https://github.com/Revanth-Mummidi",
    },
    {
      name:"LinkedIn",
      pic:"data:image/png;base64,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",
      description:"Connections : 436",
      link:"https://www.linkedin.com/in/revanth-mummidi-a14a98254/",
    },
    
  ]
  
    return (
      <section
        id="profiles"
        className=" w-[100vw]  flex flex-col  items-center justify-center p-10 mb-20 "
      >
        <p className={` ${Color.text_color1} text-[35px] my-10 md:text-[40px] font-bold  `}>
          Profiles
        </p>
        <div className={`${Color.border_color1} w-[90vw] ${Color.card_bg_color} ${Color.shadow_color} shadow-2xl border border-l-2 
        rounded-lg  p-10 pt-5 items-center justify-center flex overflow-hidden relative `}>
        <div className="z-0 "> 
          <StarsBackground/>
      </div>
          <Fade left duration={2500}>
          <div className="overflow-auto no-scrollbar flex flex-row py-10">
            {
              ProfilesData.map((data,index)=>{
                return(
                  <div  className="" key={index}>
                    <Card data={data} />
                    </div>
                )
              })
            }
            </div>
            </Fade>
        </div>
      
      </section>
    );
  }
  
  function Card({data}){
    
  const Color= GetColor(useSelector(state=>state.theme));

    return(
      <div className="border w-[350px]   font-semibold text-lg mx-5 rounded-2xl p-7 flex flex-col items-center gap-4">
          <img src={data.pic} className="w-[350px] aspect-video rounded-xl object-contain object-center">
  
          </img>
          <p>{data.name}</p>
          <div className='items-center justify-center flex'>

          {data.description}
          </div>

          <div  className={`px-6 py-2 ${Color.background_color}  ${Color.text_color1} text-center rounded-xl`}>
            <a href={data.link}>View</a>
          </div>
      </div>
    )
  }

export default Profiles