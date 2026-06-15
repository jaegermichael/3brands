import { Menu, X } from "lucide-react";
import { useState } from "react";
import consultingLogo from "../assets/creative-consulting-logo.jpg";
import darrylLogo from "../assets/darryl-interiors-logo.jpg";
import muvhenekiLogo from "../assets/muvheneki-logo.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Muvheneki", href: "#muvheneki", logo: muvhenekiLogo },
  { label: "Darryl Interiors", href: "#darryl", logo: darrylLogo },
  { label: "Creative Consulting", href: "#creative", logo: consultingLogo },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const brandLinks = links.filter((link) => link.logo);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-[1.35rem] border border-ivory/35 bg-ivory/82 shadow-[0_18px_55px_rgba(24,21,18,0.16)] backdrop-blur-2xl">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-4 px-5 sm:px-7">
          <a href="#home" className="flex min-w-max items-center text-charcoal">
            <span>
              <span className="block whitespace-nowrap font-display text-[1.7rem] font-semibold leading-none tracking-normal sm:text-[2.35rem] lg:text-[2.65rem]">
                The Briarcliff Group
              </span>
              <span className="mt-1.5 hidden font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-clay sm:block">
                Interiors / Words / Strategy
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#home"
              className="px-2 text-sm font-medium text-charcoal/62 transition hover:text-charcoal"
            >
              Home
            </a>
            <div className="flex items-center gap-2 rounded-full border border-taupe/20 bg-ivory/55 px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              {brandLinks.map(({ label, href, logo }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="grid h-12 w-12 place-items-center rounded-full transition duration-300 hover:bg-linen/80 hover:shadow-soft"
                >
                  <img src={logo} alt="" className="h-10 w-10 object-contain transition duration-300 hover:scale-105" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex lg:hidden">
            {brandLinks.map(({ label, href, logo }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-linen/70"
              >
                <img src={logo} alt="" className="h-9 w-9 object-contain" />
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-taupe/25 text-charcoal transition hover:border-gold hover:bg-linen/50 lg:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        <div className={`grid transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="grid gap-1 border-t border-taupe/15 px-4 py-4">
              {links.map(({ label, href, logo }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-charcoal/75 transition hover:bg-linen/50 hover:text-charcoal"
                >
                  {logo && <img src={logo} alt="" className="h-9 w-9 object-contain" />}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
