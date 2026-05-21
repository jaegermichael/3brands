// Replace this placeholder with photography that represents the full creative group.
import lifestyleImage from "../assets/heritage-lifestyle.jpg";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Darryl Creative House</p>
          <div className="gold-rule my-6" />
          <h2 className="section-title max-w-3xl">One refined vision for spaces, objects, and ideas.</h2>
          <p className="body-copy mt-7 max-w-2xl">
            Darryl Creative House brings together interior design, cultural lifestyle pieces, and creative
            strategy under one refined vision. Each brand serves a different purpose, but they all share
            the same foundation: beauty, meaning, and thoughtful design.
          </p>
        </Reveal>

        <Reveal className="relative">
          <div className="absolute -left-5 top-10 hidden h-[78%] w-px bg-gold/45 lg:block" />
          <figure className="overflow-hidden rounded-[2rem] border border-ivory bg-linen shadow-glow">
            <img
              src={lifestyleImage}
              alt="Heritage-inspired candles and handmade home pieces"
              className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
