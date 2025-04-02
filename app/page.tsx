import Image from "next/image";
import NotesList from "@/components/NotesList";
import NewNote from "@/components/NewNote";

export default async function Home() {


  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center">
      <NotesList/>
      <NewNote/>
    </div>
  );
}
