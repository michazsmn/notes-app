import React from 'react'
import prisma from '@/lib/prisma'
import RemoveButton from './RemoveButton';
import CheckboxFinished from './CheckboxFinished';
import EditNoteButton from './EditNoteButton';

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
                        <p id={note.id.toString()+"text"} className='text-pretty col-span-4 text-(--text-color-third) text-2xl'>{note.text }</p>
                        <div className='flex flex-row justify-end items-center space-x-4'>
                            <p className=' text-(--text-color-secondary) text-sm whitespace-nowrap text-center'>
                                {note.createdAt.toLocaleString("en-GB",  {timeZone: "Europe/Berlin"}).substring(0, 5)}
                                <br/>
                                {note.createdAt.toLocaleString("en-GB",  {timeZone: "Europe/Berlin"}).substring(11, 17)}
                            </p>
                            <CheckboxFinished id={note.id} status={note.status}></CheckboxFinished>
                            <EditNoteButton id={note.id}></EditNoteButton>
                            <RemoveButton id={note.id}></RemoveButton>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}