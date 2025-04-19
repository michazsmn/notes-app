import React from 'react'
import prisma from '@/lib/prisma'
import RemoveButton from './RemoveButton';
import CheckboxFinished from './CheckboxFinished';

export default async function NotesList() {
    const notes = await prisma.notes.findMany({
          orderBy: {
            id : 'asc',
          },
    });

    return (
        <div >
            <ul className="list-inside overflow-y-auto h-[650px]">
                {notes.map((note : any) => (
                    <li key={note.id} className="grid grid-cols-5 mb-6 bg-(--container-background) p-5 rounded-lg ">
                        <p className='text-pretty col-span-4 text-(--text-color-third) text-2xl'>{note.text }</p>
                        <div className='flex flex-row justify-end items-center space-x-4'>
                            <p className=' text-(--text-color-secondary) text-sm whitespace-nowrap'>{note.createdAt.toISOString().substring(0, 10)}</p>
                            <CheckboxFinished id={note.id} status={note.status}></CheckboxFinished>
                            <RemoveButton id={note.id}></RemoveButton>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

