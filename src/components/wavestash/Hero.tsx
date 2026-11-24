import {
  ArrowDown,
  Check,
  Globe2,
  MoreHorizontal,
  Share2,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GooglePlayButton } from "./GooglePlayButton";
import { WaveStashLibraryScreen } from "./WaveStashLibraryScreen";

function BrowserArticle() {
  return (
    <div className="absolute left-0 top-[160px] z-10 hidden w-[286px] overflow-hidden rounded-[24px] border border-ocean-dark/10 bg-white shadow-soft sm:block">
      <div className="flex h-10 items-center gap-2 border-b border-ink/10 px-4">
        <span className="h-2 w-2 rounded-full bg-[#f08080]" />
        <span className="h-2 w-2 rounded-full bg-[#f2c14e]" />
        <span className="h-2 w-2 rounded-full bg-[#65c6a5]" />
        <div className="ml-2 flex-1 truncate rounded-md bg-mist px-2 py-1 text-[8px] text-ink/50">
          fieldnotesjournal.com/slow-travel
        </div>
        <MoreHorizontal className="h-3.5 w-3.5 text-ink/40" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=640&q=85"
        alt="Colorful buildings on the Amalfi Coast"
        className="h-[118px] w-full object-cover"
      />
      <div className="p-5">
        <p className="eyebrow text-[0.55rem] text-ocean">Slow travel</p>
        <h3 className="mt-2 font-display text-[1.6rem] font-semibold leading-[1.02] tracking-tight text-ink">
          The art of going a little slower
        </h3>
        <p className="mt-3 text-[10px] leading-relaxed text-ink/55">
          A field guide to quiet roads, long lunches, and leaving room for the unexpected.
        </p>
      </div>
      <div className="absolute -bottom-5 right-3 flex items-center gap-2 rounded-xl bg-ocean-dark px-3 py-2.5 text-[10px] font-semibold text-white shadow-lift">
        <img src="images/wavestash-icon.png" alt="" className="h-6 w-6 rounded-md" />
        Saved to WaveStash
        <Check className="h-3.5 w-3.5 text-[#73e0d3]" />
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 sm:left-auto sm:right-[2%] sm:translate-x-0">
      <div className="rounded-[43px] border-[7px] border-[#082c43] bg-[#082c43] p-[3px] shadow-phone">
        <div className="w-[238px] sm:w-[264px] xl:w-[278px]">
          <WaveStashLibraryScreen />
        </div>
      </div>
      <div className="absolute -right-1 bottom-[88px] flex items-center gap-2 rounded-2xl border border-ocean/10 bg-white px-3.5 py-3 text-[11px] font-bold text-ocean-dark shadow-lift sm:-right-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mist text-ocean">
          <WifiOff className="h-3.5 w-3.5" />
        </span>
        Ready offline
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mist">
      <svg
        className="pointer-events-none absolute -right-24 top-8 h-[540px] w-[700px] text-ocean/10"
        viewBox="0 0 700 540"
        fill="none"
        aria-hidden="true"
      >
        <path d="M-10 114C115 19 212 221 345 113s250-61 377 16" stroke="currentColor" strokeWidth="1.4" />
        <path d="M-26 146C99 51 196 253 329 145s250-61 377 16" stroke="currentColor" strokeWidth="1.4" />
        <path d="M-42 178C83 83 180 285 313 177s250-61 377 16" stroke="currentColor" strokeWidth="1.4" />
        <path d="M-58 210C67 115 164 317 297 209s250-61 377 16" stroke="currentColor" strokeWidth="1.4" />
      </svg>

      <div className="site-container relative grid items-center gap-10 pb-16 pt-14 sm:pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-5 lg:pb-20 lg:pt-20">
        <div className="relative z-30 max-w-[620px]">
          <div className="hero-enter flex items-center gap-2.5 text-ocean">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
              <Globe2 className="h-4 w-4" />
            </span>
            <p className="eyebrow">Your web, ready offline</p>
          </div>

          <h1 className="hero-enter hero-enter-delay-1 mt-6 font-display text-[3.65rem] font-medium leading-[0.91] tracking-[-0.055em] text-ocean-dark sm:text-[4.75rem] lg:text-[4.8rem] xl:text-[5.45rem]">
            Save the web.
            <span className="mt-2 block italic text-ocean">Read it anywhere.</span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mt-7 max-w-[535px] text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            Save the articles and web pages you want to read. WaveStash keeps them in a clean personal library, ready whenever you are—even without an internet connection.
          </p>

          <div className="hero-enter hero-enter-delay-2 mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <GooglePlayButton className="w-full justify-center sm:w-auto" />
            <Button
              asChild
              variant="ghost"
              className="group h-14 rounded-2xl px-5 font-semibold text-ocean-dark hover:bg-white/80"
            >
              <a href="#how-it-works">
                See how it works
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>

          <div className="hero-enter hero-enter-delay-3 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ink/60">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-ocean" /> Free to download
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-ocean" /> No account required
            </span>
          </div>
        </div>

        <div className="hero-enter hero-enter-delay-2 relative mx-auto h-[570px] w-full max-w-[570px] sm:h-[640px] lg:mx-0">
          <div className="absolute left-1/2 top-[44px] h-[450px] w-[450px] -translate-x-1/2 rounded-full border border-ocean/10 sm:left-auto sm:right-[-70px] sm:translate-x-0" />
          <div className="absolute left-1/2 top-[86px] h-[366px] w-[366px] -translate-x-1/2 rounded-full border border-ocean/10 sm:left-auto sm:right-[-28px] sm:translate-x-0" />
          <BrowserArticle />
          <PhoneMockup />
          <div className="absolute left-0 top-[104px] z-30 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[10px] font-semibold text-ink shadow-lift sm:hidden">
            <Share2 className="h-4 w-4 text-ocean" />
            Shared from your browser
          </div>
          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-ocean/10 bg-white px-4 py-2 text-[10px] font-semibold text-ink/60 shadow-sm sm:bottom-3 sm:left-0 sm:translate-x-0">
            <span className="h-2 w-2 rounded-full bg-[#28bca8]" />
            On your device. On your terms.
          </div>
        </div>
      </div>

      <div className="border-y border-ocean-dark/10 bg-white/70">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ocean-dark">
            One home for what you want to read
          </p>
          <p className="text-sm text-ink/55">Articles <span className="mx-2 text-ocean">·</span> Guides <span className="mx-2 text-ocean">·</span> Recipes <span className="mx-2 text-ocean">·</span> Tutorials <span className="mx-2 text-ocean">·</span> Research</p>
        </div>
      </div>
    </section>
  );
}
