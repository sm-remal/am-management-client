export default function BusinessIntro() {
  return (
    <section className="md:py-16 py-10 bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* ========== LEFT COLUMN: Project Video ========== */}
          <div className="relative order-2 min-w-0 lg:order-1 lg:col-span-7 xl:col-span-7">
            <div className="relative mx-auto max-w-3xl lg:max-w-none">
              <div className="relative h-[340px] w-full overflow-hidden rounded-md bg-slate-900 shadow-xl sm:h-[420px] lg:h-[440px] xl:h-[480px]">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/business-intro.mp4"
                  title="AM Management project showcase video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>

          {/* ========== RIGHT COLUMN: Content ========== */}
          <div className="order-1 min-w-0 space-y-6 text-center md:text-left lg:order-2 lg:col-span-5 xl:col-span-5">
            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-[2.35rem] xl:text-[2.55rem]">
              WELCOME TO{" "} <br/>
              <span className="text-secondary">
                AM MANAGEMENT GROUP
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg leading-8 text-slate-600 md:text-justify">
              Established in 2012, AM Management Group is a dynamic and trusted
              Malaysian business conglomerate. With over a decade of operational
              excellence, we have built a solid foundation across Construction,
              Property Development, Facility Support, Agriculture, Retail, and
              Tourism services.
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              <li className="flex items-center justify-center gap-3 text-base text-slate-700 md:justify-start">
                <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>10+ Years of Industry Experience</span>
              </li>
              <li className="flex items-center justify-center gap-3 text-base text-slate-700 md:justify-start">
                <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>CIDB Registered & Fully Compliant</span>
              </li>
              <li className="flex items-center justify-center gap-3 text-base text-slate-700 md:justify-start">
                <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Multi-sector Expertise & Dedicated Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
