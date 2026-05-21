import { ArrowUpRight, BriefcaseBusiness, Flame, Sofa } from "lucide-react";
import Reveal from "./Reveal";

const brands = [
  {
    title: "Darryl Interiors",
    description: "Interior design and styling for homes, offices, and spaces that need warmth, elegance, and function.",
    services: ["Interior styling", "Space makeovers", "Furniture selection", "Decor planning"],
    cta: "View Interior Services",
    Icon: Sofa,
  },
  {
    title: "Muvheneki",
    description:
      "Heritage-inspired decor and lifestyle pieces created to bring warmth, meaning, and cultural beauty into everyday spaces.",
    services: ["Candles", "Handmade decor", "Cultural pieces", "Gift items"],
    cta: "Explore Lifestyle Pieces",
    Icon: Flame,
  },
  {
    title: "Creative Consulting",
    description: "Creative direction and strategic consulting for brands, projects, events, and visual experiences.",
    services: ["Brand direction", "Creative concepts", "Event styling", "Project consulting"],
    cta: "Work With Us",
    Icon: BriefcaseBusiness,
  },
];

export default function BrandCards() {
  return (
    <section id="brands" className="scroll-mt-28 bg-charcoal py-20 text-ivory sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Our Brands</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-6xl">
            Choose the part of the house that fits your next move.
          </h2>
        </Reveal>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {brands.map(({ title, description, services, cta, Icon }) => (
            <Reveal
              key={title}
              className="group flex min-h-full flex-col rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-ivory/[0.12] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between border-b border-gold/35 pb-6">
                <span className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border border-gold/40 bg-gold/12 text-gold">
                  <Icon size={23} strokeWidth={1.5} />
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/40">Brand</span>
              </div>
              <h3 className="font-display text-4xl font-medium">{title}</h3>
              <p className="mt-4 min-h-32 leading-7 text-ivory/70">{description}</p>
              <ul className="mt-2 grid gap-3 text-sm text-ivory/90">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="h-px w-5 bg-gold" />
                    {service}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:text-ivory">
                {cta}
                <ArrowUpRight size={17} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
