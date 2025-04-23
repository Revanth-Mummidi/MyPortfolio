import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import GetColor from '../GetColor';
import { useSelector } from 'react-redux';
import StarsBackground from '../common/StarsBackground';

function Contact() {
   
  const Color= GetColor(useSelector(state=>state.theme));
  return (
   <section id="contact" className={`w-[100vw] relative overflow-hidden ${Color.navbar_bg_color} `}>
       <div className="z-0 "> 
          <StarsBackground/>
      </div>
      <div className='flex flex-col items-center justify-start p-10'>
          <p className=' text-[30px] md:text-[40px] font-bold mb-10'>Contact Me</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 font-semibold mx-10  gap-x-10 gap-y-10 my-10'>
              <div className='flex flex-col items-center '>
                 <p className='text-3xl underline underline-offset-4 text-center'>Address</p> 
                 <p className='mt-5 text-lg text-center '>Sathavahana Nagar, Kurmannapalem, Visakhapatnam, Andhra Pradesh</p>
              </div>
              <div className='flex flex-col items-center '>
                 <p className='text-3xl underline underline-offset-4 text-center'>Phone Number</p> 
                 <p className='mt-5 text-lg text-center '>+91 8712848530</p>
              </div>
              <div className='flex flex-col items-center '>
                 <p className='text-3xl underline underline-offset-4 text-center'>Mail</p> 
                 <p className='mt-5 text-lg text-center '>mummidirevanth@gmail.com</p>
              </div>
              
          </div>
          <div className='flex flex-row justify-center items-center gap-10 my-10 '>
             <a href='https://github.com/Revanth-Mummidi'>
                <FaGithub className={`h-[60px] w-[60px]  ${Color.hover_text_color} font-bold`}/>
               </a>
               <a href='https://www.linkedin.com/in/revanth-mummidi-a14a98254/'>

              <FaLinkedin className={`h-[60px] w-[60px] ${Color.hover_text_color} font-bold`}/>
               </a>
          </div>
          <p className='font-semibold mt-5'>©️ 2024 Mummidi Revanth Portfolio. All rights reserved</p>
      </div>
   </section>
  )
}

export default Contact