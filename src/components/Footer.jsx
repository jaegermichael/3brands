const quickLinks = [
  ["Home", "#home"],
  ["Muvheneki", "#muvheneki"],
  ["Darryl Interiors", "#darryl"],
  ["Creative Consulting", "#creative"],
];

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14 text-ivory">
      <div className="section-shell grid gap-10 border-b border-ivory/12 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <p className="font-display text-4xl font-medium">The Briarcliff Group</p>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">Interiors. Words that heal. Creative strategy.</p>
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
          <p className="text-sm font-semibold text-gold">Products</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            <span>Muvheneki</span>
            <span>Darryl Interiors</span>
            <span>Creative Consulting Inc.</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            <span>hello@muvheneki.com</span>
            <span>+000 000 000</span>
            <span>@Muvheneki / @Darrylinteriors / @creativeconsulting.inc</span>
          </div>
        </div>
      </div>
      <div className="section-shell pt-6 text-sm text-ivory/50">
        <p>Muvheneki catalogue available as a site download. Final email and contact number can be swapped in when ready.</p>
      </div>
    </footer>
  );
}
