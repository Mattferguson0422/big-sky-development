export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-[family-name:var(--font-montserrat)] uppercase text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-[0.3em]">
          Big Sky Development
        </h1>
        <p className="font-[family-name:var(--font-montserrat)] uppercase text-lg md:text-xl text-text-muted mb-10 tracking-[0.25em] font-light">
          Custom Software Solutions
        </p>
        <a
          href="#contact"
          className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg tracking-wide"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
