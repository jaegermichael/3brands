import creativeImage from "../assets/muvheneki-portrait.jpg";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -bottom-6 -right-5 h-32 w-32 rounded-full border border-gold/45" />
          <figure className="relative overflow-hidden rounded-[2rem] border border-ivory shadow-glow">
            <img src={creativeImage} alt="Creative direction table with materials and styling notes" className="aspect-[4/5] w-full object-cover" />
          </figure>
        </Reveal>

        <Reveal>
          <p className="eyebrow">Soul Sessions & Meditations</p>
          <div className="gold-rule my-6" />
          <h2 className="section-title">Words that heal, held with intention.</h2>
          <p className="body-copy mt-7">
            Muvheneki meditations are created for grounding, softness, self-worth, and moments when the
            heart needs a steadier sentence. Pair them with an affirmation deck pull, a journal entry,
            or a warm drink in your favorite mug.
          </p>
          <blockquote className="mt-9 border-l border-gold pl-6 font-display text-3xl leading-tight text-umber sm:text-4xl">
            I am loved. I am important. I am allowed to begin again.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
