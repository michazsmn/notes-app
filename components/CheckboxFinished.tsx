import React from 'react'
import {Checkbox} from "@heroui/checkbox";
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
      <Checkbox size='lg' classNames={{icon: "hidden"}} isSelected={status} onChange={flipState} ></Checkbox>
    </div>
  )
}
