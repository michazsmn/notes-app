import NotesList from "@/components/NotesList";
import NewNote from "@/components/NewNote";
import RemoveAllButton from "@/components/RemoveAllButton";
import ThemeSwitch from "@/components/ThemeSwitch";
import RemoveSelectedButton from "@/components/RemoveSelectedButton";

export default async function Home() {
  return (
    <div>
      <div>
        <h1 className="text-6xl text-center font-bold mb-8 w-full bg-(--interactables) text-(--text-color-primary) py-3 rounded-lg">Notes 📝</h1>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="bg-(--container-background) space-y-10 p-5 rounded-lg h-auto">
          <NewNote/>
          <RemoveSelectedButton/>
          <RemoveAllButton/>
          <div className="flex flex-row justify-center space-x-4 text-2xl">
            <ThemeSwitch/>
            <p className="text-(--text-color-third)">🌒</p>
          </div>
        </div>
        <div className="col-span-3">
          <NotesList/>
        </div>
      </div>
    </div>

  );
}
