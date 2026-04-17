import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Featured Work
        </h2>
        <p className="text-text-muted text-center mb-16">
          Products we&apos;ve built and shipped
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/gfg-logo.png"
                alt="Golf Fore Groups logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold text-white">Golf Fore Groups</h3>
            </div>

            <p className="text-text leading-relaxed mb-6">
              The first app built specifically for golf trip management. Plan trips, track scores in real time, and compete with friends across 13 game formats.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Trip planning & attendee management",
                "Live hole-by-hole scoring with leaderboards",
                "30,000+ real courses with full scorecard data",
                "Available on iOS, Android, and web",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    />
                  </svg>
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://golfforegroups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Visit Site
            </a>
          </div>

          {/* Right side — phone frame mockup */}
          <div className="flex-1 flex justify-center">
            <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl border-2 border-surface-light">
              <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-surface-light">
                <Image
                  src="/images/gfg-screenshot.png"
                  fill
                  className="object-cover object-top rounded-[2.25rem]"
                  alt="Golf Fore Groups app screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
