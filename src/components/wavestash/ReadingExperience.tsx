import { useState } from "react";
import {
  Check,
  Highlighter,
  Minus,
  Moon,
  NotebookPen,
  Plus,
  Search,
  Sun,
  Tags,
  Type,
  WifiOff,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: Type, title: "Make it yours", text: "Adjust text and choose a reading font." },
  { icon: Moon, title: "Easy on your eyes", text: "Reading themes and a comfortable dark mode." },
  { icon: Highlighter, title: "Keep the best bits", text: "Highlight passages worth returning to." },
  { icon: NotebookPen, title: "Think in the margins", text: "Add notes alongside your reading." },
  { icon: Search, title: "Find it again", text: "Search your personal reading library." },
  { icon: Tags, title: "Bring some order", text: "Use tags to organize what you save." },
];

type ReadingMode = "light" | "sepia" | "dark";

const modeStyles: Record<ReadingMode, string> = {
  light: "bg-white text-ink",
  sepia: "bg-[#f6efdf] text-[#40382e]",
  dark: "bg-[#102f3e] text-[#edf8fa]",
};

export function ReadingExperience() {
  const [mode, setMode] = useState<ReadingMode>("light");
  const [fontSize, setFontSize] = useState(15);

  return (
    <section id="reading" className="section-pad overflow-hidden bg-ocean-dark text-white">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
        <div>
          <p className="eyebrow text-[#73e0d3]">The reading experience</p>
          <h2 className="section-title mt-4 text-white">
            The web,
            <span className="block italic text-[#83dce2]">without the noise.</span>
          </h2>
          <p className="mt-6 max-w-[490px] text-base leading-7 text-white/65">
            WaveStash turns busy pages into a calm reading space, with the tools to make every article feel like your own.
          </p>

          <div className="mt-9 grid gap-x-7 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="border-t border-white/15 py-5">
                <feature.icon className="h-5 w-5 text-[#73e0d3]" strokeWidth={1.8} />
                <h3 className="mt-3 text-sm font-bold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/55">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[590px]">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold text-white/55">Try the reading view</p>
            <div className="flex w-fit rounded-xl border border-white/15 bg-white/5 p-1" aria-label="Reading theme preview">
              {(["light", "sepia", "dark"] as ReadingMode[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={mode === item}
                  onClick={() => setMode(item)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-semibold capitalize text-white/65",
                    mode === item && "bg-white text-ocean-dark shadow-sm",
                  )}
                >
                  {item === "light" && <Sun className="h-3.5 w-3.5" />}
                  {item === "sepia" && <Type className="h-3.5 w-3.5" />}
                  {item === "dark" && <Moon className="h-3.5 w-3.5" />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className={cn("reader-preview overflow-hidden rounded-[28px] shadow-phone", modeStyles[mode])}>
            <div className="flex items-center justify-between border-b border-current/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2.5">
                <img src="images/wavestash-icon.png" alt="" className="h-8 w-8 rounded-[10px]" />
                <span className="text-xs font-bold">Reading view</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-1 hidden items-center gap-1.5 text-[10px] font-semibold opacity-60 sm:flex">
                  <WifiOff className="h-3.5 w-3.5" /> Saved offline
                </span>
                <button
                  type="button"
                  aria-label="Decrease preview text size"
                  onClick={() => setFontSize((size) => Math.max(13, size - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-current/15 hover:bg-current/5"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Increase preview text size"
                  onClick={() => setFontSize((size) => Math.min(18, size + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-current/15 hover:bg-current/5"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=88"
              alt="Positano on Italy’s Amalfi Coast"
              className="h-[180px] w-full object-cover sm:h-[210px]"
            />

            <article className="px-6 py-7 sm:px-10 sm:py-9">
              <p className="eyebrow text-[0.58rem] text-ocean">Slow travel · Field Notes Journal</p>
              <h3 className="mt-3 font-display text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[2.7rem]">
                A slower way to see the Amalfi Coast
              </h3>
              <p className="mt-3 text-[11px] font-medium opacity-50">8 min read · Saved from the web</p>
              <p className="mt-6 leading-[1.8] opacity-75" style={{ fontSize }}>
                The best mornings here begin without a plan. A strong coffee, a quiet stretch of coastline, and enough time to take the road that looks interesting.
              </p>
              <blockquote className="my-6 border-l-2 border-ocean-light bg-ocean/5 px-5 py-4 font-display text-xl italic leading-snug">
                “Leave room for the places you couldn’t have planned to find.”
              </blockquote>
              <p className="leading-[1.8] opacity-75" style={{ fontSize }}>
                Beyond the famous viewpoints, each village rewards a little curiosity. Walk one street farther. Stay for lunch. Let the afternoon unfold.
              </p>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-current/10 p-4">
                <NotebookPen className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider opacity-50">Your note</p>
                  <p className="mt-1 text-xs leading-5 opacity-70">Remember this for the September trip.</p>
                </div>
                <Check className="ml-auto h-4 w-4 text-ocean" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
