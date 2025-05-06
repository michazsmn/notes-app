import React from 'react'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export default function RemoveSelectedButton() {
    async function rm() {
        "use server";
        await prisma.notes.deleteMany({
            where : {
                status : true,
            }
        })

        revalidatePath("/")
    }

    return (
        <button onClick={rm} className='w-full bg-(--interactables) text-(--text-color-primary) text-xl py-3 rounded-lg hover:bg-(--interactables-on-hover)'>Remove Completed ❌</button>
    )
}
