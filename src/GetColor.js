import React from 'react'


const DarkThemeColors={
    background_color:"bg-slate-700",
    navbar_bg_color:"bg-slate-950",
    small_navbar_bg_color:"bg-slate-500",
    text_color:"text-white",
    text_color1:"text-white",
    hover_text_color:"hover:text-[#306a8e]",
    progressbar:"#eff2e2",
    card_bg_color:"bg-gray-900",
    contact_bg_color:"bg-slate-950",
    name_color:"from-orange-300 via-orange-300 via-orange-300  via-orange-300 to-orange-300",
    shadow_color:"shadow-black",
    border_white:"border-white",
    shadow_light_color:"shadow-slate-500",
    gradient_colors1:"from-slate-700 via-slate-600 via-slate-600 to-slate-900",
    border_color1:"border-gray-300",
    border_color2:"border-slate-700 ",
    gradient_colors2:"from-slate-300 via-slate-200 via-slate-500 to-slate-600"
}
const LightThemeColors={
    background_color:"bg-[#b5d7f5]",
    navbar_bg_color:"bg-[#00215E]",
    small_navbar_bg_color:"bg-[#b5d7f5]",
    text_color:"text-[#f7f8fa]",
    text_color1:"text-[#153883]",
    hover_text_color:"hover:text-[#b5d7f5]",
    progressbar:"#00215E",
    card_bg_color:"bg-[#00215E]",
    contact_bg_color:"bg-slate-950",
    name_color:"from-[#6aa7ec] via-[#094070] via-[#591b94] to-[#b896f2]",
    shadow_color:"shadow-black",
    border_white:"border-white",
    shadow_light_color:"shadow-slate-500",
    gradient_colors1:"from-[#00215E] via-[#1c85e0] via-[#92c2ec] to-[#8fb5db]",
    border_color1:"border-gray-300",
    border_color2:"border-slate-700 ",
    gradient_colors2:"from-[#a4bdeb] via-[#8abae5] via-[#bbcfde] to-[#b6cce3]",
    
}
function GetColor({theme}) {
   
   if(theme==="Dark")
    {
        return DarkThemeColors;
    }
    else{
        return LightThemeColors;
    }
}

export default GetColor