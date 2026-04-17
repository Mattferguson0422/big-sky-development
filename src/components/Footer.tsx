import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-surface-light">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Big Sky Development"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Big Sky Development LLC
          </span>
        </div>
        <a
          href="mailto:contact@bigskydevelopment.com"
          className="text-text-muted hover:text-primary text-sm transition-colors"
        >
          contact@bigskydevelopment.com
        </a>
      </div>
    </footer>
  );
}
