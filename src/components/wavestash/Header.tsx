import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GooglePlayButton } from "./GooglePlayButton";

const navigation = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Reading", href: "#reading" },
  { label: "Your library", href: "#library" },
  { label: "Beyond the web", href: "#more-than-articles" },
  { label: "Pro", href: "#pro" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ocean-dark/10 bg-white/95 backdrop-blur-md">
      <div className="site-container flex h-[76px] items-center justify-between gap-5">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 rounded-xl"
          aria-label="WaveStash home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/wavestash-icon.png"
            alt=""
            className="h-11 w-11 rounded-[13px] shadow-sm"
          />
          <span className="font-display text-[1.75rem] font-semibold tracking-[-0.04em] text-ocean-dark">
            WaveStash
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md text-[0.84rem] font-semibold text-ink/70 transition-colors hover:text-ocean"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GooglePlayButton
            label="Get the app"
            showArrow={false}
            className="h-11 rounded-xl px-4 text-sm shadow-none"
          />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-11 w-11 rounded-xl text-ocean-dark hover:bg-mist lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {menuOpen && (
        <div className="border-t border-ocean-dark/10 bg-white px-5 pb-6 pt-3 shadow-soft lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3.5 text-base font-semibold text-ink hover:bg-mist"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <GooglePlayButton
              className="mt-3 w-full"
              label="Get WaveStash on Google Play"
              showArrow={false}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
