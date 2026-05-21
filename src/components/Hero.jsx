import { ArrowRight } from "lucide-react";
// Replace this placeholder with final Darryl Creative House hero photography.
import heroImage from "../assets/hero-creative-house.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[min(94svh,62rem)] scroll-mt-28 overflow-hidden">
      <img
        src={heroImage}
        alt="Warm interior studio with lifestyle decor and creative materials"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,25,21,0.84)_0%,rgba(30,25,21,0.58)_42%,rgba(30,25,21,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ivory via-ivory/40 to-transparent" />

      <div className="section-shell relative flex min-h-[min(94svh,62rem)] items-center pb-24 pt-40 sm:pb-32">
        <div className="max-w-3xl animate-[fade-in_900ms_ease_both]">
          <p className="mb-6 inline-flex rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ivory backdrop-blur">
            A multidisciplinary creative house
          </p>
          <h1 className="font-display text-5xl font-medium leading-[0.92] text-ivory sm:text-7xl lg:text-[6.7rem]">
            Three Brands. One Creative Vision.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/80 sm:text-lg">
            Interiors, heritage-inspired decor, and creative consulting for beautiful spaces, meaningful
            experiences, and timeless creative direction.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#brands" className="button-primary bg-ivory text-charcoal hover:bg-linen">
              Explore Our Brands
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="button-secondary">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
