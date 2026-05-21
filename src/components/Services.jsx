import Reveal from "./Reveal";

const services = [
  {
    title: "Interior & Space Design",
    description: "Spaces shaped for comfort, function, and a lasting sense of home.",
    items: ["Home styling", "Office styling", "Room makeovers", "Furniture and decor selection", "Space planning"],
  },
  {
    title: "Decor & Lifestyle Products",
    description: "Objects with warmth and meaning for living, gifting, and gathering.",
    items: ["Candles", "Cultural decor", "Handmade lifestyle pieces", "Gift collections", "Custom decor pieces"],
  },
  {
    title: "Creative Consulting",
    description: "Direction for brands, events, projects, and visual experiences.",
    items: ["Brand styling", "Creative direction", "Event styling", "Visual concepts", "Project planning"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal className="grid gap-5 border-b border-taupe/25 pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title mt-5">Built across three creative disciplines.</h2>
          </div>
          <p className="body-copy max-w-2xl lg:justify-self-end">
            Visitors can enter through interiors, curated lifestyle pieces, or consulting, then stay with a
            creative house that understands the full experience.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, description, items }, index) => (
            <Reveal key={title} className="rounded-[1.75rem] border border-taupe/20 bg-ivory/70 p-6 shadow-soft sm:p-8">
              <span className="font-display text-5xl text-gold/70">0{index + 1}</span>
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
