import React from 'react'
import prisma from '@/lib/prisma'

export default async function NotesList() {
    const notes = await prisma.notes.findMany();

    return (
        <div >
            <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
            Notes
            </h1>
            <ul className="list-inside font-[family-name:var(--font-geist-sans)]">
                {notes.map((note : any) => (
                    <li key={note.id} className="mb-2">
                        <span>{note.text }</span>
                        <span>Status: {note.status ? "Done" : "Not Done"}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

