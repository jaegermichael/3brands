import { Compass, Gem, HandHeart, Layers3 } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  { title: "One connected creative vision", Icon: Layers3 },
  { title: "Premium design approach", Icon: Gem },
  { title: "Culturally inspired details", Icon: HandHeart },
  { title: "Practical, beautiful solutions", Icon: Compass },
];

export default function WhyUs() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="section-shell">
        <Reveal className="rounded-[2rem] border border-taupe/20 bg-paper-wash px-6 py-8 shadow-soft sm:px-8 lg:px-10">
          <div className="grid gap-8 border-b border-taupe/20 pb-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Why Work With Us</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-5xl">A house with range and restraint.</h2>
            </div>
            <p className="body-copy">
              Every service is grounded in an eye for atmosphere, cultural meaning, and real-world use.
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, Icon }) => (
              <article key={title} className="rounded-3xl border border-ivory/90 bg-ivory/70 p-5">
                <Icon size={24} strokeWidth={1.4} className="text-clay" />
                <h3 className="mt-8 text-base font-semibold leading-6">{title}</h3>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
