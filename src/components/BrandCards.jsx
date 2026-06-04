import { ArrowUpRight, BookOpen, Gift, Heart, Magnet, Shirt, Sparkles } from "lucide-react";
import chingetoDeckImage from "../assets/product-chingeto-deck.jpg";
import comingSoonImage from "../assets/product-coming-soon.jpg";
import ndiniDeckImage from "../assets/product-ndini-deck.jpg";
import pricingBookmarkImage from "../assets/product-pricing-bookmark.jpg";
import rudoDeckImage from "../assets/product-rudo-deck.jpg";
import rukudzoDeckImage from "../assets/product-rukudzo-deck.jpg";
import Reveal from "./Reveal";

const products = [
  {
    title: "Rukudzo Deck",
    description: "A self-worth affirmation deck for honour, gentleness, and remembering your value.",
    services: ["Affirmation cards", "Daily pulls", "Reflection ritual"],
    cta: "Enquire About Rukudzo",
    Icon: Sparkles,
    image: rukudzoDeckImage,
  },
  {
    title: "Chingeto Deck",
    description: "Affirmations for emotional grounding, acceptance, and steady inner language.",
    services: ["Ndakakosha", "Ndinodiwa", "Daily reassurance"],
    cta: "Enquire About Chingeto",
    Icon: Heart,
    image: chingetoDeckImage,
  },
  {
    title: "Ndini Deck",
    description: "A personal affirmation deck for identity, confidence, and returning to self.",
    services: ["I am enough", "I am valuable", "I am worthy"],
    cta: "Enquire About Ndini",
    Icon: BookOpen,
    image: ndiniDeckImage,
  },
  {
    title: "Rudo Deck",
    description: "Love-led affirmations for tenderness, safety, passion, and emotional repair.",
    services: ["You are precious", "You are safe with me", "Love ritual"],
    cta: "Enquire About Rudo",
    Icon: Heart,
    image: rudoDeckImage,
  },
  {
    title: "Bookmarks",
    description: "Small affirmation pieces for books, journals, Bible study, and quiet daily reminders.",
    services: ["Ndinodiwa", "Ndakakosha", "Bible affirmation cards"],
    cta: "View Bookmark Options",
    Icon: BookOpen,
    image: pricingBookmarkImage,
  },
  {
    title: "Occasion Cards",
    description: "Warm cards for celebration, tenderness, grief, transition, and milestone moments.",
    services: ["Birthday", "Mother's Day", "Father's Day", "Grief", "Wedding", "Graduation", "Farewell"],
    cta: "Browse Cards",
    Icon: Gift,
    image: comingSoonImage,
  },
  {
    title: "Wear & Sip Range",
    description: "Coming-soon affirmation products for the body, table, and morning rituals.",
    services: ["T-shirts", "Mugs", "UR Loved", "Ndakakosha", "Ndinodiwa"],
    cta: "Ask About Coming Soon",
    Icon: Shirt,
    image: comingSoonImage,
  },
  {
    title: "Stickers & Magnets",
    description: "Portable and home-based reminders for cars, fridges, desks, and everyday spaces.",
    services: ["Bumper stickers", "Fridge magnets", "Ndakakosha", "Ndinodiwa"],
    cta: "Request Product Details",
    Icon: Magnet,
    image: comingSoonImage,
  },
];

export default function BrandCards() {
  return (
    <section id="brands" className="scroll-mt-28 bg-charcoal py-20 text-ivory sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Products</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-6xl">
            Catalogue pieces, affirmation decks, and coming-soon product formats.
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
              <img src={image} alt="" className="mb-6 aspect-[4/3] w-full rounded-3xl object-cover opacity-95" />
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
