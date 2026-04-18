export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        We Make Mountains Out of Molehills
      </h2>
      <p className="text-text-muted text-center max-w-2xl mx-auto mb-16">
        We build web, mobile, and API solutions that solve real problems. Clean, reliable
        software&nbsp;&mdash; built to last.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Card 1 — SaaS Platforms */}
        <div className="bg-surface rounded-xl p-8 border border-surface-light/50 hover:border-primary/30 transition">
          <svg
            className="w-8 h-8 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
          </svg>
          <h3 className="text-white font-semibold text-lg mb-2">SaaS Platforms</h3>
          <p className="text-text-muted">
            Subscription-based applications built for scale, from user management to analytics.
          </p>
        </div>

        {/* Card 2 — Content Management */}
        <div className="bg-surface rounded-xl p-8 border border-surface-light/50 hover:border-primary/30 transition">
          <svg
            className="w-8 h-8 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          <h3 className="text-white font-semibold text-lg mb-2">Content Management</h3>
          <p className="text-text-muted">
            Systems that organize, publish, and deliver content where it matters.
          </p>
        </div>

        {/* Card 3 — Web & SEO */}
        <div className="bg-surface rounded-xl p-8 border border-surface-light/50 hover:border-primary/30 transition">
          <svg
            className="w-8 h-8 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-.778.099-1.533.284-2.253" />
          </svg>
          <h3 className="text-white font-semibold text-lg mb-2">Web &amp; SEO</h3>
          <p className="text-text-muted">
            Performance-driven websites engineered for visibility and conversion.
          </p>
        </div>
      </div>
    </section>
  );
}
