export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <img
          src="/images/logo.png"
          alt="Big Sky Development"
          className="w-48 h-48 mx-auto mb-8 object-contain drop-shadow-2xl"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Big Sky Development
        </h1>
        <p className="text-xl md:text-2xl text-text mb-10">
          Custom Software Solutions
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
