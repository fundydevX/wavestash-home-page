import {
  BookOpenCheck,
  Check,
  Compass,
  Copy,
  Link,
  Search,
  Share2,
  WifiOff,
} from "lucide-react";

function FindVisual() {
  return (
    <div className="relative flex h-[238px] items-center justify-center overflow-hidden rounded-[26px] bg-mist p-5">
      <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
        <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
          <Search className="h-3.5 w-3.5 text-ocean" />
          <span className="text-[10px] text-ink/45">ideas worth keeping</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=640&q=85"
          alt="A colorful street in Lisbon"
          className="h-20 w-full object-cover"
        />
        <div className="p-4">
          <p className="eyebrow text-[0.5rem] text-ocean">City guide · 7 min</p>
          <p className="mt-1.5 font-display text-xl font-semibold leading-tight text-ink">A weekend in Lisbon, beyond the postcards</p>
        </div>
      </div>
      <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-ocean text-white shadow-lift">
        <Compass className="h-5 w-5" />
      </span>
    </div>
  );
}

function ShareVisual() {
  return (
    <div className="flex h-[238px] items-end justify-center rounded-[26px] bg-[#e8f5f7] px-5 pt-6">
      <div className="w-full max-w-[292px] rounded-t-[26px] border border-ink/10 bg-white px-5 pb-5 pt-3 shadow-soft">
        <div className="mx-auto h-1 w-9 rounded-full bg-ink/15" />
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-bold text-ink">Share via</p>
          <Share2 className="h-4 w-4 text-ink/45" />
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-mist p-3 ring-2 ring-ocean/20">
          <img src="images/wavestash-icon.png" alt="" className="h-10 w-10 rounded-xl" />
          <div className="flex-1">
            <p className="text-xs font-bold text-ink">WaveStash</p>
            <p className="mt-0.5 text-[10px] text-ink/50">Save for offline reading</p>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ocean text-white">
            <Check className="h-3 w-3" />
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3 px-3 py-2 text-ink/55">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink/5">
            <Copy className="h-4 w-4" />
          </span>
          <span className="text-xs font-medium">Copy link</span>
        </div>
      </div>
    </div>
  );
}

function ReadVisual() {
  return (
    <div className="relative flex h-[238px] items-center justify-center overflow-hidden rounded-[26px] bg-paper p-5">
      <div className="w-full max-w-[288px] rounded-[22px] border border-ink/10 bg-white p-4 shadow-soft">
        <div className="flex items-center justify-between">
          <p className="font-display text-xl font-semibold text-ink">Your library</p>
          <BookOpenCheck className="h-5 w-5 text-ocean" />
        </div>
        <div className="mt-4 flex gap-3 border-t border-ink/10 pt-4">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=240&q=80"
            alt=""
            className="h-[86px] w-[68px] rounded-xl object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="font-display text-lg font-semibold leading-[1.1] text-ink">A weekend in Lisbon</p>
            <p className="mt-2 text-[10px] text-ink/45">Travel · 7 min read</p>
            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-mist px-2 py-1 text-[9px] font-bold text-ocean">
              <WifiOff className="h-3 w-3" /> Available offline
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-4 flex items-center gap-1.5 rounded-full bg-[#dff5ec] px-3 py-1.5 text-[10px] font-bold text-[#18775f]">
        <Check className="h-3.5 w-3.5" /> Saved
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Find something worth reading",
    description: "Browse as usual. An article, recipe, tutorial, guide, or bit of research—if it interests you, it belongs in your library.",
    visual: <FindVisual />,
  },
  {
    number: "02",
    title: "Share it to WaveStash",
    description: "Open Android’s Share menu and choose WaveStash. It saves the page and prepares a clean, comfortable version for reading.",
    visual: <ShareVisual />,
  },
  {
    number: "03",
    title: "Read whenever you want",
    description: "Your page is now in your personal library. Open it on the train, on a flight, or anywhere else—no connection required.",
    visual: <ReadVisual />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-ocean">From found to finished</p>
            <h2 className="section-title mt-4 max-w-[680px] text-ocean-dark">
              A quieter way to keep up with the web.
            </h2>
          </div>
          <p className="max-w-[480px] text-base leading-7 text-ink/60 lg:justify-self-end">
            No complicated setup. WaveStash fits into the way you already browse, then gives those pages a better place to wait.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-9">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-ocean-dark/15 pt-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-2xl italic text-ocean">{step.number}</span>
                <span className="h-px flex-1 bg-ocean/15" />
                {step.number === "01" && <Link className="h-4 w-4 text-ocean/50" />}
                {step.number === "02" && <Share2 className="h-4 w-4 text-ocean/50" />}
                {step.number === "03" && <BookOpenCheck className="h-4 w-4 text-ocean/50" />}
              </div>
              {step.visual}
              <h3 className="mt-6 font-display text-[1.7rem] font-semibold leading-tight tracking-[-0.025em] text-ocean-dark">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
