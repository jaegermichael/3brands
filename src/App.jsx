import { createContext, useContext, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  Heart,
  Home,
  Layers3,
  Mail,
  MapPin,
  MessageCircleMore,
  Minus,
  Phone,
  Plus,
  Ruler,
  Send,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { CartContext } from "./CartContext.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import consultingLogo from "./assets/creative-consulting-icon.png";
import consultingFeature from "./assets/cci-new-hero.jpg";
import darrylLogo from "./assets/darryl-interiors-icon.png";
import darrylFeature from "./assets/darryl-interiors-feature.jpg";
import darrylCityPortrait from "./assets/darryl-city-portrait.jpg";
import darrylPortrait from "./assets/darryl-portrait.jpg";
import darrylProjectOne from "./assets/darryl-project-1.jpg";
import darrylProjectTwo from "./assets/darryl-project-2.jpg";
import darrylProjectThree from "./assets/darryl-project-3.jpg";
import darrylProjectFour from "./assets/darryl-project-4.jpg";
import muvhenekiLogo from "./assets/muvheneki-icon.png";
import landingBackground from "./assets/muvheneki-ritual-close.jpg";
import muvhenekiFeature from "./assets/muvheneki-intro-products.jpeg";
import creativeImage from "./assets/creative-direction.jpg";
import muvhenekiMug from "./assets/muvheneki-mug.jpg";
import rukudzoDeckImage from "./assets/product-rukudzo-deck.jpg";
import chingetoDeckImage from "./assets/product-chingeto-deck.jpg";
import ndiniDeckImage from "./assets/product-ndini-deck.jpg";
import rudoDeckImage from "./assets/product-rudo-deck.jpg";
import pricingBookmarkImage from "./assets/product-pricing-bookmark.jpg";
import comingSoonImage from "./assets/product-coming-soon.jpg";

const routes = new Set(["home", "muvheneki", "darryl", "creative"]);
const sectionRoutes = {
  affirmation: "muvheneki",
  brands: "muvheneki",
  about: "muvheneki",
  contact: "muvheneki",
  services: "home",
  projects: "home",
};

function getRoute() {
  const hash = window.location.hash.replace("#", "");
  if (routes.has(hash)) {
    return hash;
  }
  return sectionRoutes[hash] || "home";
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) => (i.title === item.title ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1, price: item.price || 0 }];
    });
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((i) => i.title !== title));
  };

  const updateQty = (title, qty) => {
    if (qty <= 0) {
      removeFromCart(title);
      return;
    }
    setCart((prev) => prev.map((i) => (i.title === title ? { ...i, qty } : i)));
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setRoute(getRoute());
      window.setTimeout(() => {
        const target = document.getElementById(hash);
        if (target && !routes.has(hash)) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      <div className="overflow-x-clip bg-ivory text-charcoal">
        <Navbar cartCount={cart.reduce((a, b) => a + b.qty, 0)} />
        <main>
          {route === "home" && <LandingPage />}
          {route === "muvheneki" && <MuvhenekiPage />}
          {route === "darryl" && <DarrylPage />}
          {route === "creative" && <CreativePage />}
        </main>
        {route !== "home" && <Footer route={route} />}
      </div>
    </CartContext.Provider>
  );
}

function LandingPage() {
  const featureCards = [
    {
      title: "Exterior Curation",
      description: "Focused creative offerings for premium interiors, teams, and lifestyle products.",
      Icon: ShieldCheck,
    },
    {
      title: "Creative Strategy",
      description: "From idea to execution across brand, culture and creative commercial projects.",
      Icon: Sparkles,
    },
    {
      title: "Affirmation Products",
      description: "Affirmation-led products, soul sessions and ritual collections for gentle restoration.",
      Icon: ShoppingBag,
    },
  ];

  const brands = [
    {
      title: "Darryl Interiors",
      href: "#darryl",
      logo: darrylLogo,
      image: landingBackground,
      eyebrow: "Spatial alchemy",
      description:
        "Organic, natural interior and exterior environments shaped through warmth, refinement, craftsmanship, and timeless living.",
      Icon: Home,
      containImage: false,
      imagePosition: "object-center",
    },
    {
      title: "Creative Consulting Inc.",
      href: "#creative",
      logo: consultingLogo,
      image: consultingFeature,
      eyebrow: "Strategy to execution",
      description:
        "Creative strategy, marketing, project management, and purposeful growth across music, aviation, lifestyle, banking, and more.",
      Icon: BriefcaseBusiness,
      containImage: false,
      imagePosition: "object-left",
    },
    {
      title: "Muvheneki",
      href: "#muvheneki",
      logo: muvhenekiLogo,
      image: muvhenekiFeature,
      eyebrow: "Words that heal",
      description:
        "Poetry, soul sessions, affirmations, meditations, and products that guide people back to self-love, renewal, and inner light.",
      Icon: Sparkles,
      containImage: false,
      imagePosition: "object-center",
    },
  ];

  return (
    <>
      {/* ── Single full-bleed section: heading + brand cards ─────────── */}
      <section id="home" className="relative isolate overflow-hidden bg-charcoal text-ivory">
        {/* Background image spans the entire section */}
        <img
          src={landingBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/80 to-charcoal/95" />

        {/* ── Heading — full-width flush text ──────────────────────── */}
        <div className="relative w-full overflow-hidden px-5 pb-10 pt-44 sm:px-8 lg:px-12">
          <h1
            className="w-full font-display font-bold leading-none tracking-tight text-ivory"
            style={{ fontSize: "clamp(2rem, 7.6vw, 10rem)", whiteSpace: "nowrap" }}
          >
            The Briarcliff Group.
          </h1>
        </div>

        {/* ── Brand cards on same background ───────────────────────── */}
        <div className="relative section-shell pb-28 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">Our Brands</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {brands.map(({ title, href, logo, image, eyebrow, description, Icon, containImage, imagePosition }) => (
              <a
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-[2rem] border border-ivory/12 bg-ivory/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-gold/50 hover:bg-ivory/[0.10]"
              >
                {/* Card image */}
                <div className={`relative h-64 overflow-hidden ${containImage ? "bg-charcoal/80" : ""}`}>
                  <img
                    src={image}
                    alt=""
                    className={`h-full w-full transition duration-700 group-hover:scale-105 ${imagePosition ?? "object-center"} ${
                      containImage ? "object-contain p-6 opacity-90" : "object-cover opacity-75"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <img
                    src={logo}
                    alt={`${title} logo`}
                    className="absolute left-5 top-5 h-16 w-16 rounded-full border-2 border-ivory/80 bg-ivory object-contain p-2 shadow-[0_8px_28px_rgba(0,0,0,0.55)] transition duration-700 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-ivory sm:text-4xl">{title}</h3>
                  <p className="mt-4 leading-7 text-ivory/65">{description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition duration-300 group-hover:gap-3">
                    Enter brand world
                    <ArrowRight size={17} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BrandImageShowcase({ image, logo, title }) {
  return (
    <div className="relative isolate h-full w-full overflow-hidden rounded-[2rem] shadow-glow">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/12 to-transparent" />
      <img
        src={logo}
        alt={`${title} logo`}
        className="absolute left-6 top-6 h-20 w-20 rounded-full object-contain p-1.5 drop-shadow-[0_12px_24px_rgba(0,0,0,0.42)]"
      />
    </div>
  );
}

function MuvhenekiPage() {
  const { cart, addToCart, removeFromCart, updateQty } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [foundUs, setFoundUs] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const products = [
    {
      title: "Rukudzo Deck",
      description: "A 22-card self-worth affirmation deck for honour, gentleness, and remembering your value.",
      price: 25,
      image: rukudzoDeckImage,
      category: "Affirmation Cards",
    },
    {
      title: "Chengeto Deck",
      description: "A 22-card affirmation deck for emotional grounding, acceptance, and steady inner language.",
      price: 25,
      image: chingetoDeckImage,
      category: "Affirmation Cards",
    },
    {
      title: "Ndini Deck",
      description: "A 22-card personal affirmation deck for identity, confidence, and returning to self.",
      price: 25,
      image: ndiniDeckImage,
      category: "Affirmation Cards",
    },
    {
      title: "Rudo Deck",
      description: "A 22-card love-led affirmation deck for tenderness, safety, passion, and emotional repair.",
      price: 25,
      image: rudoDeckImage,
      category: "Affirmation Cards",
    },
    {
      title: "Bookmarks",
      description: "Small affirmation pieces for books, journals, and quiet daily reminders.",
      price: 5,
      image: pricingBookmarkImage,
      category: "Bookmarks",
    },
    {
      title: "Stickers",
      description: "Portable affirmation reminders for cars, fridges, desks, and everyday spaces.",
      price: 3,
      image: comingSoonImage,
      category: "Stickers",
    },
    {
      title: "T-Shirts",
      description: "Affirmation-led wearables for daily reminders of self-worth and love.",
      price: 20,
      image: comingSoonImage,
      category: "Merchandise",
    },
    {
      title: "Mugs",
      description: "Morning ritual mugs with affirmation messaging.",
      price: 15,
      image: muvhenekiMug,
      category: "Merchandise",
    },
  ];

  const categories = [
    { title: "Affirmation Cards", description: "22-card decks for self-worth, grounding, identity, and love.", image: rukudzoDeckImage },
    { title: "Bookmarks", description: "Small pieces for books, journals, and daily quiet reminders.", image: pricingBookmarkImage },
    { title: "Merchandise", description: "T-shirts, mugs, and affirmation-led wearables for daily rituals.", image: muvhenekiMug },
    { title: "Stickers", description: "Portable reminders for cars, fridges, desks, and everyday spaces.", image: comingSoonImage },
  ];

  const foundUsOptions = ["Instagram", "Word of Mouth", "Google Search", "Friend or Family"];

  const whatsappCheckout = () => {
    const items = cart.map((i) => `${i.title} x${i.qty} ($${i.price * i.qty})`).join("%0A");
    const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
    const text = `Hi Muvheneki,%0A%0AI'd like to order:%0A${items}%0A%0ATotal: $${total}%0A%0APlease let me know the delivery cost and EcoCash payment details.`;
    window.open(`https://wa.me/263781839151?text=${text}`, "_blank");
  };

  return (
    <>
      <Hero />

      <section id="brands" className="scroll-mt-28 bg-charcoal py-20 text-ivory sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Products</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-6xl">
              {activeCategory ? activeCategory : "Catalogue pieces, affirmation decks, and coming-soon product formats."}
            </h2>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-ivory"
              >
                <ArrowLeft size={16} />
                Back to Categories
              </button>
            )}
          </div>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {!activeCategory ? (
              categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className="group flex flex-col items-start text-left rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-ivory/[0.12] sm:p-8"
                >
                  <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-charcoal/50">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-ivory">{cat.title}</h3>
                  <p className="mt-4 leading-7 text-ivory/70">{cat.description}</p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold">
                    View collection <ArrowRight size={16} />
                  </span>
                </button>
              ))
            ) : (
              products
                .filter((p) => p.category === activeCategory)
                .map((product) => (
                  <div
                    key={product.title}
                    className="group flex min-h-full flex-col rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-ivory/[0.12] sm:p-8"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="mb-6 aspect-[4/3] w-full rounded-3xl object-cover opacity-95"
                    />
                    <h3 className="font-display text-3xl font-medium">{product.title}</h3>
                    <p className="mt-4 leading-7 text-ivory/70">{product.description}</p>
                    <p className="mt-3 text-lg font-semibold text-gold">${product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="button-primary mt-6 w-full justify-center bg-gold text-charcoal hover:bg-ivory"
                    >
                      <ShoppingCart size={17} />
                      Add to Basket
                    </button>
                  </div>
                ))
            )}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={() => setShowCart((s) => !s)}
              className="button-primary relative bg-gold text-charcoal hover:bg-ivory"
            >
              <ShoppingCart size={18} />
              View Basket
              {cart.length > 0 && (
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              )}
            </button>
          </div>

          {showCart && (
            <div className="mt-8 rounded-[2rem] border border-ivory/15 bg-ivory/[0.08] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-medium">Your Basket</h3>
              {cart.length === 0 ? (
                <p className="mt-4 text-ivory/70">Your basket is empty.</p>
              ) : (
                <>
                  <div className="mt-4 grid gap-3">
                    {cart.map((item) => (
                      <div key={item.title} className="flex items-center justify-between rounded-2xl border border-ivory/10 bg-ivory/[0.06] p-4">
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-ivory/60">${item.price} each</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQty(item.title, item.qty - 1)}
                            className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 text-ivory hover:bg-ivory/10"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-[1.5rem] text-center font-semibold">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.title, item.qty + 1)}
                            className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 text-ivory hover:bg-ivory/10"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.title)}
                            className="ml-2 text-ivory/50 hover:text-ivory"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-ivory/15 pt-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${cart.reduce((a, b) => a + b.price * b.qty, 0)}</span>
                    </div>
                    <p className="mt-2 text-sm text-ivory/60">Delivery fee calculated at checkout.</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/[0.06] px-4 py-2 text-sm">
                        <CreditCard size={16} />
                        EcoCash accepted
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/[0.06] px-4 py-2 text-sm">
                        <Truck size={16} />
                        Delivery available
                      </span>
                    </div>
                    <button
                      onClick={whatsappCheckout}
                      className="button-primary mt-6 w-full justify-center bg-gold text-charcoal hover:bg-ivory"
                    >
                      <MessageCircleMore size={18} />
                      Checkout on WhatsApp
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Blog</p>
            <h2 className="section-title mt-5">Monthly Message</h2>
            <p className="body-copy mt-6">Seasonal words and ritual notes. Coming soon.</p>
          </div>
        </div>
      </section>


      <section className="bg-charcoal py-20 text-ivory sm:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Daily Divinations</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-5xl">
              Sign up for daily divinations.
            </h2>
            <p className="mt-6 leading-8 text-ivory/70">
              Receive fresh reflective guidance in your inbox every morning.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="input-shell flex-1 border-ivory/20 bg-ivory/[0.08] text-ivory placeholder:text-ivory/40"
              />
              <button type="submit" className="button-primary bg-gold text-charcoal hover:bg-ivory">
                <Send size={17} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-[#efe3d1] py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-9 lg:grid-cols-[0.82fr_1fr] lg:gap-14">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title mt-5">Connect with Muvheneki.</h2>
              <p className="body-copy mt-6 max-w-xl">
                Ask about products, book a daily divination, request a monthly message, or send a testimonial.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-taupe/20 bg-ivory/60 p-4">
                  <Mail size={20} className="text-clay" />
                  <span className="text-sm font-medium">hello@muvheneki.co.zw</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-taupe/20 bg-ivory/60 p-4">
                  <Phone size={20} className="text-clay" />
                  <span className="text-sm font-medium">+263 78 183 9151</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-taupe/20 bg-ivory/60 p-4">
                  <MapPin size={20} className="text-clay" />
                  <span className="text-sm font-medium">Harare, Zimbabwe</span>
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-taupe/20 bg-ivory/60 p-6">
                <p className="text-sm font-semibold text-charcoal">Prefer WhatsApp?</p>
                <a href="https://wa.me/263781839151" target="_blank" rel="noreferrer" className="button-primary mt-5">
                  <MessageCircleMore size={18} />
                  Message Muvheneki
                </a>
              </div>

              <a
                href="/downloads/muvheneki-2025-catalogue.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-6"
              >
                <BookOpen size={18} />
                Download Catalogue
              </a>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-[2rem] border border-ivory bg-ivory/70 p-5 shadow-soft sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-charcoal/80">
                  Full Name
                  <input className="input-shell" name="name" type="text" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal/80">
                  Email Address
                  <input className="input-shell" name="email" type="email" placeholder="you@email.com" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal/80">
                  Phone Number
                  <input className="input-shell" name="phone" type="tel" placeholder="+263..." />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal/80">
                  Interest
                  <select className="input-shell" name="interest" defaultValue="Products">
                    <option>Products</option>
                    <option>Daily divinations</option>
                    <option>Monthly message</option>
                    <option>Bookings</option>
                    <option>Testimonial</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-charcoal/80">
                Message
                <textarea className="input-shell min-h-40 resize-y py-4" name="message" placeholder="Tell us what you are drawn to." rows="5" />
              </label>
              <button type="submit" className="button-primary mt-6">
                <Send size={17} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow">Where did you find us?</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foundUsOptions.slice(0, 2).map((opt) => (
              <button
                key={opt}
                onClick={() => setFoundUs(opt)}
                className={`rounded-2xl border p-6 text-left transition ${
                  foundUs === opt
                    ? "border-gold bg-linen/55 shadow-soft"
                    : "border-taupe/20 bg-ivory/60 hover:border-gold/50"
                }`}
              >
                <p className="font-semibold">{opt}</p>
              </button>
            ))}
          </div>
          {foundUs && <p className="mt-4 text-sm text-charcoal/70">Thank you for finding us through {foundUs}!</p>}
        </div>
      </section>
    </>
  );
}

function DarrylPage() {
  const [activeProject, setActiveProject] = useState("Borrowdale Townhouse");
  const [selectedGalleryProject, setSelectedGalleryProject] = useState(null);

  const projects = [
    {
      title: "Borrowdale Townhouse",
      category: "Residential",
      image: darrylProjectOne,
      description: "A complete interior and exterior transformation for a modern townhouse in Borrowdale.",
      gallery: [darrylProjectOne, darrylProjectTwo, darrylProjectThree],
    },
    {
      title: "Greendale Apartment Building",
      category: "Multi-unit",
      image: darrylProjectTwo,
      description: "Spatial planning and styling for a multi-unit apartment building in Greendale.",
      gallery: [darrylProjectTwo, darrylProjectThree, darrylProjectFour],
    },
    {
      title: "Guesthouse Refinement",
      category: "Hospitality",
      image: darrylProjectThree,
      description: "Warm, inviting interiors designed for guest comfort and lasting impressions.",
      gallery: [darrylProjectThree, darrylProjectFour, darrylProjectOne],
    },
    {
      title: "Exterior Arrival Mood",
      category: "Exterior Curation",
      image: darrylProjectFour,
      description: "Considered outdoor transitions and arrival moments that set the tone before entry.",
      gallery: [darrylProjectFour, darrylProjectOne, darrylProjectTwo],
    },
  ];

  const team = [
    { name: "Darryl", role: "Lead Designer & Founder", image: darrylPortrait },
    { name: "Team Member", role: "Interior Stylist", image: darrylLogo },
  ];

  return (
    <section className="pt-32">
      <div className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col">
            <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-tight text-charcoal sm:text-7xl lg:text-[6rem]">
              Darryl Interiors.
            </h1>
            <p className="mt-5 font-display text-4xl leading-none text-clay sm:text-5xl lg:text-[3.5rem]">
              The art of spatial alchemy.
            </p>
            <p className="body-copy mt-7">
              Darryl Interiors is dedicated to transforming both interior and exterior environments into
              spaces of beauty, purpose, and connection. Rooted in organic and natural design principles,
              the work creates warm, inviting spaces that feel deeply lived in and effortlessly elegant.
            </p>
            <p className="body-copy mt-5">
              The practice thoughtfully embraces refinement, craftsmanship, and longevity, designing
              environments that endure and inspire for years to come.
            </p>
            <a href="mailto:info@daryllinteriors.co.zw" className="button-primary mt-8">
              <Mail size={18} />
              info@daryllinteriors.co.zw
            </a>
          </div>
          <BrandImageShowcase image={landingBackground} logo={darrylLogo} title="Darryl Interiors" />
        </div>

        <div className="mt-16">
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-5">Exterior Curation.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Interior Styling", "Exterior Curation", "Space Transformation", "Furniture & Decor Selection"].map(
              (title) => (
                <article key={title} className="rounded-[1.5rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft">
                  <Ruler size={24} strokeWidth={1.4} className="text-clay" />
                  <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                </article>
              )
            )}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Previous Projects</p>
          <h2 className="section-title mt-5">Warm references for interiors and exteriors.</h2>
          <div className="mt-10 flex flex-col lg:flex-row h-auto lg:h-[34rem] gap-4">
            {projects.map((project, index) => {
              const isActive = activeProject === project.title;
              const number = `0${index + 1}.`;

              return (
                <div
                  key={project.title}
                  onClick={() => setActiveProject(project.title)}
                  className={`group relative overflow-hidden rounded-[2rem] bg-ivory/80 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow-soft border border-ivory
                    ${isActive ? "lg:flex-[2.5] flex-1 min-h-[28rem] lg:min-h-0 ring-1 ring-gold/20" : "lg:flex-[1] flex-none min-h-[6rem] hover:bg-ivory"}
                  `}
                >
                  {isActive ? (
                    <div className="h-full w-full flex flex-col animate-[fade-in_600ms_ease_both]">
                      <div className="relative h-48 lg:h-[55%] w-full overflow-hidden p-2">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                          <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                          <div className="absolute top-4 left-4 h-9 w-9 bg-ivory/90 backdrop-blur rounded-full flex items-center justify-center shadow-soft">
                            <ArrowRight size={16} className="text-charcoal -rotate-45" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display text-3xl font-medium text-charcoal">{project.title}</h3>
                          <p className="mt-3 text-charcoal/65 max-w-md leading-7 line-clamp-2">{project.description}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedGalleryProject(project);
                          }}
                          className="mt-6 self-start inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory transition hover:bg-clay shadow-soft"
                        >
                          Explore More
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex lg:flex-col h-full w-full items-center lg:items-start justify-between p-6 lg:p-8 opacity-50 transition duration-500 hover:opacity-100">
                      <p className="font-display text-4xl lg:text-5xl font-medium text-taupe/40">{number}</p>
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-charcoal/5 flex items-center justify-center shrink-0">
                          <Plus size={14} className="text-charcoal" />
                        </div>
                        <h3 className="font-semibold text-sm leading-tight lg:mt-2 text-charcoal">{project.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Team</p>
          <h2 className="section-title mt-5">The people behind the spaces.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-[1.75rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-taupe/20 bg-ivory p-2">
                  <img src={member.image} alt={member.name} className="h-full w-full rounded-full object-cover" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{member.name}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal Overlay */}
      {selectedGalleryProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 sm:p-6 lg:p-10 backdrop-blur-md animate-[fade-in_300ms_ease_both]">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-ivory shadow-[0_30px_100px_rgba(0,0,0,0.5)] h-full max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-taupe/15 p-6 sm:p-8 bg-ivory z-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{selectedGalleryProject.category}</p>
                <h2 className="mt-2 font-display text-3xl font-medium text-charcoal">{selectedGalleryProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedGalleryProject(null)}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-taupe/30 bg-ivory text-charcoal transition hover:border-gold hover:bg-linen shadow-soft"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body / Image Grid */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-linen/30">
              <div className="columns-1 sm:columns-2 gap-6 space-y-6">
                {selectedGalleryProject.gallery?.map((img, i) => (
                  <div key={i} className="break-inside-avoid overflow-hidden rounded-[1.5rem] shadow-soft">
                    <img src={img} alt={`${selectedGalleryProject.title} view ${i + 1}`} className="w-full h-auto object-cover transition duration-700 hover:scale-[1.03]" />
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-charcoal/50">
                End of gallery. Actual high-resolution photos will be placed here.
              </p>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}

function CreativePage() {
  const capabilities = [
    ["Brand Direction", "Clarifying the creative position, tone, offer, and visual direction."],
    ["Creative Strategy", "Turning ideas into structured campaigns, concepts, and project roadmaps."],
    ["Marketing Execution", "Helping brands move from intention to market-facing action."],
    ["Project Consulting", "Keeping timelines, collaborators, and deliverables aligned from concept to completion."],
  ];

  const fourSteps = [
    { title: "Discover", detail: "Understand the brand, audience, and project context." },
    { title: "Define", detail: "Clarify the creative position, tone, and strategic direction." },
    { title: "Develop", detail: "Build the execution plan, visual concept, and project roadmap." },
    { title: "Deliver", detail: "Guide delivery, refinement, and ongoing growth." },
  ];

  const partners = ["Music", "Aviation", "Lifestyle", "Banking", "Marketing", "Project Management"];

  const team = [
    { name: "Lead Consultant", role: "Creative Director & Strategist", image: consultingLogo },
    { name: "Team Member", role: "Project Manager", image: consultingLogo },
  ];

  return (
    <section className="pt-32">
      <div className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col">
            <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-tight text-charcoal sm:text-7xl lg:text-[6rem]">
              Creative Consulting Inc.
            </h1>
            <p className="mt-5 font-display text-4xl leading-none text-clay sm:text-5xl lg:text-[3.5rem]">
              From Idea to Execution.
            </p>
            <p className="body-copy mt-7">
              Creative Consulting exists at the intersection of strategy, creativity, and execution.
              Working across industries including music, aviation, lifestyle, and banking, the studio
              guides brands from concept to completion through intelligent marketing, seamless project
              management, and purposeful growth.
            </p>
            <a href="mailto:info@creativeconsulting.co.zw" className="button-primary mt-8 self-start">
              <Mail size={18} />
              info@creativeconsulting.co.zw
            </a>
          </div>
          <BrandImageShowcase image={consultingFeature} logo={consultingLogo} title="Creative Consulting Inc." />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title mt-5">From loose idea to purposeful delivery.</h2>
            <p className="body-copy mt-6">
              Creative Consulting Inc. supports projects that need both imagination and operational
              discipline: the concept, the plan, the people, and the finish line.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(([title, description]) => (
              <article key={title} className="rounded-[1.5rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft">
                <ClipboardList size={24} strokeWidth={1.4} className="text-clay" />
                <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-charcoal/66">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Four-Step Process</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl">
              Strategic enough to move, creative enough to matter.
            </h2>
          </div>

          <div className="relative mt-20 max-w-5xl mx-auto">
            {/* Background SVG connecting lines for desktop */}
            <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
              {/* Horizontal Top */}
              <div className="absolute top-[3.5rem] left-[10%] right-[10%] h-[3px] border-t-[3px] border-dotted border-charcoal/20" />
              {/* Vertical Right */}
              <div className="absolute top-[3.5rem] bottom-[3.5rem] right-[10%] w-[3px] border-r-[3px] border-dotted border-charcoal/20" />
              {/* Horizontal Bottom */}
              <div className="absolute bottom-[3.5rem] left-[10%] right-[10%] h-[3px] border-t-[3px] border-dotted border-charcoal/20" />
            </div>

            <div className="grid gap-12 sm:gap-x-20 sm:gap-y-16 sm:grid-cols-2 relative z-10">
              {fourSteps.map((step, index) => {
                // To create the visual snake pattern (1 -> 2 -> 3 -> 4 where 3 is bottom right and 4 is bottom left)
                const orderClass = index === 2 ? 'sm:order-4' : index === 3 ? 'sm:order-3' : '';
                
                return (
                  <div key={step.title} className={`relative flex flex-col h-full ${orderClass}`}>
                    {/* Dark/Colored rounded block in background */}
                    <div className="absolute top-0 left-0 h-28 w-28 rounded-[2rem] bg-charcoal flex pl-6 pt-5 text-ivory shadow-lg">
                      <span className="font-display text-3xl font-medium">0{index + 1}</span>
                    </div>
                    
                    {/* Glassmorphic foreground card */}
                    <div className="relative z-10 ml-10 mt-12 flex-1 rounded-[1.5rem] bg-ivory/70 backdrop-blur-md border border-ivory/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:-translate-y-1">
                      <h3 className="text-lg font-display uppercase tracking-[0.15em] text-charcoal font-bold">{step.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Previous Partners</p>
          <h2 className="section-title mt-5">Built for direction, delivery, and growth.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((industry) => (
              <article key={industry} className="rounded-[1.5rem] border border-taupe/20 bg-ivory/70 p-6 shadow-soft">
                <Layers3 size={24} strokeWidth={1.4} className="text-clay" />
                <h3 className="mt-8 text-lg font-semibold">{industry}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Team</p>
          <h2 className="section-title mt-5">The people behind the strategy.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-[1.75rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-taupe/20 bg-ivory p-2">
                  <img src={member.image} alt={member.name} className="h-full w-full rounded-full object-contain" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{member.name}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="creative-contact" className="mt-16 rounded-[2rem] bg-charcoal p-8 text-ivory shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Creative Consulting Inc.</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none sm:text-5xl">
            Need direction from concept to completion?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-ivory/70">
            Book a consultation for creative strategy, intelligent marketing, project management, visual
            concepts, and purposeful brand growth.
          </p>
          <a href="mailto:info@creativeconsulting.co.zw" className="button-primary mt-8 bg-gold text-charcoal hover:bg-ivory">
            <CalendarCheck size={18} />
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
