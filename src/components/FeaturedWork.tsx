import Image from "next/image";

type Project = {
  name: string;
  logo?: string;
  description: string;
  highlights: string[];
  href: string;
};

const projects: Project[] = [
  {
    name: "Golf Fore Groups",
    logo: "/images/gfg-logo.png",
    description:
      "The first app built specifically for golf trip management. Plan trips, track scores in real time, and compete with friends across 13 game formats.",
    highlights: [
      "Trip planning & attendee management",
      "Live hole-by-hole scoring with leaderboards",
      "30,000+ real courses with full scorecard data",
      "Available on iOS, Android, and web",
    ],
    href: "https://golfforegroups.com",
  },
  {
    name: "Social Media Safety",
    description:
      "The education and speaking platform for Ronna Glickman, helping parents and schools protect teens from online risks. We designed and built it so she can keep her essays and resources current herself.",
    highlights: [
      "Speaking & consultation requests",
      "Self-serve essay publishing",
      "Testimonials & case studies",
      "Fast, SEO-optimized Next.js build",
    ],
    href: "https://socialmediasafety.education",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Featured Work
        </h2>
        <p className="text-text-muted text-center mb-16">
          Products we&apos;ve built and shipped
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col bg-bg rounded-xl p-8 border border-surface-light/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-light">
                    <svg
                      className="w-7 h-7 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              </div>

              <p className="text-text leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3 mb-8">
                {project.highlights.map((item) => (
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
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex self-start mt-auto bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
