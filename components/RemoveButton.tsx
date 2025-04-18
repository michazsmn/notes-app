import React from 'react'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export default function RemoveButton({ id } : { id : number}) {
    async function rm() {
        "use server";
        await prisma.notes.delete({
            where : {
                id : id,
            }
        })

        revalidatePath("/")
    }

    return (
        <button onClick={rm} className='w-25 h-10 bg-(--interactables) text-(--text-color-primary) py-3 rounded-lg hover:bg-(--interactables-on-hover)'>Remove ❌</button>
    )
}
