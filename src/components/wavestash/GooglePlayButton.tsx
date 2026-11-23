import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=app.wavestash.reader";

export function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 36"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path d="M2.4 1.8 19.3 18 2.4 34.2C1 33.3.5 32.2.5 30.5v-25C.5 3.8 1 2.7 2.4 1.8Z" fill="#38D6C5" />
      <path d="m19.3 18 5.2-4.9 5.8 3.3c2.5 1.4 2.5 3.8 0 5.2l-5.8 3.3-5.2-4.9v-2Z" fill="#FFC857" />
      <path d="M2.4 1.8c.9-.6 2-.6 3.3.1l18.8 11.2-5.2 4.9L2.4 1.8Z" fill="#55B9F3" />
      <path d="m19.3 18 5.2 4.9L5.7 34.1c-1.3.7-2.4.7-3.3.1L19.3 18Z" fill="#F0647C" />
    </svg>
  );
}

type GooglePlayButtonProps = {
  className?: string;
  label?: string;
  showArrow?: boolean;
};

export function GooglePlayButton({
  className,
  label = "Get WaveStash on Google Play",
  showArrow = true,
}: GooglePlayButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "group h-14 gap-2.5 rounded-2xl bg-ocean-dark px-3 text-xs font-semibold text-white shadow-lift hover:bg-[#0a4565] min-[360px]:px-5 min-[360px]:text-[0.95rem] sm:gap-3",
        className,
      )}
    >
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
        <GooglePlayIcon className="h-7 w-6 shrink-0" />
        <span>{label}</span>
        {showArrow && (
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </a>
    </Button>
  );
}
