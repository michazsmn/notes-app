import Image from "next/image";
import NotesList from "@/components/NotesList";
import NewNote from "@/components/NewNote";
import RemoveAllButton from "@/components/RemoveAllButton";

export default async function Home() {

  return (
    <div>
      <div className="grid grid-cols-20 ">
        <label className="switch col-span-1">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
        <h1 className="col-span-19 text-4xl text-center font-bold mb-8 w-full bg-blue-500 text-white py-3 rounded-lg">Notes</h1>
      </div>
      <div className="grid grid-cols-4 gap-12">
        <div className="bg-gray-200 space-y-10 p-5 rounded-lg">
          <NewNote/>
          <RemoveAllButton/>
        </div>
        <div className="col-span-3">
          <NotesList></NotesList>
        </div>
      </div>
    </div>

  );
}
