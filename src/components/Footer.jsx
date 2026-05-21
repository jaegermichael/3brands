const quickLinks = [
  ["Our Brands", "#brands"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14 text-ivory">
      <div className="section-shell grid gap-10 border-b border-ivory/12 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <p className="font-display text-4xl font-medium">Darryl Creative House</p>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">Interiors. Heritage. Creative Direction.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            {quickLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-ivory">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Brands</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            <span>Darryl Interiors</span>
            <span>Muvheneki</span>
            <span>Creative Consulting</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            <span>hello@yourstudio.com</span>
            <span>+000 000 000</span>
            <span>Instagram / Pinterest</span>
          </div>
        </div>
      </div>
      <div className="section-shell pt-6 text-sm text-ivory/50">
        <p>Creative lifestyle group for spaces, objects, and visual direction.</p>
      </div>
    </footer>
  );
}
