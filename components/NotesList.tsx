import React from 'react'
import prisma from '@/lib/prisma'
import RemoveButton from './RemoveButton';
import CheckboxFinished from './CheckboxFinished';

export default async function NotesList() {
    const notes = await prisma.notes.findMany();

    return (
        <div >
            <ul className="list-inside font-[family-name:var(--font-geist-sans)]">
                {notes.map((note : any) => (
                    <li key={note.id} className="grid grid-cols-10 mb-2 bg-gray-200 space-y-10 p-5 rounded-lg ">
                        <p className='text-pretty col-span-9 '>{note.text }</p>
                        <div>
                            <p className='text-center text-gray-400 text-sm'>Created on: {note.createdAt.toISOString().substring(0, 10)}</p>
                            <RemoveButton id={note.id}></RemoveButton>
                            <CheckboxFinished id={note.id} status={note.status}></CheckboxFinished>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

