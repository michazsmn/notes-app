import React from 'react'
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

export default function CheckboxFinished({id, status} : {id : number, status : boolean}) {
  
  async function flipState(){
    "use server";
    await prisma.notes.update({
      where : {
        id : id
      },
      data : {
        status : !status
      },
    })


    revalidatePath("/")

  }

  return (
    <div>
      <input className="w-10 h-10" type="checkbox" checked={status} onChange={flipState} />
    </div>
  )
}
