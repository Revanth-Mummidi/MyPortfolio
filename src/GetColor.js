import React from 'react'


const DarkThemeColors={
    background_color:"bg-slate-700",
    navbar_bg_color:"bg-slate-950",
    small_navbar_bg_color:"bg-slate-500",
    text_color:"text-white",
    hover_text_color:"hover:text-[#306a8e]",
    progressbar:"text-gray-200",
    card_bg_color:"bg-gray-900",
    contact_bg_color:"bg-slate-950",
    name_color:"text-orange-300",
    shadow_color:"shadow-black",
    border_white:"border-white",
    shadow_light_color:"shadow-slate-500",
    gradient_colors1:"from-slate-700 via-slate-600 via-slate-600 to-slate-900",
    border_color1:"border-gray-300",
    border_color2:"border-slate-700 ",
    gradient_colors2:"from-slate-300 via-slate-200 via-slate-500 to-slate-600"
}
const LightThemeColors={
    background_color:"bg-[#000000]",
    navbar_bg_color:"bg-[#2df1f1]",
    small_navbar_bg_color:"bg-slate-500",
    text_color:"text-white",
    hover_text_color:"hover:text-slate-700",
    progressbar:"text-gray-200",
    card_bg_color:"bg-gray-900",
    contact_bg_color:"bg-slate-950",
    name_color:"text-orange-300",
    shadow_color:"shadow-white",
    border_white:"border-white",
    shadow_light_color:"shadow-slate-500",
    gradient_colors1:"from-slate-700 via-slate-600 via-slate-600 to-slate-900",
    border_color1:"border-gray-300",
    border_color2:"border-slate-700 ",
    gradient_colors2:"from-slate-300 via-slate-200 via-slate-500 to-slate-600"
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