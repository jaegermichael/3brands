import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="section-shell">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-charcoal px-6 py-14 text-ivory shadow-glow sm:px-10 sm:py-20 lg:px-16">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(120deg,transparent,rgba(185,149,88,0.3))]" />
          <div className="relative max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Consultation</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-6xl">
              Ready to bring your space, brand, or creative idea to life?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/70">
              Whether you need interiors, decor, styling, or creative direction, we help shape ideas into
              beautiful experiences.
            </p>
            <a href="#contact" className="button-primary mt-9 bg-gold text-charcoal hover:bg-ivory">
              Book a Consultation
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
