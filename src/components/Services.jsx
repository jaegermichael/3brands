import Reveal from "./Reveal";

import consultingLogo from "../assets/creative-consulting-logo.jpg";
import consultingFeature from "../assets/creative-consulting-red-car.jpg";
import darrylFeature from "../assets/darryl-interiors-feature.jpg";
import darrylLogo from "../assets/darryl-interiors-logo.jpg";
import muvhenekiFeature from "../assets/muvheneki-intro-products.jpeg";
import muvhenekiLogo from "../assets/muvheneki-logo.jpg";

const services = [
  {
    title: "Darryl Interiors",
    description:
      "Dedicated to the art of spatial alchemy, transforming interior and exterior environments into spaces of beauty, purpose, and connection.",
    items: ["Organic natural design", "Interior and exterior spaces", "Refinement and craftsmanship", "Previous projects", "Book a consult"],
    logo: darrylLogo,
    image: darrylFeature,
  },
  {
    title: "Muvheneki",
    description:
      "A sanctuary of words that heal, offering poetry, soul sessions, affirmations, and meditations for self-love, renewal, and rebirth.",
    items: ["Daily divinations", "Monthly message", "Soul sessions", "Affirmations", "Meditations"],
    logo: muvhenekiLogo,
    image: muvhenekiFeature,
  },
  {
    title: "Creative Consulting Inc.",
    description:
      "Working at the intersection of strategy, creativity, and execution across music, aviation, lifestyle, banking, and more.",
    items: ["Marketing strategy", "Project management", "Concept to completion", "Previous partners", "Book a consult"],
    logo: consultingLogo,
    image: consultingFeature,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal className="grid gap-5 border-b border-taupe/25 pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">The Briarcliff Group</p>
            <h2 className="section-title mt-5">Three connected practices, one creative foundation.</h2>
          </div>
          <p className="body-copy max-w-2xl lg:justify-self-end">
            The group brings together interiors, words that heal, and creative strategy. Each brand has
            its own language, but all three are rooted in refinement, intention, and transformation.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, description, items, logo, image }, index) => (
            <Reveal key={title} className="rounded-[1.75rem] border border-taupe/20 bg-ivory/70 p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-5xl text-gold/70">0{index + 1}</span>
                <img src={logo} alt={`${title} logo`} className="h-16 w-16 rounded-full bg-ivory object-contain p-2" />
              </div>
              <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <img src={image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-medium leading-none">{title}</h3>
              <p className="mt-4 min-h-20 leading-7 text-charcoal/70">{description}</p>
              <ul className="mt-7 grid gap-3 border-t border-taupe/20 pt-6 text-sm font-medium text-charcoal/80">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
