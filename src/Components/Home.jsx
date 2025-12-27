import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const saveNote = () => {
    if (!title.trim() || !value.trim()) {
      toast.error("Title and content required");
      return;
    }

    dispatch(
      addToPastes({
        _id: Date.now().toString(),
        title,
        content: value,
        createdAt: new Date().toISOString(),
      })
    );

    toast.success("Note saved");
    setTitle("");
    setValue("");
  };

  return (
    <div
      className="
        min-h-screen
        px-4
        py-14
        bg-[#f1eee9]           /* LIGHT BACKGROUND FIX */
        dark:bg-[#0b1220]
        transition-colors
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* EDITOR CARD */}
        <div
          className="
            rounded-2xl
            bg-[#fdfcfb]        /* SOFT OFF-WHITE (NOT PURE WHITE) */
            dark:bg-[#111827]
            border
            border-black/10
            dark:border-white/10

            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]

            p-7 md:p-9
          "
        >
          {/* TITLE */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="
              w-full
              mb-5
              text-2xl md:text-3xl
              font-semibold
              bg-transparent
              outline-none
              text-slate-900
              dark:text-slate-100
              placeholder:text-slate-500
            "
          />

          {/* TEXTAREA */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write your note here..."
            className="
              w-full
              min-h-[300px]
              resize-none
              outline-none
              bg-transparent
              text-slate-700
              dark:text-slate-200
              placeholder:text-slate-500
              leading-7
            "
          />

          {/* ACTION */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={saveNote}
              className="
                px-6 py-2.5
                rounded-lg
                font-semibold
                bg-orange-500
                text-white
                hover:bg-orange-600
                transition
              "
            >
              Save Note
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
