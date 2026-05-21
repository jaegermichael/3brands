// Replace project placeholders with final brand photography as portfolio work is approved.
import creativeImage from "../assets/creative-direction.jpg";
import heroImage from "../assets/hero-creative-house.jpg";
import lifestyleImage from "../assets/heritage-lifestyle.jpg";
import Reveal from "./Reveal";

const projects = [
  { title: "Warm Minimalist Lounge", category: "Interiors", image: heroImage, className: "md:row-span-2" },
  { title: "Heritage Candle Collection", category: "Decor", image: lifestyleImage, className: "" },
  { title: "Modern Office Refresh", category: "Interiors", image: heroImage, className: "" },
  { title: "Styled Creative Event", category: "Events & Styling", image: creativeImage, className: "md:row-span-2" },
  { title: "Earth-Tone Living Space", category: "Interiors", image: heroImage, className: "" },
  { title: "Brand Mood Direction", category: "Creative Projects", image: creativeImage, className: "" },
];

export default function Portfolio() {
  return (
    <section id="projects" className="scroll-mt-28 bg-linen/45 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title mt-5">Warm, meaningful work in many forms.</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-charcoal/70">
            {["Interiors", "Decor", "Events & Styling", "Creative Projects"].map((category) => (
              <span key={category} className="rounded-full border border-taupe/25 bg-ivory/60 px-4 py-2">
                {category}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-11 grid auto-rows-[17rem] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, category, image, className }) => (
            <Reveal key={title} className={`group relative overflow-hidden rounded-[1.75rem] shadow-soft ${className}`}>
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{category}</p>
                <h3 className="mt-3 font-display text-3xl font-medium leading-none">{title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
