import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import React from 'react'

export default function RemoveAllButton() {
    async function rm() {
        "use server";

        await prisma.notes.deleteMany()
        revalidatePath("/")
    }

    return (
        <button onClick={rm} className='w-full bg-(--interactables) text-(--text-color-primary) py-3 rounded-lg hover:bg-(--interactables-on-hover)'>Remove All ❌</button>
    )

}
