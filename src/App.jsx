import About from "./components/About";
import BrandCards from "./components/BrandCards";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Gem,
  HandHeart,
  Home,
  Layers3,
  Palette,
  PenLine,
  Quote,
  Ruler,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import consultingLogo from "./assets/creative-consulting-logo.jpg";
import consultingPortrait from "./assets/darryl-city-portrait.jpg";
import darrylLogo from "./assets/darryl-interiors-logo.jpg";
import darrylPortrait from "./assets/darryl-portrait.jpg";
import darrylProjectOne from "./assets/darryl-project-1.jpg";
import darrylProjectTwo from "./assets/darryl-project-2.jpg";
import darrylProjectThree from "./assets/darryl-project-3.jpg";
import darrylProjectFour from "./assets/darryl-project-4.jpg";
import muvhenekiLogo from "./assets/muvheneki-logo.jpg";
import muvhenekiHero from "./assets/muvheneki-portrait.jpg";

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
    <div className="overflow-x-clip bg-ivory text-charcoal">
      <Navbar />
      <main>
        {route === "home" && <LandingPage />}
        {route === "muvheneki" && <MuvhenekiPage />}
        {route === "darryl" && <DarrylPage />}
        {route === "creative" && <CreativePage />}
      </main>
      <Footer />
    </div>
  );
}

