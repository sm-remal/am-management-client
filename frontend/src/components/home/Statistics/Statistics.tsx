// "use client";

// import { useEffect, useRef, useState } from "react";
// import { usePublicSettings } from "@/features/settings/usePublicSettings";

// function Counter({
//   end,
//   suffix = "",
//   duration = 2000,
// }: {
//   end: number;
//   suffix?: string;
//   duration?: number;
// }) {
//   const [count, setCount] = useState(0);

//   const ref = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number | null>(null);

//   useEffect(() => {
//     const element = ref.current;

//     if (!element) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];

//         if (entry.isIntersecting) {
//           // আগের animation থাকলে cancel
//           if (animationRef.current !== null) {
//             cancelAnimationFrame(animationRef.current);
//           }

//           // আবার 0 থেকে শুরু
//           setCount(0);

//           let startTime: number | null = null;

//           const animate = (timestamp: number) => {
//             if (startTime === null) {
//               startTime = timestamp;
//             }

//             const elapsed = timestamp - startTime;

//             const progress = Math.min(elapsed / duration, 1);

//             // Smooth ease-out animation
//             const ease = 1 - Math.pow(1 - progress, 4);

//             const current = ease * end;

//             // Decimal value হলে 1 decimal দেখাবে
//             const formattedValue =
//               end % 1 !== 0 ? Number(current.toFixed(1)) : Math.round(current);

//             setCount(formattedValue);

//             // Animation শেষ না হওয়া পর্যন্ত চলবে
//             if (progress < 1) {
//               animationRef.current = requestAnimationFrame(animate);
//             } else {
//               animationRef.current = null;
//             }
//           };

//           animationRef.current = requestAnimationFrame(animate);
//         } else {
//           // Section viewport থেকে বের হয়ে গেলে
//           // animation বন্ধ করে counter 0 করে দিচ্ছি

//           if (animationRef.current !== null) {
//             cancelAnimationFrame(animationRef.current);
//             animationRef.current = null;
//           }

//           setCount(0);
//         }
//       },
//       {
//         // Section-এর 40% viewport-এ আসলে animation শুরু হবে
//         threshold: 0.4,
//       },
//     );

//     observer.observe(element);

//     return () => {
//       observer.disconnect();

//       if (animationRef.current !== null) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [end, duration]);

//   return (
//     <div
//       ref={ref}
//       className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight"
//     >
//       {count}
//       {suffix}
//     </div>
//   );
// }

// export default function Statistics() {
//   const { achievements } = usePublicSettings();

//   return (
//     <section className="py-14 md:py-8 bg-slate-50/20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
//           <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary lg:text-4xl">
//             {achievements.title}
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
//             {achievements.description}
//           </p>
//         </div>

//         {/* Stats Row */}
//         <div className="flex flex-wrap items-center justify-center gap-y-10 md:mb-8">
//           {achievements.items.map((stat, idx) => (
//             <div key={idx} className="flex items-center">
//               <div className="text-center px-6 md:px-8 lg:px-8">
//                 {/* Counter */}
//                 <Counter
//                   end={stat.value}
//                   suffix={stat.suffix}
//                   duration={2000}
//                 />

//                 {/* Label */}
//                 <div className="mt-2 text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </div>

//               {/* Divider */}
//               {idx < achievements.items.length - 1 && (
//                 <div className="hidden sm:block text-3xl md:text-4xl font-light text-slate-300 select-none">
//                   /
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Building2, Wallet } from "lucide-react";
import { usePublicSettings } from "@/features/settings/usePublicSettings";

const statIcons = [Award, Building2, Briefcase, Wallet];

function Counter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
          }

          setCount(0);

          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (startTime === null) {
              startTime = timestamp;
            }

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = ease * end;
            const formattedValue =
              end % 1 !== 0 ? Number(current.toFixed(1)) : Math.round(current);

            setCount(formattedValue);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              animationRef.current = null;
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        } else {
          if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
          }

          setCount(0);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div
      ref={ref}
      className="text-4xl font-black tracking-tight text-secondary sm:text-5xl"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function Statistics() {
  const { achievements } = usePublicSettings();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_52%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="-mt-6 text-3xl font-bold text-primary sm:text-4xl lg:text-4xl">
            {achievements.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {achievements.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {achievements.items.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-md border border-slate-200 bg-white px-5 py-7 text-center shadow-[0_16px_40px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-secondary" />

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-slate-50 text-primary ring-1 ring-slate-200 transition-colors duration-300 group-hover:bg-orange-50 group-hover:text-secondary">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <Counter end={stat.value} suffix={stat.suffix} duration={2000} />

                <div className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-primary sm:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

