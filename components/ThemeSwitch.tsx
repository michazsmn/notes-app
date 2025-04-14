"use client"
import React from 'react'

export default function ThemeSwitch() {
    
    function switchTheme(e : any){
        if (e.target.checked) {
            //@ts-ignore
            document.querySelector("body").setAttribute("data-theme", "dark")
        } else {
            //@ts-ignore
            document.querySelector("body").setAttribute("data-theme", "light")
        }
    }

    return (
    <div>
        <label className="switch col-span-1">
            <input type="checkbox" onChange={switchTheme}/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}
