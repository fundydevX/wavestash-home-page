import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  CloudOff,
  EyeOff,
  Highlighter,
  NotebookPen,
  ShieldCheck,
  UserRoundX,
  Wifi,
} from "lucide-react";
import { GooglePlayButton } from "./GooglePlayButton";

const privacyPoints = [
  {
    icon: UserRoundX,
    title: "No account required",
    text: "Start building your reading library without signing up.",
  },
  {
    icon: EyeOff,
    title: "No advertisements",
    text: "A clean reading experience without ads competing for attention.",
  },
  {
    icon: CloudOff,
    title: "Your library stays local",
    text: "Your personal reading library is stored locally on your device.",
  },
  {
    icon: ShieldCheck,
    title: "Reading, not tracking",
    text: "WaveStash is designed around personal reading rather than tracking users.",
  },
];

export function ProPrivacy() {
  return (
    <>
      <section id="pro" className="section-pad bg-paper">
        <div className="site-container">
          <div className="rounded-[32px] border border-ocean-dark/10 bg-white px-6 py-10 shadow-soft sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
              <div>
                <div className="flex items-center gap-2 text-ocean">
                  <BadgeCheck className="h-5 w-5" />
                  <p className="eyebrow">WaveStash Pro</p>
                </div>
                <h2 className="section-title mt-4 text-ocean-dark">
                  One upgrade.
                  <span className="block italic text-ocean">Yours for good.</span>
                </h2>
                <p className="mt-6 max-w-[540px] text-base leading-7 text-ink/60">
                  WaveStash is free to download. When you want unlimited highlights and notes, Pro is available as a simple one-time purchase—not a subscription.
                </p>
                <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-xs font-bold text-ocean-dark">
                  <Check className="h-4 w-4 text-ocean" />
                  No subscription. No recurring bill.
                </div>
              </div>

              <div className="border-t border-ink/10 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Pro unlocks</p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-ocean">
                    <Highlighter className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-ink">Unlimited highlighting</p>
                    <p className="mt-0.5 text-xs text-ink/50">Keep every passage that matters.</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-ocean">
                    <NotebookPen className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-ink">Unlimited notes</p>
                    <p className="mt-0.5 text-xs text-ink/50">Make room for every thought.</p>
                  </div>
                </div>
                <GooglePlayButton className="mt-8 w-full justify-center" label="Download WaveStash free" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="section-pad border-t border-ink/10 bg-white">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow text-ocean">Privacy by design</p>
              <h2 className="section-title mt-4 max-w-[680px] text-ocean-dark">
                Your reading belongs to you.
              </h2>
            </div>
            <p className="max-w-[450px] text-base leading-7 text-ink/60 lg:justify-self-end">
              WaveStash is built to be a personal reading place, not another account to manage or feed to keep scrolling.
            </p>
          </div>

          <div className="mt-12 grid gap-8 border-y border-ink/10 py-9 sm:grid-cols-2 lg:grid-cols-4">
            {privacyPoints.map((point) => (
              <div key={point.title}>
                <point.icon className="h-6 w-6 text-ocean" strokeWidth={1.7} />
                <h3 className="mt-4 text-sm font-bold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/55">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 text-xs leading-5 text-ink/50 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex max-w-[780px] items-start gap-2">
              <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
              Saving webpages, downloading content or book covers, and optional online text-to-speech require internet access. Your saved library is then ready offline.
            </p>
            <a
              href="https://fundydevx.github.io/wavestashprivacypolicy/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg font-bold text-ocean hover:text-ocean-dark"
            >
              Read the privacy policy
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
