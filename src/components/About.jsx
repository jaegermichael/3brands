// Replace this placeholder with a founder, studio, or project image for the final About section.
import creativeImage from "../assets/creative-direction.jpg";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -bottom-6 -right-5 h-32 w-32 rounded-full border border-gold/45" />
          <figure className="relative overflow-hidden rounded-[2rem] border border-ivory shadow-glow">
            <img src={creativeImage} alt="Creative direction table with materials and styling notes" className="aspect-[4/5] w-full object-cover" />
          </figure>
        </Reveal>

        <Reveal>
          <p className="eyebrow">About</p>
          <div className="gold-rule my-6" />
          <h2 className="section-title">Design that moves from atmosphere to direction.</h2>
          <p className="body-copy mt-7">
            At Darryl Creative House, design is not treated as decoration only. It is a way to shape how
            people feel, move, gather, and experience a space. Through Darryl Interiors, Muvheneki, and
            Creative Consulting, the group offers a complete creative approach, from interiors and decor
            to strategy and visual storytelling.
          </p>
          <blockquote className="mt-9 border-l border-gold pl-6 font-display text-3xl leading-tight text-umber sm:text-4xl">
            Design should feel beautiful, intentional, and deeply personal.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
