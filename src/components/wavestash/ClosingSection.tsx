import { ArrowUpRight, Check } from "lucide-react";
import { GooglePlayButton } from "./GooglePlayButton";

export function ClosingSection() {
  return (
    <>
      <section id="download" className="relative overflow-hidden bg-ocean-dark py-20 text-white sm:py-24">
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full text-white/10"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-90 284c190-160 331 105 522-31s312-73 480 28 334-29 576-140" stroke="currentColor" strokeWidth="1.2" />
          <path d="M-90 316c190-160 331 105 522-31s312-73 480 28 334-29 576-140" stroke="currentColor" strokeWidth="1.2" />
          <path d="M-90 348c190-160 331 105 522-31s312-73 480 28 334-29 576-140" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <div className="site-container relative text-center">
          <img src="images/wavestash-icon.png" alt="" className="mx-auto h-16 w-16 rounded-[20px] shadow-lift" />
          <p className="eyebrow mt-7 text-[#73e0d3]">Your next good read is out there</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Save it now. Read it
            <span className="italic text-[#83dce2]"> anywhere.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[570px] text-base leading-7 text-white/65">
            Bring your favorite corners of the web together in a library that’s ready when you are.
          </p>
          <GooglePlayButton className="mt-8 bg-white text-ocean-dark shadow-lift hover:bg-mist" />
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-white/55">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#73e0d3]" />Free download</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#73e0d3]" />Made for Android</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#73e0d3]" />No account required</span>
          </div>
        </div>
      </section>

      <footer className="bg-ocean-dark text-white">
        <div className="site-container border-t border-white/15 py-9">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <a href="#top" className="flex w-fit items-center gap-3 rounded-xl">
              <img src="images/wavestash-icon.png" alt="" className="h-10 w-10 rounded-xl" />
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight">WaveStash</p>
                <p className="text-[10px] text-white/50">Your private read-it-later library.</p>
              </div>
            </a>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/60" aria-label="Footer navigation">
              <a href="#how-it-works" className="rounded hover:text-white">How it works</a>
              <a href="#reading" className="rounded hover:text-white">Reading</a>
              <a href="#more-than-articles" className="rounded hover:text-white">More than articles</a>
              <a href="#pro" className="rounded hover:text-white">Pro</a>
              <a
                href="https://fundydevx.github.io/wavestashprivacypolicy/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 rounded hover:text-white"
              >
                Privacy <ArrowUpRight className="h-3 w-3" />
              </a>
            </nav>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} WaveStash. Save something worth reading.</p>
            <p>Offline web reading, thoughtfully made for Android.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
