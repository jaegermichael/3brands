import { Menu, X } from "lucide-react";
import { useState } from "react";
import muvhenekiLogo from "../assets/muvheneki-logo.jpg";

const links = [
  ["Affirmation", "#affirmation"],
  ["Products", "#brands"],
  ["Group", "#services"],
  ["Blog", "#projects"],
  ["Meditations", "#about"],
  ["Connect", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto max-w-7xl rounded-[1.75rem] border border-ivory/55 bg-ivory/75 shadow-[0_16px_48px_rgba(39,35,31,0.12)] backdrop-blur-xl">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-5 px-5 sm:px-7">
          <a href="#home" className="flex min-w-0 items-center gap-3 text-charcoal">
            <img
              src={muvhenekiLogo}
              alt="Muvheneki logo"
              className="h-11 w-11 shrink-0 rounded-full bg-ivory object-contain p-1.5 shadow-sm"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-2xl font-semibold leading-none">Muvheneki</span>
              <span className="mt-1 hidden font-sans text-xs font-semibold uppercase tracking-[0.2em] text-clay sm:block">
                Briarcliff Group
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative text-sm font-medium text-charcoal/70 transition hover:text-charcoal after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {label}
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
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm font-medium text-charcoal/75 transition hover:bg-linen/50 hover:text-charcoal"
                >
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
