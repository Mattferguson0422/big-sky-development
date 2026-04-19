# Big Sky Development Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page portfolio site for Big Sky Development LLC at bigskydevelopment.us with a contact form powered by Resend.

**Architecture:** Next.js 15 App Router with Tailwind CSS v4, single page composed of section components (Nav, Hero, About, FeaturedWork, ContactForm, Footer). One API route handles contact form submissions via Resend. Deployed to Cloudflare Pages.

**Tech Stack:** Next.js 15, Tailwind CSS 4, Resend SDK, TypeScript

---

## File Structure

```
big-sky-development/
├── public/
│   ├── images/
│   │   ├── hero.png              (cropped from hero3.png — sunset mountain scene)
│   │   ├── logo.png              (cropped from hero3.png — mountain icon + text)
│   │   ├── logo-icon.png         (cropped from hero3.png — mountain icon only, for nav/favicon)
│   │   └── gfg-screenshot.png    (from GFG screenshots — best one for showcase)
│   └── favicon.ico               (generated from logo-icon.png)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── app/globals.css
├── .env.example
├── .env.local                    (not committed)
├── .gitignore
├── next.config.ts
├── postcss.config.mjs
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

---

### Task 1: Scaffold Next.js Project and Configure Tailwind v4

**Files:**
- Create: entire project scaffold at `/Users/matt/development/big-sky-development/`
- Modify: `package.json`, `postcss.config.mjs`, `src/app/globals.css`, `src/app/layout.tsx`
- Create: `.env.example`, `CLAUDE.md`

- [ ] **Step 1: Create the Next.js project**

```bash
cd /Users/matt/development
npx create-next-app@latest big-sky-development --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Answer prompts: use npm as package manager.

- [ ] **Step 2: Verify Tailwind CSS v4 is installed (create-next-app should install v4 by default now)**

```bash
cd /Users/matt/development/big-sky-development
cat package.json | grep tailwind
```

Expected: `tailwindcss` at v4.x and `@tailwindcss/postcss`. If v3 was installed, upgrade:

```bash
npm install tailwindcss@latest @tailwindcss/postcss@latest
```

- [ ] **Step 3: Verify postcss.config.mjs uses Tailwind v4 plugin**

The file should contain:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

If it has the old v3 config (tailwindcss + autoprefixer), replace it with the above.

- [ ] **Step 4: Replace globals.css with theme configuration**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-bg: #1a0e08;
  --color-surface: #2a1a10;
  --color-surface-light: #3d2a1a;
  --color-primary: #d4731a;
  --color-primary-hover: #e8a530;
  --color-text: #f5e6d3;
  --color-text-muted: #8a7260;

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

- [ ] **Step 5: Update root layout**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Big Sky Development — Custom Software Solutions",
  description:
    "Montana-based software development company building web, mobile, and API solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Create .env.example**

```
RESEND_API_KEY=
```

- [ ] **Step 7: Create CLAUDE.md**

```markdown
# Big Sky Development Website

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (postcss plugin, @theme directive for tokens)
- Resend for contact form emails

## Dev
- `npm run dev` — starts on localhost:3000
- `npm run build` — production build

## Structure
- Single-page site: all sections in `src/components/`
- One API route: `src/app/api/contact/route.ts`
- Assets in `public/images/`

## Deployment
- Target: Cloudflare Pages
- Domain: bigskydevelopment.us
```

- [ ] **Step 8: Create a minimal page.tsx placeholder and verify dev server runs**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-primary">Big Sky Development</h1>
    </main>
  );
}
```

```bash
cd /Users/matt/development/big-sky-development && npm run dev
```

Open http://localhost:3000 — should see "Big Sky Development" in orange (#d4731a) on dark brown background.

- [ ] **Step 9: Initialize git repo and make first commit**

```bash
cd /Users/matt/development/big-sky-development
git init
git add .
git commit -m "chore: scaffold Next.js 15 + Tailwind v4 project"
```

---

### Task 2: Prepare Image Assets

**Files:**
- Create: `public/images/hero.png`, `public/images/logo.png`, `public/images/logo-icon.png`, `public/images/gfg-screenshot.png`

- [ ] **Step 1: Create images directory**

```bash
mkdir -p /Users/matt/development/big-sky-development/public/images
```

- [ ] **Step 2: Copy hero image (bottom portion of hero3.png — the sunset mountain scene)**

The hero3.png has two parts: top is logo, bottom is hero scene. We need to split them. Use `sips` (macOS built-in) to crop:

```bash
# Get dimensions first
sips -g pixelHeight -g pixelWidth /Users/matt/Documents/big-sky-development/artwork/hero3.png
```

Then crop the bottom ~60% for the hero and the top ~40% for the logo. Adjust pixel values based on actual dimensions:

```bash
# Copy the full image as hero for now — we'll use CSS to position it
cp /Users/matt/Documents/big-sky-development/artwork/hero3.png /Users/matt/development/big-sky-development/public/images/hero.png
```

- [ ] **Step 3: Copy the standalone logo (logo4.png works as a standalone logo)**

```bash
cp /Users/matt/Documents/big-sky-development/artwork/logo4.png /Users/matt/development/big-sky-development/public/images/logo.png
```

- [ ] **Step 4: Copy a GFG screenshot for the featured work section**

Pick the best showcase screenshot (dashboard is a good overview):

```bash
cp /Users/matt/development/golfforegroups/local-assets/screenshots/dashboard.png /Users/matt/development/big-sky-development/public/images/gfg-screenshot.png
```

- [ ] **Step 5: Copy GFG logo**

```bash
cp /Users/matt/development/golfforegroups/backend/public/images/logo.png /Users/matt/development/big-sky-development/public/images/gfg-logo.png
```

- [ ] **Step 6: Commit assets**

```bash
cd /Users/matt/development/big-sky-development
git add public/images/
git commit -m "chore: add branding and product images"
```

---

### Task 3: Build Nav Component

**Files:**
- Create: `src/components/Nav.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Nav.tsx**

```tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Big Sky Development"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-lg font-semibold text-white hidden sm:inline">
            Big Sky Development
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-sm border-t border-surface-light px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-text-muted hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Add Nav to page.tsx**

Update `src/app/page.tsx`:

```tsx
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">Big Sky Development</h1>
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`, check:
- Nav is transparent at top
- Nav gets dark background on scroll
- Mobile hamburger works at narrow viewport
- Links are visible on desktop

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.tsx src/app/page.tsx
git commit -m "feat: add navigation component with scroll effect and mobile menu"
```

---

### Task 4: Build Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero.tsx**

```tsx
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
```

- [ ] **Step 2: Update page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check: hero fills viewport, background image visible behind overlay, text is legible, CTA button scrolls (nowhere yet), responsive text sizing works.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add hero section with background image and CTA"
```

---

### Task 5: Build About Section

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create About.tsx**

```tsx
const capabilities = [
  {
    title: "Sports & Recreation",
    description:
      "Platforms that bring players together and keep the game moving.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Healthcare Management",
    description:
      "Practice management tools that streamline operations and patient relationships.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Digital Safety",
    description:
      "Solutions that protect users and promote safer online experiences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Software Built for the Real World
        </h2>
        <p className="text-lg text-text-muted text-center max-w-2xl mx-auto mb-16">
          We&apos;re a Montana-based software company that builds web, mobile, and
          API solutions. We focus on solving real problems with clean, reliable
          software that&apos;s built to last.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-surface rounded-xl p-8 border border-surface-light/50 hover:border-primary/30 transition-colors"
            >
              <div className="text-primary mb-4">{cap.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {cap.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check: section heading centered, 3 cards in a row on desktop, stacked on mobile, earthy colors match palette, icons render.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/app/page.tsx
git commit -m "feat: add about section with capability cards"
```

---

### Task 6: Build Featured Work Section

**Files:**
- Create: `src/components/FeaturedWork.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create FeaturedWork.tsx**

```tsx
import Image from "next/image";

const features = [
  "Trip planning & attendee management",
  "Live hole-by-hole scoring with leaderboards",
  "30,000+ real courses with full scorecard data",
  "Available on iOS, Android, and web",
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Featured Work
        </h2>
        <p className="text-text-muted text-center mb-16">
          Products we&apos;ve built and shipped
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: description */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/gfg-logo.png"
                alt="Golf Fore Groups"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold text-white">
                Golf Fore Groups
              </h3>
            </div>

            <p className="text-text leading-relaxed mb-6">
              The first app built specifically for golf trip management. Plan
              trips, track scores in real time, and compete with friends across
              13 game formats.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-muted">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://golfforegroups.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Visit Site
              </a>
            </div>
          </div>

          {/* Right: screenshot in phone frame */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl border-2 border-surface-light">
              <div className="w-full h-full rounded-[2.25rem] overflow-hidden bg-surface-light">
                <Image
                  src="/images/gfg-screenshot.png"
                  alt="Golf Fore Groups app screenshot"
                  fill
                  className="object-cover object-top rounded-[2.25rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add FeaturedWork to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check: GFG logo + name, description, feature bullets with check icons, phone frame mockup with screenshot, "Visit Site" button, responsive stacking on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/components/FeaturedWork.tsx src/app/page.tsx
git commit -m "feat: add featured work section showcasing Golf Fore Groups"
```

---

### Task 7: Build Contact Form (Frontend)

**Files:**
- Create: `src/components/ContactForm.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create ContactForm.tsx**

```tsx
"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-surface rounded-xl p-12 border border-primary/30">
            <svg
              className="w-16 h-16 text-primary mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-3">
              Message Sent
            </h3>
            <p className="text-text-muted">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Have a project in mind?
        </h2>
        <p className="text-text-muted text-center mb-12">
          Let&apos;s talk about what we can build together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg text-text placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg text-text placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg text-text placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-lg"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add ContactForm to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <ContactForm />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check: form renders with all fields, validation works (try submit with empty fields), styling matches palette, responsive on mobile, "Sending..." state on submit (will 404 for now — API route not built yet, that's fine).

- [ ] **Step 4: Commit**

```bash
git add src/components/ContactForm.tsx src/app/page.tsx
git commit -m "feat: add contact form with client-side validation and submit handling"
```

---

### Task 8: Build Contact API Route (Resend)

**Files:**
- Create: `src/app/api/contact/route.ts`

- [ ] **Step 1: Install Resend SDK**

```bash
cd /Users/matt/development/big-sky-development
npm install resend
```

- [ ] **Step 2: Create .env.local with Resend API key**

```bash
echo "RESEND_API_KEY=re_YOUR_KEY_HERE" > /Users/matt/development/big-sky-development/.env.local
```

The user will need to replace `re_YOUR_KEY_HERE` with their actual Resend API key. For now, use the test key or a real one if available.

- [ ] **Step 3: Create the API route**

Create `src/app/api/contact/route.ts`:

```ts
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 60_000;
const rateLimit = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip);
  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
    return true;
  }
  rateLimit.set(ip, now);
  // Clean up old entries periodically
  if (rateLimit.size > 1000) {
    const cutoff = now - RATE_LIMIT_WINDOW;
    for (const [key, time] of rateLimit) {
      if (time < cutoff) rateLimit.delete(key);
    }
  }
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Please wait a moment before sending another message." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: "Big Sky Development <noreply@bigskydevelopment.us>",
      to: ["contact@bigskydevelopment.us"],
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 4: Test the API route**

With dev server running:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello from curl"}'
```

Expected: `{"success":true}` if Resend API key is valid, or a Resend error if using placeholder key. Either way, the route should respond without crashing.

Also test validation:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"","email":"bad","message":""}'
```

Expected: `{"error":"All fields are required."}` with status 400.

- [ ] **Step 5: Commit**

```bash
git add src/app/api/contact/route.ts package.json package-lock.json .env.example
git commit -m "feat: add contact form API route with Resend integration"
```

---

### Task 9: Build Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Footer.tsx**

```tsx
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
          href="mailto:contact@bigskydevelopment.us"
          className="text-text-muted hover:text-primary text-sm transition-colors"
        >
          contact@bigskydevelopment.us
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to page.tsx — final complete version**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check: footer at bottom, logo + copyright, email link works, responsive alignment.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: add footer with copyright and contact email"
```

---

### Task 10: End-to-End Verification and Polish

**Files:**
- Possibly modify: any component that needs adjustment

- [ ] **Step 1: Full scroll-through test**

Run `npm run dev` and scroll through the entire page:
- Nav: transparent → dark on scroll, mobile menu works
- Hero: full viewport, background image, logo, tagline, CTA button
- About: heading, body text, 3 capability cards
- Featured Work: GFG logo, description, features, phone mockup, link
- Contact: form fields, validation, submit flow
- Footer: logo, copyright, email
- All anchor links (#about, #work, #contact) scroll smoothly

- [ ] **Step 2: Responsive check**

Resize browser to check:
- Mobile (< 768px): everything stacks, hamburger nav, text sizes down
- Tablet (768-1024px): cards may go 2-up or stack
- Desktop (> 1024px): full layout

- [ ] **Step 3: Build check**

```bash
cd /Users/matt/development/big-sky-development && npm run build
```

Expected: successful build with no errors.

- [ ] **Step 4: Fix any issues found**

Address any visual or build issues. Common ones:
- Image sizing/aspect ratio needing adjustment
- Color contrast issues
- Tailwind class typos (classes not generating)

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: polish and verify end-to-end site"
```

---

### Task 11: Push to GitHub

**Files:**
- None (git operations only)

- [ ] **Step 1: Create GitHub repo**

```bash
cd /Users/matt/development/big-sky-development
gh repo create Mattferguson0422/big-sky-development --public --source=. --push
```

- [ ] **Step 2: Verify repo is on GitHub**

```bash
gh repo view Mattferguson0422/big-sky-development --web
```

- [ ] **Step 3: Commit**

Already pushed in step 1. Verify all commits are present:

```bash
git log --oneline
```
