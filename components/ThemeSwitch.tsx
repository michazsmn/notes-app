"use client"
import React from 'react'
import Cookie from "js-cookie"

export default function ThemeSwitch() {

    //@ts-ignore
    function switchTheme(e){
        if (e.target.checked) {
            //@ts-ignore 
            document.querySelector("body").setAttribute("data-theme", "dark")
            //@ts-ignore
            Cookie.set("theme", true)
        } else {
            //@ts-ignore
            document.querySelector("body").setAttribute("data-theme", "light")
            //@ts-ignore
            Cookie.set("theme", false)
        }
    }

    console.log((Cookie.get("theme") == "true"))
    
    return (
    <div>
        <label className="switch col-span-1">
            <input type="checkbox" onChange={switchTheme} defaultChecked={(Cookie.get("theme") == "true")}/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}
