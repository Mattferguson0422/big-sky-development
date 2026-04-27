import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Recognition from "@/components/Recognition";
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
        <Recognition />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
