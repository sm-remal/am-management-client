import { cn } from "@/lib/utils";

type TickerTapeProps = {
  items?: string[];
  label?: string;
  className?: string;
  itemClassName?: string;
  tone?: "signal" | "harbour";
  direction?: "left" | "right";
  tilt?: number;
  speedSeconds?: number;
};

const toneClassName: Record<NonNullable<TickerTapeProps["tone"]>, string> = {
  signal: "border-secondary/40 bg-secondary text-white shadow-[0_14px_35px_-18px_rgb(251_115_31/0.85)]",
  harbour: "border-white/15 bg-[var(--am-harbour)] text-white shadow-[0_14px_35px_-18px_rgb(15_36_71/0.9)]",
};

export default function TickerTape({
  items = [],
  label = "Ticker tape",
  className,
  itemClassName,
  tone = "signal",
  direction = "left",
  tilt = 0,
  speedSeconds = 36,
}: TickerTapeProps) {
  const tapeItems = items.length > 0 ? items : ["Quality", "Trust", "Service"];
  const repeatedItems = [...tapeItems, ...tapeItems];

  return (
    <div
      className={cn("relative overflow-hidden border-y py-2", toneClassName[tone], className)}
      style={{ transform: `rotate(${tilt}deg)` }}
      aria-label={label}
    >
      <div
        className={cn(
          "flex w-max min-w-full gap-8 whitespace-nowrap will-change-transform",
          direction === "right" ? "animate-[ticker-tape-right_linear_infinite]" : "animate-[ticker-tape-left_linear_infinite]",
        )}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {repeatedItems.map((item, index) => (
          <span
            className={cn(
              "inline-flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em] sm:text-sm",
              itemClassName,
            )}
            key={`${item}-${index}`}
          >
            {item}
            <span className="size-1.5 rounded-full bg-current opacity-55" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
