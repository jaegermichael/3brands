import lifestyleImage from "../assets/muvheneki-warm-ritual.jpg";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="affirmation" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Affirmation of the day</p>
          <div className="gold-rule my-6" />
          <div className="rounded-[2rem] border border-taupe/20 bg-[#fbf7ef] p-7 shadow-soft sm:p-10">
            <p className="font-display text-5xl font-medium leading-none text-umber sm:text-7xl lg:text-8xl">
              Ndakakosha.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/70">
              I am important. I am worthy of care, softness, attention, and a life that feels like mine.
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <p className="body-copy">
              Muvheneki is devoted to words that heal. Through poetry, soul sessions, affirmations, and
              meditations, we create spaces for reflection, restoration, and transformation.
            </p>
            <p className="body-copy">
              Born from a journey of self-love, Muvheneki inspires rebirth, guiding individuals back to
              their wholeness, wisdom, and inner light.
            </p>
          </div>
          <a href="/downloads/muvheneki-2025-catalogue.pdf" className="button-primary mt-8" target="_blank" rel="noreferrer">
            Download 2025 Catalogue
          </a>
        </Reveal>

        <Reveal className="relative">
          <div className="absolute -left-5 top-10 hidden h-[78%] w-px bg-gold/45 lg:block" />
          <figure className="overflow-hidden rounded-[2rem] border border-ivory bg-linen shadow-glow">
            <img
              src={lifestyleImage}
              alt="Warm creative table with notes, materials, and ritual objects"
              className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
