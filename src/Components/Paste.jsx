import { Calendar, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/FormatDate";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen bg-[#FFF7ED] dark:bg-slate-950 px-4 sm:px-6 py-10">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-4xl font-bold text-[#292524] dark:text-white mb-10">
          My Notes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastes.map((paste) => (
            <div
              key={paste._id}
              className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#292524] dark:text-white mb-3 line-clamp-1">
                  {paste.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-slate-300 line-clamp-4">
                  {paste.content}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {FormatDate(paste.createdAt)}
                </div>
                <button
                  onClick={() => dispatch(removeFromPastes(paste._id))}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Paste;
