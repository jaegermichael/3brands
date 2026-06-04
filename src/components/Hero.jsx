import { ArrowRight } from "lucide-react";
// Replace this placeholder with final Muvheneki product/lifestyle photography.
import heroImage from "../assets/muvheneki-ritual-close.jpg";
import muvhenekiLogo from "../assets/muvheneki-logo.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[min(94svh,62rem)] scroll-mt-28 overflow-hidden">
      <img
        src={heroImage}
        alt="Candles and handmade lifestyle pieces in warm neutral tones"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,31,25,0.88)_0%,rgba(64,47,36,0.62)_48%,rgba(39,31,25,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ivory via-ivory/40 to-transparent" />

      <div className="section-shell relative flex min-h-[min(94svh,62rem)] items-center pb-24 pt-40 sm:pb-32">
        <div className="max-w-3xl animate-[fade-in_900ms_ease_both]">
          <img
            src={muvhenekiLogo}
            alt="Muvheneki logo"
            className="mb-6 h-20 w-20 rounded-full bg-ivory/90 object-contain p-3 shadow-soft sm:h-24 sm:w-24"
          />
          <p className="mb-6 inline-flex rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ivory backdrop-blur">
            The Briarcliff Group / Words that heal
          </p>
          <h1 className="font-display text-5xl font-medium leading-[0.92] text-ivory sm:text-7xl lg:text-[6.7rem]">
            Muvheneki.
          </h1>
          <p className="mt-6 font-display text-4xl leading-none text-gold sm:text-6xl">
            You are loved. You are worthy.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/80 sm:text-lg">
            A sanctuary of poetry, soul sessions, affirmations, meditations, and lifestyle pieces for
            self-love, renewal, rebirth, and a softer return to your inner light.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#brands" className="button-primary bg-ivory text-charcoal hover:bg-linen">
              Shop Products
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="button-secondary">
              Book a Soul Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
