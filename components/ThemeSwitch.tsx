"use client"
import React, { useEffect, useState } from 'react'

export default function ThemeSwitch() {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme){
            setTheme(theme)
            //@ts-ignore
            document.querySelector('#toggle').checked = (localStorage.getItem('theme') === 'dark')
        }
      }, []);

    useEffect(() => {
        document.querySelector("body")?.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme])

    //@ts-ignore
    function switchTheme(e) {
        const target = e.target as HTMLInputElement;
    
        if (target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    
    return (
    <div>
        <label className="switch col-span-1">
            <input id="toggle" type="checkbox" onChange={switchTheme}/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}

