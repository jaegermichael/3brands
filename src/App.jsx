import { useContext, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  Home,
  Mail,
  MapPin,
  MessageCircleMore,
  Minus,
  Phone,
  Plus,
  Ruler,
  Send,
  ShoppingCart,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { CartContext } from "./CartContext.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import consultingLogo from "./assets/creative-consulting-icon.png";
import consultingFeature from "./assets/cci-new-hero.jpg";
import darrylLogo from "./assets/darryl-interiors-icon.png";
import darrylFeature from "./assets/darryl-interiors-feature.jpg";
import darrylPortrait from "./assets/darryl-portrait.jpg";
import darrylProjectOne from "./assets/darryl-project-1.jpg";
import darrylProjectTwo from "./assets/darryl-project-2.jpg";
import darrylProjectThree from "./assets/darryl-project-3.jpg";
import darrylProjectFour from "./assets/darryl-project-4.jpg";
import muvhenekiLogo from "./assets/muvheneki-icon.png";
import landingBackground from "./assets/muvheneki-ritual-close.jpg";
import muvhenekiFeature from "./assets/muvheneki-intro-products.jpeg";
import partnerMusic from "./assets/partners/music.svg";
import partnerAviation from "./assets/partners/aviation.svg";
import partnerLifestyle from "./assets/partners/lifestyle.svg";
import partnerBanking from "./assets/partners/banking.svg";
import partnerMarketing from "./assets/partners/marketing.svg";
import partnerProjects from "./assets/partners/projects.svg";

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
  const brands = [
    {
      title: "Darryl Interiors",
      href: "#darryl",
      logo: darrylLogo,
      image: darrylFeature,
      eyebrow: "Spatial alchemy",
      description:
        "Organic, natural interior and exterior environments shaped through warmth, refinement, craftsmanship, and timeless living.",
      Icon: Home,
      imagePosition: "object-center",
    },
    {
      title: "Creative Consulting (CCI)",
      href: "#creative",
      logo: consultingLogo,
      image: consultingFeature,
      eyebrow: "Strategy to execution",
      description:
        "Creative strategy, marketing, project management, and purposeful growth across music, aviation, lifestyle, banking, and more.",
      Icon: BriefcaseBusiness,
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
      imagePosition: "object-center",
    },
  ];

  return (
    <>
      <section id="home" className="relative isolate overflow-hidden bg-charcoal text-ivory">
        <img
          src={landingBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/80 to-charcoal/95" />

        <div className="relative w-full overflow-hidden px-5 pb-10 pt-44 sm:px-8 lg:px-12">
          <h1
            className="w-full font-display font-bold leading-none tracking-tight text-ivory"
            style={{ fontSize: "clamp(2rem, 7.6vw, 10rem)", whiteSpace: "nowrap" }}
          >
            The Briarcliff Group.
          </h1>
        </div>

        <div className="relative section-shell pb-28 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">Our Brands</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {brands.map(({ title, href, logo, image, eyebrow, description, imagePosition }) => (
              <a
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-[2rem] border border-ivory/12 bg-ivory/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-gold/50 hover:bg-ivory/[0.10]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className={`h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 ${imagePosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <img
                    src={logo}
                    alt={`${title} logo`}
                    className="absolute left-5 top-5 h-16 w-16 rounded-full border-2 border-ivory/80 bg-ivory object-contain p-2 shadow-[0_8px_28px_rgba(0,0,0,0.55)] transition duration-700 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
                  />
                </div>

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
    <div className="relative isolate min-h-[22rem] h-full w-full overflow-hidden rounded-[2rem] shadow-glow sm:min-h-[28rem]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/12 to-transparent" />
      <img
        src={logo}
        alt={`${title} logo`}
        className="absolute left-6 top-6 h-20 w-20 rounded-full bg-ivory object-contain p-1.5 drop-shadow-[0_12px_24px_rgba(0,0,0,0.42)]"
      />
    </div>
  );
}

function MuvhenekiPage() {
  const { cart, addToCart, removeFromCart, updateQty } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const products = [
    {
      title: "Rukudzo Deck",
      description: "A 22-card self-worth affirmation deck for honour, gentleness, and remembering your value.",
      price: 25,
      category: "Affirmation Cards",
    },
    {
      title: "Chengeto Deck",
      description: "A 22-card affirmation deck for emotional grounding, acceptance, and steady inner language.",
      price: 25,
      category: "Affirmation Cards",
    },
    {
      title: "Ndini Deck",
      description: "A 22-card personal affirmation deck for identity, confidence, and returning to self.",
      price: 25,
      category: "Affirmation Cards",
    },
    {
      title: "Rudo Deck",
      description: "A 22-card love-led affirmation deck for tenderness, safety, passion, and emotional repair.",
      price: 25,
      category: "Affirmation Cards",
    },
    {
      title: "Bookmarks",
      description: "Small affirmation pieces for books, journals, and quiet daily reminders.",
      price: 5,
      category: "Bookmarks",
    },
    {
      title: "T-Shirts",
      description: "Affirmation-led wearables for daily reminders of self-worth and love.",
      price: 20,
      category: "Merchandise",
    },
    {
      title: "Mugs",
      description: "Morning ritual mugs with affirmation messaging.",
      price: 15,
      category: "Merchandise",
    },
    {
      title: "Stickers",
      description: "Portable affirmation reminders for cars, fridges, desks, and everyday spaces.",
      price: 3,
      category: "Stickers",
    },
  ];

  const categories = [
    { title: "Affirmation Cards", description: "22-card decks for self-worth, grounding, identity, and love." },
    { title: "Bookmarks", description: "Small pieces for books, journals, and daily quiet reminders." },
    { title: "Merchandise", description: "T-shirts, mugs, and affirmation-led wearables for daily rituals." },
    { title: "Stickers", description: "Portable reminders for cars, fridges, desks, and everyday spaces." },
  ];

  const whatsappCheckout = () => {
    const items = cart.map((i) => `${i.title} x${i.qty} ($${i.price * i.qty})`).join("%0A");
    const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
    const text = `Hi Muvheneki,%0A%0AI'd like to order:%0A${items}%0A%0ATotal: $${total}%0A%0APlease let me know the delivery cost and EcoCash payment details.`;
    window.open(`https://wa.me/263781839151?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="pt-32">
        <div className="section-shell py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
            <div className="flex flex-col">
              <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-tight text-charcoal sm:text-7xl lg:text-[6rem]">
                Muvheneki.
              </h1>
              <p className="mt-5 font-display text-4xl leading-none text-clay sm:text-5xl lg:text-[3.5rem]">
                Words that heal.
              </p>
              <p className="body-copy mt-7">
                Muvheneki is a sanctuary of poetry, soul sessions, affirmations, meditations, and lifestyle
                pieces for self-love, renewal, rebirth, and a softer return to your inner light.
              </p>
              <p className="body-copy mt-5">
                Explore the product collections below, or get in touch for bookings, daily divinations, and
                custom requests.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#brands" className="button-primary">
                  <ShoppingCart size={18} />
                  Shop Products
                </a>
                <a href="#contact" className="button-primary bg-ivory text-charcoal hover:bg-linen">
                  <Mail size={18} />
                  Contact
                </a>
              </div>
            </div>
            <BrandImageShowcase image={muvhenekiFeature} logo={muvhenekiLogo} title="Muvheneki" />
          </div>
        </div>
      </section>

      <section id="brands" className="scroll-mt-28 bg-charcoal py-20 text-ivory sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Products</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-6xl">
              {activeCategory || "Shop by category"}
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

          {!activeCategory ? (
            <div className="mt-11 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className="group flex h-full flex-col items-center rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.08] p-5 text-center shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-ivory/[0.12] sm:p-6"
                >
                  <div className="grid aspect-square w-full max-w-[9.5rem] place-items-center rounded-3xl border border-ivory/10 bg-ivory">
                    <img
                      src={muvhenekiLogo}
                      alt=""
                      className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium text-ivory sm:text-3xl">{cat.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ivory/70 sm:text-base sm:leading-7">
                    {cat.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    View collection <ArrowRight size={16} />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === activeCategory)
                .map((product) => (
                  <div
                    key={product.title}
                    className="group flex min-h-full flex-col rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-ivory/[0.12] sm:p-8"
                  >
                    <div className="mb-6 grid aspect-[4/3] w-full place-items-center rounded-3xl border border-ivory/10 bg-ivory">
                      <img src={muvhenekiLogo} alt="" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
                    </div>
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
                ))}
            </div>
          )}

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
                      <div
                        key={item.title}
                        className="flex items-center justify-between rounded-2xl border border-ivory/10 bg-ivory/[0.06] p-4"
                      >
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
                  <a href="mailto:hello@muvheneki.co.zw" className="text-sm font-medium hover:text-clay">
                    hello@muvheneki.co.zw
                  </a>
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
                <a
                  href="https://wa.me/263781839151"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary mt-5"
                >
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
                <textarea
                  className="input-shell min-h-40 resize-y py-4"
                  name="message"
                  placeholder="Tell us what you are drawn to."
                  rows="5"
                />
              </label>
              <button type="submit" className="button-primary mt-6">
                <Send size={17} />
                Send Message
              </button>
            </form>
          </div>
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
      client: "Private residential client",
      category: "Residential",
      location: "Borrowdale, Harare",
      image: darrylProjectOne,
      description:
        "A complete interior and exterior transformation for a private townhouse in Borrowdale, balancing warmth, craftsmanship, and everyday living.",
      gallery: [darrylProjectOne, darrylProjectTwo, darrylProjectThree, darrylProjectFour],
    },
    {
      title: "Greendale Apartment Building",
      client: "Multi-unit residential client",
      category: "Multi-unit",
      location: "Greendale, Harare",
      image: darrylProjectTwo,
      description:
        "Spatial planning and styling for a multi-unit apartment building in Greendale, with cohesive interiors across shared and private spaces.",
      gallery: [darrylProjectTwo, darrylProjectThree, darrylProjectFour, darrylProjectOne],
    },
    {
      title: "Guesthouse Refinement",
      client: "Hospitality client",
      category: "Hospitality",
      location: "Harare",
      image: darrylProjectThree,
      description:
        "Warm, inviting interiors designed for guest comfort and lasting first impressions across reception and living areas.",
      gallery: [darrylProjectThree, darrylProjectFour, darrylProjectOne, darrylProjectTwo],
    },
    {
      title: "Exterior Arrival Mood",
      client: "Residential client",
      category: "Exterior Curation",
      location: "Harare",
      image: darrylProjectFour,
      description:
        "Considered outdoor transitions and arrival moments that set the tone before entry, with natural materials and soft lighting.",
      gallery: [darrylProjectFour, darrylProjectOne, darrylProjectTwo, darrylProjectThree],
    },
  ];

  return (
    <section className="pt-32">
      <div className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
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
            <a href="mailto:info@darrylinteriors.co.zw" className="button-primary mt-8 self-start">
              <Mail size={18} />
              info@darrylinteriors.co.zw
            </a>
          </div>
          <BrandImageShowcase image={darrylFeature} logo={darrylLogo} title="Darryl Interiors" />
        </div>

        <div className="mt-16">
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-5">Interiors and exterior curation.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Interior Styling", "Exterior Curation", "Space Transformation", "Furniture & Decor Selection"].map(
              (title) => (
                <article key={title} className="rounded-[1.5rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft">
                  <Ruler size={24} strokeWidth={1.4} className="text-clay" />
                  <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Previous Projects</p>
          <h2 className="section-title mt-5">Warm references for interiors and exteriors.</h2>
          <div className="mt-10 flex h-auto flex-col gap-4 lg:h-[34rem] lg:flex-row">
            {projects.map((project, index) => {
              const isActive = activeProject === project.title;
              const number = `0${index + 1}.`;

              return (
                <div
                  key={project.title}
                  onClick={() => setActiveProject(project.title)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-ivory bg-ivory/80 shadow-soft transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${isActive ? "min-h-[28rem] flex-1 ring-1 ring-gold/20 lg:min-h-0 lg:flex-[2.5]" : "min-h-[6rem] flex-none hover:bg-ivory lg:flex-[1]"}
                  `}
                >
                  {isActive ? (
                    <div className="flex h-full w-full animate-[fade-in_600ms_ease_both] flex-col">
                      <div className="relative h-48 w-full overflow-hidden p-2 lg:h-[55%]">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 shadow-soft backdrop-blur">
                            <ArrowRight size={16} className="-rotate-45 text-charcoal" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                            {project.client}
                          </p>
                          <h3 className="mt-2 font-display text-3xl font-medium text-charcoal">{project.title}</h3>
                          <p className="mt-2 text-sm text-charcoal/55">{project.location}</p>
                          <p className="mt-3 line-clamp-2 max-w-md leading-7 text-charcoal/65">{project.description}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedGalleryProject(project);
                          }}
                          className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory shadow-soft transition hover:bg-clay"
                        >
                          Explore More
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-between p-6 opacity-50 transition duration-500 hover:opacity-100 lg:flex-col lg:items-start lg:p-8">
                      <p className="font-display text-4xl font-medium text-taupe/40 lg:text-5xl">{number}</p>
                      <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal/5">
                          <Plus size={14} className="text-charcoal" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold leading-tight text-charcoal lg:mt-2">{project.title}</h3>
                          <p className="mt-1 text-xs text-charcoal/50">{project.client}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Founder</p>
          <h2 className="section-title mt-5">The person behind the spaces.</h2>
          <div className="mt-10 max-w-sm">
            <div className="rounded-[1.75rem] border border-taupe/20 bg-ivory/75 p-6 text-center shadow-soft">
              <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-taupe/20 bg-ivory">
                <img src={darrylPortrait} alt="Darryl" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">Darryl</h3>
              <p className="mt-2 text-sm text-charcoal/70">Lead Designer & Founder, Darryl Interiors</p>
            </div>
          </div>
        </div>
      </div>

      {selectedGalleryProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-md animate-[fade-in_300ms_ease_both] sm:p-6 lg:p-10">
          <div className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-ivory shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            <div className="z-10 flex shrink-0 items-center justify-between border-b border-taupe/15 bg-ivory p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  {selectedGalleryProject.client} · {selectedGalleryProject.category}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium text-charcoal">
                  {selectedGalleryProject.title}
                </h2>
                <p className="mt-1 text-sm text-charcoal/55">{selectedGalleryProject.location}</p>
              </div>
              <button
                onClick={() => setSelectedGalleryProject(null)}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-taupe/30 bg-ivory text-charcoal shadow-soft transition hover:border-gold hover:bg-linen"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-linen/30 p-6 sm:p-8">
              <p className="mb-6 max-w-3xl leading-7 text-charcoal/70">{selectedGalleryProject.description}</p>
              <div className="columns-1 gap-6 space-y-6 sm:columns-2">
                {selectedGalleryProject.gallery?.map((img, i) => (
                  <div key={i} className="break-inside-avoid overflow-hidden rounded-[1.5rem] shadow-soft">
                    <img
                      src={img}
                      alt={`${selectedGalleryProject.title} view ${i + 1}`}
                      className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
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

  const partners = [
    { name: "Music", logo: partnerMusic },
    { name: "Aviation", logo: partnerAviation },
    { name: "Lifestyle", logo: partnerLifestyle },
    { name: "Banking", logo: partnerBanking },
    { name: "Marketing", logo: partnerMarketing },
    { name: "Project Management", logo: partnerProjects },
  ];

  const marqueePartners = [...partners, ...partners];

  return (
    <section className="pt-32">
      <div className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="flex flex-col">
            <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-tight text-charcoal sm:text-7xl lg:text-[6rem]">
              Creative Consulting (CCI).
            </h1>
            <p className="mt-5 font-display text-4xl leading-none text-clay sm:text-5xl lg:text-[3.5rem]">
              From Idea to Execution.
            </p>
            <p className="body-copy mt-7">
              Creative Consulting (CCI) exists at the intersection of strategy, creativity, and execution.
              Working across industries including music, aviation, lifestyle, and banking, the studio
              guides brands from concept to completion through intelligent marketing, seamless project
              management, and purposeful growth.
            </p>
            <a href="mailto:info@creativeconsulting.co.zw" className="button-primary mt-8 self-start">
              <Mail size={18} />
              info@creativeconsulting.co.zw
            </a>
          </div>
          <BrandImageShowcase
            image={consultingFeature}
            logo={consultingLogo}
            title="Creative Consulting (CCI)"
          />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title mt-5">From loose idea to purposeful delivery.</h2>
            <p className="body-copy mt-6">
              Creative Consulting (CCI) supports projects that need both imagination and operational
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

        <div className="mt-16">
          <p className="eyebrow">Previous Partners</p>
          <h2 className="section-title mt-5">Built for direction, delivery, and growth.</h2>
          <div className="partner-marquee mt-10">
            <div className="partner-marquee-track">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-24 min-w-[12rem] items-center justify-center rounded-[1.25rem] border border-taupe/20 bg-ivory/80 px-6 shadow-soft sm:min-w-[14rem]"
                >
                  <img src={partner.logo} alt={partner.name} className="h-12 w-auto max-w-[11rem] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="creative-contact" className="mt-16 rounded-[2rem] bg-charcoal p-8 text-ivory shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Creative Consulting (CCI)</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none sm:text-5xl">
            Need direction from concept to completion?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-ivory/70">Book a consultation.</p>
          <a
            href="mailto:info@creativeconsulting.co.zw"
            className="button-primary mt-8 bg-gold text-charcoal hover:bg-ivory"
          >
            <CalendarCheck size={18} />
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
