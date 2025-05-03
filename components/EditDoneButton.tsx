"use client";

import React from 'react'
import { saveTextNote } from '@/actions/saveTextNote';

export default function EditDoneButton({ id } : { id : number}) {

  const handleSave = async () => {

    const updatedNoteText = (document.getElementById(id.toString()+"text") as HTMLTextAreaElement)?.value;

    if (updatedNoteText == null){

      console.error("Updated note text is null");
      return;

    } else {

      await saveTextNote(id, updatedNoteText);
      window.location.reload();
  }
  };

  return (
        <div>        
            <button className='w-10 h-10 bg-green-500 text-(--text-color-primary) 
                rounded-lg hover:bg-green-700' onClick={handleSave}>✏️</button>
        </div>
  )
}
