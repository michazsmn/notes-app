import Image from "next/image";
import NotesList from "@/components/NotesList";
import NewNote from "@/components/NewNote";
import RemoveAllButton from "@/components/RemoveAllButton";

export default async function Home() {

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-8 font-[family-name:var(--font-geist-sans)] w-full bg-blue-500 text-white py-3 rounded-lg">Notes</h1>
      <div className="bg-gray-50 grid grid-cols-3 gap-12">
        <div className="bg-gray-200 space-y-10 p-5 rounded-lg">
          <NewNote/>
          <RemoveAllButton/>
        </div>
        <div className="col-span-2">
          <NotesList></NotesList>
        </div>

      </div>
    </div>

  );
}
