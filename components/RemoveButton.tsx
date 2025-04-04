import React from 'react'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export default function RemoveButton({ id } : { id : number}) {
    async function rm() {
        "use server";
        await prisma.notes.delete({
            where : {
                id : id
            }
        })

        revalidatePath("/")
    }

    return (
        <button onClick={rm} className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600'>Remove</button>
    )
}
