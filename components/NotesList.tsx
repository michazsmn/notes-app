import React from 'react'
import prisma from '@/lib/prisma'
import RemoveButton from './RemoveButton';
import RemoveAllButton from './RemoveAllButton';

export default async function NotesList() {
    const notes = await prisma.notes.findMany();

    return (
        <div >
            <ul className="list-inside font-[family-name:var(--font-geist-sans)]">
                {notes.map((note : any) => (
                    <li key={note.id} className="grid grid-cols-10 mb-2 bg-gray-200 space-y-10 p-5 rounded-lg ">
                        <p className='text-pretty col-span-9 '>{note.text }</p>
                        <div>
                            <RemoveButton id={note.id}></RemoveButton>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

