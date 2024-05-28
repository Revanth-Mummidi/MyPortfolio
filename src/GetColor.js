import React from 'react'


const DarkThemeColors={
    background_color:"bg-slate-700",
    navbar_bg_color:"bg-slate-950",
    small_navbar_bg_color:"bg-slate-500",
    text_color:"text-white",
    hover_text_color:"text-slate-300",
    card_bg_color:"bg-gray-900",
    contact_bg_color:"bg-slate-950",

    shadow_color:"shadow-black",
    shadow_light_color:"shadow-slate-500",
    gradient_colors1:"from-slate-700 via-slate-600 via-slate-600 to-slate-900",
    border_color1:"border-gray-300",
    border_color2:"border-slate-700 ",
    gradient_colors2:"from-slate-700 via-slate-600 via-slate-600 to-slate-900"
}
const LightThemeColors={
    background_color:"bg-slate-200",
    navbar_bg_color:"bg-slate-950",
    small_navbar_bg_color:"bg-slate-500",
    text_color:"text-black",
    hover_text_color:"text-slate-300",
    card_bg_color:"bg-gray-900",
    contact_bg_color:"bg-slate-950",
    shadow_color:"shadow-black",
    shadow_light_color:"shadow-white",
    gradient_colors1:"from-slate-700 via-slate-600 via-slate-600 to-slate-900",
    border_color1:"border-gray-300",
    border_color2:"border-slate-700 ",
    gradient_colors2:"from-slate-700 via-slate-600 via-slate-600 to-slate-900"
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