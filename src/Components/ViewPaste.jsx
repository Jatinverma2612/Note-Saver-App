import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((p) => p._id === id);

  if (!paste) return null;

  return (
   <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-24">
      <div className="max-w-4xl mx-auto px-6 py-20">

        <div className="
          bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-700
          rounded-3xl
          shadow-[0_25px_80px_rgba(0,0,0,0.18)]
          overflow-hidden
        ">
          {/* HEADER */}
          <div className="px-6 py-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
            <h2 className="text-xl font-bold">{paste.title}</h2>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to clipboard");
              }}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <Copy size={18} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-8">
            <textarea
              value={paste.content}
              readOnly
              className="
                w-full
                min-h-[300px]
                bg-transparent
                resize-none
                outline-none
                text-slate-800 dark:text-slate-200
                leading-8
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
