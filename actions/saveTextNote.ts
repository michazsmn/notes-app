"use server";

import prisma from '@/lib/prisma';

export async function saveTextNote(id: number, updatedNoteText: string) {

  await prisma.notes.update({
    where: { id },
    data: { text: updatedNoteText},
  });

}