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
        <button onClick={rm} className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 '>Remove All</button>
    )

}