function LandingPage() {
  const brands = [
    {
      title: "Muvheneki",
      href: "#muvheneki",
      logo: muvhenekiLogo,
      image: muvhenekiHero,
      eyebrow: "Words that heal",
      description:
        "Poetry, soul sessions, affirmations, meditations, and products that guide people back to self-love, renewal, and inner light.",
      Icon: Sparkles,
    },
    {
      title: "Darryl Interiors",
      href: "#darryl",
      logo: darrylLogo,
      image: darrylPortrait,
      eyebrow: "Spatial alchemy",
      description:
        "Organic, natural interior and exterior environments shaped through warmth, refinement, craftsmanship, and timeless living.",
      Icon: Home,
    },
    {
      title: "Creative Consulting Inc.",
      href: "#creative",
      logo: consultingLogo,
      image: consultingPortrait,
      eyebrow: "Strategy to execution",
      description:
        "Creative strategy, marketing, project management, and purposeful growth across music, aviation, lifestyle, banking, and more.",
      Icon: BriefcaseBusiness,
    },
  ];

  return (
    <>
      <section id="home" className="relative isolate min-h-screen overflow-hidden bg-charcoal pt-32 text-ivory">
        <img src={muvhenekiHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,35,31,0.92),rgba(39,35,31,0.72),rgba(39,35,31,0.42))]" />
        <div className="section-shell relative pb-20 pt-14">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">The Briarcliff Group</p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.92] sm:text-7xl lg:text-[6.8rem]">
              One creative house. Three distinct worlds.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/78 sm:text-lg">
              A landing space for Muvheneki, Darryl Interiors, and Creative Consulting Inc. Choose the
              brand you want to enter to see its full story, services, projects, products, and contact path.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {brands.map(({ title, href, logo, image, eyebrow, description, Icon }) => (
              <a
                key={title}
                href={href}
                className="group overflow-hidden rounded-[2rem] border border-ivory/15 bg-ivory/[0.08] shadow-glow transition duration-500 hover:-translate-y-2 hover:border-gold/70 hover:bg-ivory/[0.12]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={image} alt="" className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  <img
                    src={logo}
                    alt={`${title} logo`}
                    className="absolute left-6 top-6 h-16 w-16 rounded-full bg-ivory object-contain p-2 shadow-soft"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
                    <Icon size={22} strokeWidth={1.4} className="text-gold" />
                  </div>
                  <h2 className="mt-4 font-display text-4xl font-medium leading-none">{title}</h2>
                  <p className="mt-4 leading-7 text-ivory/70">{description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Visit {title}
                    <ArrowRight size={17} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Portfolio />
      <CTA />
    </>
  );
}

function MuvhenekiPage() {
  return (
    <>
      <Hero />
      <Intro />
      <BrandCards />
      <MuvhenekiDepthSections />
      <About />
      <WhyUs />
      <CTA />
      <ContactForm />
    </>
  );
}

function MuvhenekiDepthSections() {
  const offerings = [
    {
      title: "Soul Sessions",
      description: "Reflective one-on-one spaces for self-love, restoration, personal truth, and gentle rebirth.",
      Icon: HandHeart,
    },
    {
      title: "Poetry & Written Messages",
      description: "Words created to name what the heart is carrying and offer language for healing.",
      Icon: PenLine,
    },
    {
      title: "Daily Divinations",
      description: "Short intuitive messages and card pulls for grounding, clarity, and emotional direction.",
      Icon: Sparkles,
    },
    {
      title: "Monthly Message",
      description: "A longer seasonal reflection to guide the month with tenderness, intention, and courage.",
      Icon: CalendarCheck,
    },
  ];

  const ritualSteps = [
    "Choose a deck, message, or session that matches the season you are in.",
    "Sit with the words slowly through journaling, meditation, prayer, or quiet reflection.",
    "Return to the affirmation as a daily reminder until it becomes part of your inner language.",
  ];

  return (
    <section className="bg-linen/45 py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow">Muvheneki Practice</p>
            <h2 className="section-title mt-5">A sanctuary for words, ritual, and return.</h2>
          </div>
          <p className="body-copy">
            Muvheneki is not only a product line. It is a reflective practice built around healing
            language, affirmation, meditation, and guided self-connection.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {offerings.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-[1.75rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft">
              <Icon size={25} strokeWidth={1.4} className="text-clay" />
              <h3 className="mt-8 font-display text-3xl font-medium leading-none">{title}</h3>
              <p className="mt-4 leading-7 text-charcoal/68">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-charcoal p-7 text-ivory shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">How It Works</p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {ritualSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-ivory/12 bg-ivory/[0.07] p-6">
                <span className="font-display text-5xl text-gold/70">0{index + 1}</span>
                <p className="mt-5 leading-7 text-ivory/72">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DarrylPage() {
  const projects = [
    ["Guesthouse Mood Reference", darrylProjectOne],
    ["Organic Bedroom Direction", darrylProjectTwo],
    ["Warm Dining Reference", darrylProjectThree],
    ["Exterior Arrival Mood", darrylProjectFour],
  ];
  const services = [
    ["Interior Styling", "Layering furniture, decor, lighting, and objects into warm lived-in spaces."],
    ["Exterior Direction", "Creating considered outdoor transitions, arrival moments, and atmosphere."],
    ["Space Transformation", "Refreshing rooms or full environments with intention, comfort, and flow."],
    ["Furniture & Decor Selection", "Choosing pieces that honour longevity, craft, and everyday use."],
  ];
  const process = [
    "Discovery and spatial intention",
    "Mood, material, and furniture direction",
    "Styling, sourcing, and transformation plan",
    "Refinement for warmth, purpose, and longevity",
  ];

  return (
    <section className="pt-32">
      <div className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <img src={darrylLogo} alt="Darryl Interiors logo" className="h-20 w-20 rounded-full bg-ivory object-contain p-2 shadow-soft" />
            <p className="eyebrow mt-8">Darryl Interiors</p>
            <h1 className="section-title mt-5">The art of spatial alchemy.</h1>
            <p className="body-copy mt-7">
              Darryl Interiors is dedicated to transforming both interior and exterior environments into
              spaces of beauty, purpose, and connection. Rooted in organic and natural design principles,
              the work creates warm, inviting spaces that feel deeply lived in and effortlessly elegant.
            </p>
            <p className="body-copy mt-5">
              The practice thoughtfully embraces refinement, craftsmanship, and longevity, designing
              environments that endure and inspire for years to come.
            </p>
            <a href="#darryl-contact" className="button-primary mt-8">Book a consult</a>
          </div>
          <img src={darrylPortrait} alt="Darryl Interiors portrait" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-glow" />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title mt-5">Organic spaces with soul and structure.</h2>
            <p className="body-copy mt-6">
              Darryl Interiors works across homes, guesthouses, offices, exterior moments, and intimate
              environments where beauty must also feel usable and alive.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(([title, description]) => (
              <article key={title} className="rounded-[1.5rem] border border-taupe/20 bg-ivory/75 p-6 shadow-soft">
                <Ruler size={24} strokeWidth={1.4} className="text-clay" />
                <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-charcoal/66">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-linen/55 p-7 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Design Approach</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-5xl">
                Warmth, craft, connection, and time.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((item, index) => (
                <div key={item} className="rounded-3xl bg-ivory/80 p-5">
                  <span className="font-display text-4xl text-gold/75">0{index + 1}</span>
                  <p className="mt-4 text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Previous Projects</p>
          <h2 className="section-title mt-5">Warm references for interiors and exteriors.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(([title, image]) => (
              <article key={title} className="overflow-hidden rounded-[1.75rem] bg-linen shadow-soft">
                <img src={image} alt="" className="aspect-[4/5] w-full object-cover" />
                <h3 className="p-5 font-display text-2xl font-medium">{title}</h3>
              </article>
            ))}
          </div>
        </div>

        <div id="darryl-contact" className="mt-16 rounded-[2rem] bg-charcoal p-8 text-ivory shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Darryl Interiors</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none sm:text-5xl">
            Ready to shape a warmer, more intentional space?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-ivory/70">
            Book a consult for interior styling, exterior direction, organic space planning, refinement,
            and project transformation.
          </p>
          <a href="#muvheneki" className="button-primary mt-8 bg-gold text-charcoal hover:bg-ivory">Use contact form</a>
        </div>
      </div>
    </section>
  );
}

function CreativePage() {
  const industries = ["Music", "Aviation", "Lifestyle", "Banking", "Marketing", "Project management"];
  const capabilities = [
    ["Brand Direction", "Clarifying the creative position, tone, offer, and visual direction."],
    ["Creative Strategy", "Turning ideas into structured campaigns, concepts, and project roadmaps."],
    ["Marketing Execution", "Helping brands move from intention to market-facing action."],
    ["Project Consulting", "Keeping timelines, collaborators, and deliverables aligned from concept to completion."],
  ];
  const delivery = [
    "Understand the brand or project context",
    "Define the creative and strategic direction",
    "Build the execution plan and visual concept",
    "Guide delivery, refinement, and growth",
  ];

  return (
    <section className="pt-32">
      <div className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <img src={consultingLogo} alt="Creative Consulting Inc. logo" className="h-20 w-20 rounded-full bg-ivory object-contain p-2 shadow-soft" />
            <p className="eyebrow mt-8">Creative Consulting Inc.</p>
            <h1 className="section-title mt-5">Strategy, creativity, and execution.</h1>
            <p className="body-copy mt-7">
              Creative Consulting exists at the intersection of strategy, creativity, and execution.
              Working across industries including music, aviation, lifestyle, and banking, the studio
              guides brands from concept to completion through intelligent marketing, seamless project
              management, and purposeful growth.
            </p>
            <a href="#creative-contact" className="button-primary mt-8">Book a consult</a>
          </div>
          <img src={consultingPortrait} alt="Creative Consulting portrait" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-glow" />
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

        <div className="mt-16 rounded-[2rem] bg-linen/55 p-7 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Consulting Process</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-5xl">
                Strategic enough to move, creative enough to matter.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {delivery.map((item, index) => (
                <div key={item} className="rounded-3xl bg-ivory/80 p-5">
                  <span className="font-display text-4xl text-gold/75">0{index + 1}</span>
                  <p className="mt-4 text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Previous Partners</p>
          <h2 className="section-title mt-5">Built for direction, delivery, and growth.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry} className="rounded-[1.5rem] border border-taupe/20 bg-ivory/70 p-6 shadow-soft">
                <Layers3 size={24} strokeWidth={1.4} className="text-clay" />
                <h3 className="mt-8 text-lg font-semibold">{industry}</h3>
              </article>
            ))}
          </div>
        </div>

        <div id="creative-contact" className="mt-16 rounded-[2rem] bg-charcoal p-8 text-ivory shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Creative Consulting Inc.</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none sm:text-5xl">
            Need direction from concept to completion?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-ivory/70">
            Book a consult for creative strategy, intelligent marketing, project management, visual
            concepts, and purposeful brand growth.
          </p>
          <a href="#muvheneki" className="button-primary mt-8 bg-gold text-charcoal hover:bg-ivory">Use contact form</a>
        </div>
      </div>
    </section>
  );
}
