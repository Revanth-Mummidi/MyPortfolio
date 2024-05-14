import React from 'react'


function Profiles() {
 
    const ProfilesData=[
    "Codechef",
    "LeetCode",
    "CodeForces",
    "GeeksForGeeks",
    "HackerRank",
    "HackerEarth",
    "GitHub",  
  ]
  
    return (
      <section
        id="profiles"
        className=" w-[100vw] bg-slate-700 flex flex-col items-center justify-center p-10"
      >
        <p className="text-[35px] my-10 md:text-[40px] font-bold text-white ">
          Profiles
        </p>
        <div className="border-gray-300 w-[90vw] bg-gray-900  shadow-black shadow-2xl border border-l-2 rounded-lg  p-10 pt-5 items-center justify-center flex">
          <div className="overflow-auto flex flex-row py-10">
  
            {
              ProfilesData.map((data,index)=>{
                return(
                  <div className="" key={index}>
                    <Card data={data} />
                    </div>
                )
              })
            }
            </div>
        </div>
      
      </section>
    );
  }
  
  function Card({data}){
    return(
      <div className="border  text-white font-semibold text-lg mx-5 rounded-2xl p-7 flex flex-col items-center gap-4">
          <div className="w-[250px] aspect-video bg-slate-500 rounded-xl">
  
          </div>
          <p>{data}</p>
          <p>Highest Rated:- 1874</p>
          <div className="px-6 py-2 bg-slate-600 text-center rounded-xl">
            <a>View</a>
          </div>
      </div>
    )
  }

export default Profiles