export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        Software Built for the Real World
      </h2>
      <p className="text-text-muted text-center max-w-2xl mx-auto mb-16">
        We&apos;re a Montana-based software company that builds web, mobile, and API solutions. We
        focus on solving real problems with clean, reliable software that&apos;s built to last.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Card 1 — Sports & Recreation */}
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
            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-white font-semibold text-lg mb-2">Sports &amp; Recreation</h3>
          <p className="text-text-muted">
            Platforms that bring players together and keep the game moving.
          </p>
        </div>

        {/* Card 2 — Healthcare Management */}
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
            <path d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          </svg>
          <h3 className="text-white font-semibold text-lg mb-2">Healthcare Management</h3>
          <p className="text-text-muted">
            Practice management tools that streamline operations and patient relationships.
          </p>
        </div>

        {/* Card 3 — Digital Safety */}
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
            <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <h3 className="text-white font-semibold text-lg mb-2">Digital Safety</h3>
          <p className="text-text-muted">
            Solutions that protect users and promote safer online experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
