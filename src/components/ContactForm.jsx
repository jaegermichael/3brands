import { MessageCircleMore, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function ContactForm() {
  return (
    <section id="contact" className="scroll-mt-28 bg-[#efe3d1] py-20 sm:py-28">
      <div className="section-shell grid gap-9 lg:grid-cols-[0.82fr_1fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-5">Start with the brand or service that feels right.</h2>
          <p className="body-copy mt-6 max-w-xl">
            Share the space, product interest, or creative challenge in front of you. The team can route
            your enquiry through Darryl Interiors, Muvheneki, or Creative Consulting.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-taupe/20 bg-ivory/60 p-6">
            <p className="text-sm font-semibold text-charcoal">Prefer WhatsApp? Message us directly.</p>
            <a href="https://wa.me/" className="button-primary mt-5">
              <MessageCircleMore size={18} />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal
          as="form"
          onSubmit={(event) => event.preventDefault()}
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
              What are you interested in?
              <select className="input-shell" name="interest" defaultValue="Not sure yet">
                <option>Darryl Interiors</option>
                <option>Muvheneki</option>
                <option>Creative Consulting</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-charcoal/80">
            Message
            <textarea className="input-shell min-h-40 resize-y py-4" name="message" placeholder="Tell us what you want to create." />
          </label>
          <button type="submit" className="button-primary mt-6">
            Send Enquiry
            <Send size={17} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
