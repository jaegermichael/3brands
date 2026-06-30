const quickLinks = [
  ["Home", "#home"],
  ["Muvheneki", "#muvheneki"],
  ["Darryl Interiors", "#darryl"],
  ["Creative Consulting", "#creative"],
];

export default function Footer({ route = "home" }) {
  const brandData = {
    muvheneki: {
      name: "Muvheneki",
      subtitle: "Words that heal.",
      socials: [{ label: "Muvheneki", handle: "@Muvheneki", href: "https://www.instagram.com/Muvheneki" }],
      emails: ["hello@muvheneki.co.zw"],
      phone: "+263 78 183 9151",
    },
    darryl: {
      name: "Darryl Interiors",
      subtitle: "Interiors.",
      socials: [{ label: "Darryl Interiors", handle: "@Darrylinteriors", href: "https://www.instagram.com/Darrylinteriors" }],
      emails: ["info@daryllinteriors.co.zw"],
      phone: null,
    },
    creative: {
      name: "Creative Consulting Inc.",
      subtitle: "Creative strategy.",
      socials: [{ label: "Creative Consulting", handle: "@creativeconsulting.inc", href: "https://www.instagram.com/creativeconsulting.inc" }],
      emails: ["info@creativeconsulting.co.zw"],
      phone: null,
    },
    home: {
      name: "The Briarcliff Group",
      subtitle: "Interiors. Words that heal. Creative strategy.",
      socials: [
        { label: "Muvheneki", handle: "@Muvheneki", href: "https://www.instagram.com/Muvheneki" },
        { label: "Darryl Interiors", handle: "@Darrylinteriors", href: "https://www.instagram.com/Darrylinteriors" },
        { label: "Creative Consulting", handle: "@creativeconsulting.inc", href: "https://www.instagram.com/creativeconsulting.inc" },
      ],
      emails: ["hello@muvheneki.co.zw", "info@daryllinteriors.co.zw", "info@creativeconsulting.co.zw"],
      phone: "+263 78 183 9151",
    },
  };

  const data = brandData[route] || brandData.home;

  return (
    <footer className="bg-charcoal py-14 text-ivory">
      <div className="section-shell grid gap-10 border-b border-ivory/12 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <p className="font-display text-4xl font-medium">{data.name}</p>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">
            {data.subtitle}
          </p>
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
          <p className="text-sm font-semibold text-gold">Social</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            {data.socials.map((s) => (
              <a
                key={s.handle}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold"
              >
                {s.handle}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            {data.emails.map((email) => (
              <span key={email}>{email}</span>
            ))}
            {data.phone && <span>{data.phone}</span>}
          </div>
        </div>
      </div>
      <div className="section-shell pt-6 text-sm text-ivory/50">
        <p>Contact details can be updated whenever the brand details change.</p>
      </div>
    </footer>
  );
}
