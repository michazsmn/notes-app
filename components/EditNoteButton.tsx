"use client"
import React, { createElement, useEffect, useState } from 'react'
import EditDoneButton from './EditDoneButton'

export default function EditNoteButton({ id } : { id : number}) {

  const [editDone, setEditDone] = useState(false)
  
  function replaceByForm(){
    const noteID = id.toString()

    const noteTextElement = document.getElementById(noteID+"text")
    const noteTextElementNew = document.createElement("textarea")
    noteTextElementNew.id = id.toString()+"text"

    if (noteTextElement){
      noteTextElementNew.textContent = noteTextElement.textContent
    } 

    noteTextElementNew.className = 'text-pretty col-span-4 text-(--text-color-third) text-2xl field-sizing-content border-(--text-color-third) border-1 rounded-lg'
    noteTextElement?.replaceWith(noteTextElementNew)

    setEditDone(true)
  }

  return (
    <div>
        {
          editDone ? <EditDoneButton id={id}></EditDoneButton> : <button id={id.toString()+"EditButton"} className='w-10 h-10 bg-(--interactables) 
          text-(--text-color-primary) rounded-lg hover:bg-(--interactables-on-hover)' onClick={() => replaceByForm()}>✏️</button>
        }
    </div>
  )
}
