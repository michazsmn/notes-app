import Form from "next/form";
import React from 'react'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default function NewNote() {
  async function createPost(formData: FormData) {
    "use server";

    const content = formData.get("content") as string;

    await prisma.notes.create({
      data: {
        text : content,
        status : false,
      },
    });

    revalidatePath("/");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6"></h1>
      <Form action={createPost} className="space-y-6">
        <div>
          <label htmlFor="content" className="block text-lg mb-2">

          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your note here... ✍️"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg text-2xl"
          />
        </div>
        <button
          type="submit" className="w-full bg-(--interactables) text-(--text-color-primary) 
          text-xl py-3 rounded-lg hover:bg-(--interactables-on-hover)">
          Create Note ➕ 
        </button>
      </Form>
    </div>
  );
}
