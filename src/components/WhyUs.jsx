import { Mail, MessageCircle, Phone, Quote, Send, Star } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  { title: "Daily divinations", detail: "Fresh reflective guidance", Icon: Star },
  { title: "Monthly message", detail: "Seasonal words and ritual notes", Icon: Quote },
  { title: "Instagram", detail: "@Muvheneki / @Darrylinteriors / @creativeconsulting.inc", Icon: Send },
  { title: "Twitter", detail: "Add the final handle here", Icon: MessageCircle },
  { title: "Email address", detail: "info.creativeconsultingzim@gmail.com", Icon: Mail },
  { title: "Contact number", detail: "0781839151", Icon: Phone },
  { title: "Testimonials", detail: "Space for client love and reflections", Icon: Quote },
];

export default function WhyUs() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="section-shell">
        <Reveal className="rounded-[2rem] border border-taupe/20 bg-paper-wash px-6 py-8 shadow-soft sm:px-8 lg:px-10">
          <div className="grid gap-8 border-b border-taupe/20 pb-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Connect With Muvheneki</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-none sm:text-5xl">Follow the messages where they find you.</h2>
            </div>
            <p className="body-copy">
              Receive daily and monthly reflections, ask about products, or send a note when you want to
              book a reading, message, or meditation.
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, detail, Icon }) => (
              <article key={title} className="rounded-3xl border border-ivory/90 bg-ivory/70 p-5">
                <Icon size={24} strokeWidth={1.4} className="text-clay" />
                <h3 className="mt-8 text-base font-semibold leading-6">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/60">{detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
