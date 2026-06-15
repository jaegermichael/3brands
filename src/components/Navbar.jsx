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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto max-w-7xl rounded-[1.75rem] border border-ivory/55 bg-ivory/75 shadow-[0_16px_48px_rgba(39,35,31,0.12)] backdrop-blur-xl">
        <div className="flex min-h-[5rem] items-center justify-between gap-5 px-5 sm:px-7">
          <a href="#home" className="flex min-w-0 items-center gap-3 text-charcoal">
            <span className="flex shrink-0 -space-x-3">
              {[muvhenekiLogo, darrylLogo, consultingLogo].map((logo, index) => (
                <img
                  key={logo}
                  src={logo}
                  alt=""
                  className="h-12 w-12 object-contain drop-shadow-[0_8px_16px_rgba(39,35,31,0.2)]"
                  style={{ zIndex: 3 - index }}
                />
              ))}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-3xl font-semibold leading-none sm:text-4xl">The Briarcliff Group</span>
              <span className="mt-1 hidden font-sans text-xs font-semibold uppercase tracking-[0.2em] text-clay sm:block">
                Interiors / Words / Strategy
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map(({ label, href, logo }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="relative text-sm font-medium text-charcoal/70 transition hover:text-charcoal after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {logo ? (
                  <img src={logo} alt="" className="h-11 w-11 object-contain transition duration-300 hover:scale-110" />
                ) : (
                  label
                )}
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
