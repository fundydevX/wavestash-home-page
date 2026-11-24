import { useMemo, useState } from "react";
import { Check, Clock3, Search, Tag, WifiOff, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ReadingStatus = "To read" | "Finished";
type Filter = "All" | ReadingStatus;

const articles: Array<{
  title: string;
  source: string;
  category: string;
  time: string;
  status: ReadingStatus;
  image: string;
}> = [
  {
    title: "A slower way to see the Amalfi Coast",
    source: "Field Notes Journal",
    category: "Travel",
    time: "8 min",
    status: "To read",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=240&q=80",
  },
  {
    title: "Weeknight pasta, with a little more character",
    source: "The Good Table",
    category: "Recipes",
    time: "6 min",
    status: "To read",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=240&q=80",
  },
  {
    title: "How the humble transistor changed everything",
    source: "The Long View",
    category: "Technology",
    time: "12 min",
    status: "Finished",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=240&q=80",
  },
  {
    title: "The libraries that kept ancient knowledge alive",
    source: "History Today",
    category: "History",
    time: "10 min",
    status: "To read",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=240&q=80",
  },
];

const filters: Filter[] = ["All", "To read", "Finished"];

export function LibraryShowcase() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const visibleArticles = useMemo(() => {
    const search = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesFilter = filter === "All" || article.status === filter;
      const matchesSearch = `${article.title} ${article.category} ${article.source}`
        .toLowerCase()
        .includes(search);
      return matchesFilter && matchesSearch;
    });
  }, [filter, query]);

  return (
    <section id="library" className="section-pad bg-mist">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-ocean">Your personal reading library</p>
          <h2 className="section-title mt-4 text-ocean-dark">
            Not another
            <span className="block italic text-ocean">tab graveyard.</span>
          </h2>
          <p className="mt-6 max-w-[470px] text-base leading-7 text-ink/60">
            Turn scattered links into a collection you’ll actually return to. Everything is easy to search, simple to organize, and ready when you are.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ocean shadow-sm">
                <Search className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-ink">Search by title, topic, or source</h3>
                <p className="mt-1 text-sm leading-6 text-ink/55">Find the piece you remember without digging through browser history.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ocean shadow-sm">
                <Tag className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-ink">Organize around your interests</h3>
                <p className="mt-1 text-sm leading-6 text-ink/55">Tags and reading status turn saves into a useful collection.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ocean shadow-sm">
                <WifiOff className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-ink">Take the whole library offline</h3>
                <p className="mt-1 text-sm leading-6 text-ink/55">Saved content stays available when the connection disappears.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[610px]">
          <p className="mb-3 text-xs font-semibold text-ink/45">Interactive preview — try search or a filter</p>
          <div className="overflow-hidden rounded-[28px] border border-ocean-dark/10 bg-white shadow-soft">
            <div className="border-b border-ink/10 bg-paper px-5 pb-5 pt-6 sm:px-7">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-[2rem] font-semibold tracking-tight text-ocean-dark">WaveStash</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-ink/50">
                    <span className="h-2 w-2 rounded-full bg-ocean-light" />
                    {articles.length} saved · ready offline
                  </p>
                </div>
                <img src="images/wavestash-icon.png" alt="" className="h-11 w-11 rounded-[14px]" />
              </div>
              <div className="relative mt-5">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search your reading library…"
                  aria-label="Search the sample reading library"
                  className="h-12 rounded-xl border-ink/10 bg-white pl-11 pr-10 text-sm shadow-none focus-visible:ring-ocean/30"
                />
                {query && (
                  <button
                    type="button"
                    aria-label="Clear library search"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-ink/40 hover:bg-mist"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                    className={cn(
                      "rounded-full border border-ink/10 px-3.5 py-2 text-[11px] font-semibold text-ink/55",
                      filter === item && "border-ocean bg-ocean text-white",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-ink/10 px-5 sm:px-7">
              {visibleArticles.map((article) => (
                <article key={article.title} className="flex gap-4 py-5">
                  <img src={article.image} alt="" className="h-[86px] w-[68px] shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-lg font-semibold leading-[1.12] text-ink">{article.title}</h4>
                      <WifiOff className="mt-1 h-3.5 w-3.5 shrink-0 text-ocean/60" />
                    </div>
                    <p className="mt-1.5 truncate text-[10px] text-ink/45">{article.source}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium text-ink/45">
                      <span className="rounded-full bg-mist px-2.5 py-1 font-semibold text-ocean">{article.category}</span>
                      <span className="flex items-center gap-1"><Clock3 className="h-3 w-3" />{article.time}</span>
                      <span className={cn("flex items-center gap-1", article.status === "Finished" ? "text-[#25816b]" : "text-ocean")}>
                        {article.status === "Finished" && <Check className="h-3 w-3" />}{article.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
              {visibleArticles.length === 0 && (
                <div className="py-14 text-center">
                  <Search className="mx-auto h-7 w-7 text-ocean/40" />
                  <p className="mt-3 font-display text-xl font-semibold text-ink">No saved pages found</p>
                  <p className="mt-1 text-xs text-ink/50">Try another search or reading filter.</p>
                  <button
                    type="button"
                    className="mt-4 rounded-lg px-3 py-2 text-xs font-bold text-ocean hover:bg-mist"
                    onClick={() => {
                      setQuery("");
                      setFilter("All");
                    }}
                  >
                    Show all articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
