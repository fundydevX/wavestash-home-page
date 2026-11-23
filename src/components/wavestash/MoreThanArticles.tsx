import { ArrowUpRight, BookOpen, FileText, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { GOOGLE_PLAY_URL } from "./GooglePlayButton";

const extras = [
  {
    icon: BookOpen,
    label: "EPUB books",
    title: "Keep books beside your articles.",
    text: "Import your EPUB books and discover public-domain classics without leaving your reading library.",
  },
  {
    icon: FileText,
    label: "PDF documents",
    title: "Make documents easier to revisit.",
    text: "Read PDF documents in WaveStash and search their content when you need to find something specific.",
  },
  {
    icon: Headphones,
    label: "Text-to-speech",
    title: "Give your eyes a rest.",
    text: "Listen to supported reading content and turn a quiet reading session into a listening one.",
  },
];

function BookCover({
  title,
  author,
  className,
  textClassName = "text-[#fff9e8]",
}: {
  title: string;
  author: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("relative h-[190px] w-[106px] shrink-0 overflow-hidden rounded-r-[10px] border-l-4 border-black/20 p-4 text-left shadow-lift sm:h-[230px] sm:w-[148px] sm:p-5", className)}>
      <div className={cn("flex h-full flex-col border border-current/30 px-2 py-3", textClassName)}>
        <span className="text-[7px] font-bold uppercase tracking-[0.2em] opacity-70">A classic</span>
        <span className="mt-5 font-display text-[1.25rem] font-semibold leading-[0.95] sm:text-[1.5rem]">{title}</span>
        <span className="mt-auto text-[8px] font-semibold uppercase tracking-[0.12em] opacity-75">{author}</span>
      </div>
    </div>
  );
}

export function MoreThanArticles() {
  return (
    <>
      <section id="more-than-articles" className="section-pad bg-white">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow text-ocean">More than articles</p>
              <h2 className="section-title mt-4 max-w-[680px] text-ocean-dark">
                One comfortable place for more of your reading.
              </h2>
            </div>
            <p className="max-w-[450px] text-base leading-7 text-ink/60 lg:justify-self-end">
              The web comes first. WaveStash also makes room for the books and documents already in your reading life.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {extras.map((extra) => (
              <div key={extra.label} className="border-t-2 border-ocean/20 pt-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-ocean">
                    <extra.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="eyebrow text-[0.6rem] text-ink/40">{extra.label}</span>
                </div>
                <h3 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.06] tracking-tight text-ocean-dark">
                  {extra.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">{extra.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#e3f3f4]">
        <div className="site-container grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
          <div className="relative flex min-h-[270px] items-center justify-center sm:min-h-[320px]" aria-label="A selection of public-domain classic books">
            <div className="absolute bottom-4 h-px w-[90%] bg-ocean-dark/15" />
            <div className="flex -space-x-5">
              <BookCover title="Pride & Prejudice" author="Jane Austen" className="-rotate-6 translate-y-4 bg-[#174f58]" />
              <BookCover title="Moby-Dick" author="Herman Melville" className="rotate-2 bg-[#9b4d43]" />
              <BookCover title="Jane Eyre" author="Charlotte Brontë" className="-rotate-2 translate-y-3 bg-[#315b42]" />
              <BookCover
                title="The Time Machine"
                author="H. G. Wells"
                className="hidden rotate-6 translate-y-5 bg-[#c99b45] sm:flex"
                textClassName="text-[#263b42]"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow text-ocean">A bonus for book lovers</p>
            <p className="mt-5 font-display text-5xl font-medium tracking-[-0.04em] text-ocean sm:text-6xl">75,000+</p>
            <h2 className="mt-2 font-display text-4xl font-medium leading-[1.03] tracking-[-0.035em] text-ocean-dark sm:text-5xl">
              Free classics. A world of possibilities.
            </h2>
            <p className="mt-6 max-w-[510px] text-base leading-7 text-ink/65">
              Explore more than 75,000 free public-domain ebooks through built-in discovery. Download a classic, import your own EPUBs, and keep them alongside your saved web pages.
            </p>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-ocean-dark hover:text-ocean"
            >
              Find your next classic on Google Play
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
