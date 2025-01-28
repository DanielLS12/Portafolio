import React from 'react'
import modeDark from '@assets/icons/mode-dark.svg'
import modeLight from '@assets/icons/mode-light.svg'
import { useState } from 'react'
import { useEffect } from 'react';

function ChangeTheme() {
    
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if(theme === "dark"){
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }

        localStorage.setItem("theme", theme);
    },[theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

  return (
    <button className='fixed lg:static lg:flex items-center gap-2 lg:w-36 bg-slate-900 hover:bg-slate-950 shadow-lg hover:shadow-[#A5A5A4] dark:hover:shadow-[#F0C419] dark:bg-orange-50 p-2 rounded-md text-white dark:text-black transition-all duration-200 ease-linear justify-center bottom-7 left-3'
    onClick={handleChangeTheme}>
        <img src={theme === "light" ? modeDark : modeLight} alt="imageModeDark" className='w-[30px] h-[30px] lg:w-auto lg:h-auto'/>
        <span className='truncate hidden lg:block'>{theme === "light" ? 'Modo oscuro' : 'Modo claro'}</span>
    </button>
  )
}

export default ChangeTheme