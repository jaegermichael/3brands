import { ArrowUpRight, BookOpen, Coffee, Gift, Heart, Magnet, Shirt, Sparkles } from "lucide-react";
import bookmarkImage from "../assets/muvheneki-warm-ritual.jpg";
import mugImage from "../assets/muvheneki-mug.jpg";
import portraitImage from "../assets/muvheneki-portrait.jpg";
import ritualImage from "../assets/muvheneki-ritual-close.jpg";
import Reveal from "./Reveal";

const products = [
  {
    title: "Bookmarks",
    description: "Small, beautiful page markers carrying daily reminders for your reading ritual.",
    services: ["Ndinodiwa", "Ndakakosha"],
    cta: "View Bookmarks",
    Icon: BookOpen,
    image: ritualImage,
  },
  {
    title: "T-Shirts",
    description: "Soft statement pieces made for affirmation you can wear close to your body.",
    services: ["UR❤️‍🔥D", "Ndakakosha", "Ndinodiwa"],
    cta: "Shop T-Shirts",
    Icon: Shirt,
    image: portraitImage,
  },
  {
    title: "Affirmation Deck",
    description: "A grounding deck for reflection, journaling, meditation, and soft morning guidance.",
    services: ["Daily pulls", "Journal prompts", "Self-love messages"],
    cta: "Explore Deck",
    Icon: Sparkles,
    image: bookmarkImage,
  },
  {
    title: "Mugs",
    description: "Morning ritual mugs for tea, coffee, and the words you want to begin with.",
    services: ["UR❤️‍🔥D", "Ndakakosha", "Ndinodiwa"],
    cta: "View Mugs",
    Icon: Coffee,
    image: mugImage,
  },
  {
    title: "Bumper Stickers",
    description: "Portable reminders for movement, errands, road trips, and everyday courage.",
    services: ["Ndakakosha", "Ndinodiwa"],
    cta: "View Stickers",
    Icon: Heart,
    image: ritualImage,
  },
  {
    title: "Occasion Cards",
    description: "Warm cards for celebration, tenderness, grief, transition, and milestone moments.",
    services: ["Birthday", "Mother's Day", "Father's Day", "Grief", "Wedding", "Graduation", "Farewell"],
    cta: "Browse Cards",
    Icon: Gift,
    image: bookmarkImage,
  },
  {
    title: "Books",
    description: "Reflective books and written offerings for deeper inner work and gentle returning.",
    services: ["Ritual notes", "Affirmation writing", "Seasonal messages"],
    cta: "Explore Books",
    Icon: BookOpen,
    image: portraitImage,
  },
  {
    title: "Fridge Magnets",
    description: "Tiny kitchen altar pieces for the everyday places where life keeps happening.",
    services: ["UR❤️‍🔥D", "Ndakakosha", "Ndinodiwa"],
    cta: "View Magnets",
    Icon: Magnet,
    image: mugImage,
  },
];

export default function BrandCards() {
  return (
    <section id="brands" className="scroll-mt-28 bg-charcoal py-20 text-ivory sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Products</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-6xl">
            Affirmation pieces for the body, the home, and the in-between moments.
          </h2>
        </Reveal>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ title, description, services, cta, Icon, image }) => (
            <Reveal
              key={title}
              className="group flex min-h-full flex-col rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-ivory/[0.12] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between border-b border-gold/35 pb-6">
                <span className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border border-gold/40 bg-gold/12 text-gold">
                  <Icon size={23} strokeWidth={1.5} />
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/40">Shop</span>
              </div>
              <img src={image} alt="" className="mb-6 aspect-[4/3] w-full rounded-3xl object-cover opacity-90" />
              <h3 className="font-display text-4xl font-medium">{title}</h3>
              <p className="mt-4 min-h-28 leading-7 text-ivory/70">{description}</p>
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
