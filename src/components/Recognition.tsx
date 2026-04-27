export default function Recognition() {
  return (
    <section id="recognition" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Recognition
        </h2>
        <p className="text-text-muted text-center mb-16">
          Work that&rsquo;s been noticed.
        </p>

        <div className="max-w-3xl mx-auto bg-surface rounded-xl p-8 md:p-10 border border-surface-light/50 hover:border-primary/30 transition">
          <div className="text-primary text-xs uppercase tracking-widest mb-4">
            Press
          </div>

          <blockquote className="text-white text-xl md:text-2xl font-semibold leading-snug mb-4">
            &ldquo;Featured among the best job ads of 2018.&rdquo;
          </blockquote>

          <p className="text-text leading-relaxed mb-6">
            Matt&rsquo;s work on McAfee&rsquo;s career site was highlighted in
            Ongig&rsquo;s roundup of the year&rsquo;s most effective job ads
            &mdash; recognized for design and candidate experience.
          </p>

          <p className="text-text-muted text-sm mb-8">
            Ongig &mdash; &ldquo;Best Job Ads in 2018&rdquo;
          </p>

          <a
            href="https://blog.ongig.com/job-ads/best-job-ads-examples-in-2018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Read the article &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
