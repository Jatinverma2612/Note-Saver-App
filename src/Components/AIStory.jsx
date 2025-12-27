import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const AIStory = () => {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setLoading(true);
    setStory("");

    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

      if (!API_KEY) {
        throw new Error("API key missing");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Write a short creative story about: ${prompt}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      const text =
        data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("No story generated");
      }

      setStory(text);
    } catch (error) {
      console.error("❌ Gemini REST Error:", error);
      toast.error("Failed to generate story");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-extrabold mb-4">
          AI Story Generator
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
          Powered by Google Gemini (REST API – frontend only)
        </p>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg overflow-hidden">

          {/* INPUT */}
          <div className="p-8 border-b border-slate-200 dark:border-slate-700">
            <textarea
              placeholder="e.g. A brave knight in a cursed land..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full min-h-[120px] bg-transparent resize-none outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
            />
          </div>

          {/* ACTION */}
          <div className="px-8 py-6 bg-slate-100 dark:bg-slate-800 flex justify-end">
            <button
              onClick={generateStory}
              disabled={loading}
              className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 disabled:opacity-60 flex items-center gap-2 transition"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate Story
                </>
              )}
            </button>
          </div>

          {/* RESULT */}
          {story && (
            <div className="p-8 border-t border-slate-200 dark:border-slate-700">
              <p className="whitespace-pre-line leading-7 text-slate-700 dark:text-slate-200">
                {story}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStory;
