import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { Reveal, TiltCard, Counter, Petals } from "@/components/Motion";
import { Divider, Icon, Corner, Mandala } from "@/components/Ornaments";
import { site, stats, events, amenities, addons, gallery } from "@/data/site";

const galleryTones: Record<string, string> = {
  maroon: "from-maroon-600 via-maroon-700 to-maroon-900",
  gold: "from-gold-600 via-marigold-dark to-maroon-800",
  emerald: "from-emerald-deep via-maroon-800 to-maroon-900",
  marigold: "from-marigold via-marigold-dark to-maroon-800",
};

function SectionTitle({ kicker, title, deva }: { kicker: string; title: string; deva?: string }) {
  return (
    <Reveal className="text-center">
      <p className="font-serif text-sm uppercase tracking-[0.4em] text-marigold">{kicker}</p>
      <h2 className="flourish mt-3 font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
        {title}
      </h2>
      {deva && <p className="mt-3 font-deva text-lg text-cream/60">{deva}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="relative bg-royal">
      <Navbar />
      <Petals />
      <Hero />

      {/* ------------------------------------------------------------------ ABOUT */}
      <section id="about" className="relative overflow-hidden py-24 sm:py-32">
        <Mandala className="spin-slow-reverse pointer-events-none absolute -left-40 top-10 h-96 w-96 opacity-10" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <Corner className="absolute -left-3 -top-3 h-12 w-12" />
              <Corner className="absolute -right-3 -top-3 h-12 w-12 rotate-90" />
              <Corner className="absolute -bottom-3 -left-3 h-12 w-12 -rotate-90" />
              <Corner className="absolute -bottom-3 -right-3 h-12 w-12 rotate-180" />
              <div className="panel overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-maroon-600 via-maroon-800 to-maroon-900">
                  <Mandala className="spin-slow absolute inset-0 h-full w-full opacity-30" />
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div>
                      <p className="font-deva text-4xl text-gold-gradient">श्री</p>
                      <p className="mt-2 font-display tracking-[0.3em] text-cream/70">EST. LONAR</p>
                      <p className="mt-6 font-serif text-lg italic text-cream/60">
                        A venue built for grand traditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionTitle kicker="Welcome to" title="Our Story" deva="आपले सहर्ष स्वागत" />
            <Reveal delay={0.1}>
              <p className="mt-6 font-serif text-xl leading-relaxed text-cream/80">
                Nestled in the historic town of Lonar, <span className="text-gold-300">{site.name}</span> is
                where families gather to celebrate life&rsquo;s most precious moments. From sacred weddings to
                joyful naming ceremonies, every occasion is graced with royal elegance and heartfelt
                hospitality.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 font-serif text-lg leading-relaxed text-cream/65">
                With sprawling green lawns, air-conditioned halls, ample parking and round-the-clock security,
                we blend timeless tradition with modern comfort — so you can cherish the celebration while we
                take care of everything else.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#events"
                className="rounded-full gold-surface px-7 py-3 font-sans font-semibold transition-transform hover:scale-105"
              >
                Explore Occasions
              </a>
              <a
                href="#gallery"
                className="rounded-full gold-border bg-maroon-800/40 px-7 py-3 font-sans font-semibold text-gold-200 transition-colors hover:bg-maroon-700/60"
              >
                View Gallery
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ STATS */}
      <section className="relative border-y border-gold-500/20 bg-maroon-800/30 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-serif text-lg text-cream/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ EVENTS */}
      <section id="events" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            kicker="Every Occasion, Celebrated"
            title="Occasions We Host"
            deva="प्रत्येक सोहळ्यासाठी उत्तम स्थळ"
          />
          <div className="tilt-3d mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((ev, i) => (
              <Reveal key={ev.title} delay={(i % 3) * 0.1}>
                <TiltCard className="panel h-full rounded-2xl p-7">
                  <div className="mb-5 inline-grid h-16 w-16 place-items-center rounded-2xl gold-surface text-maroon-800">
                    <Icon name={ev.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl text-gold-300">{ev.title}</h3>
                  <p className="mt-1 font-deva text-marigold/90">{ev.deva}</p>
                  <p className="mt-3 font-serif text-lg leading-relaxed text-cream/70">{ev.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ FACILITIES */}
      <section id="facilities" className="relative overflow-hidden bg-maroon-800/30 py-24 sm:py-32">
        <Mandala className="spin-slow pointer-events-none absolute -right-52 top-20 h-[40rem] w-[40rem] opacity-10" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            kicker="Comfort Meets Grandeur"
            title="Facilities & Amenities"
            deva="सर्व सोयीसुविधांनी युक्त"
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-2xl gold-border bg-maroon-900/30 p-5 transition-colors hover:bg-maroon-800/50">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-500/10 text-gold-300 transition-colors group-hover:bg-gold-500/20">
                    <Icon name={a.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-gold-200">{a.title}</h3>
                    <p className="mt-1 font-serif text-base text-cream/65">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Add-on services */}
          <Reveal delay={0.15} className="mt-12">
            <div className="panel rounded-2xl p-7 text-center">
              <p className="font-serif text-sm uppercase tracking-[0.3em] text-marigold">
                Optional Add-on Services
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {addons.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-gold-500/30 bg-maroon-900/40 px-5 py-2 font-sans text-sm text-cream/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ GALLERY */}
      <section id="gallery" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="A Glimpse Inside" title="Gallery" deva="काही क्षणचित्रे" />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl gold-border">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${galleryTones[g.tone]} transition-transform duration-700 group-hover:scale-110`}
                  />
                  <Mandala className="absolute -right-10 -top-10 h-40 w-40 opacity-20 transition-opacity group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-lg text-gold-200 translate-y-2 opacity-90 transition-transform duration-500 group-hover:translate-y-0">
                      {g.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-8 text-center">
            <p className="font-serif text-base italic text-cream/50">
              Replace these tiles with real photographs of your venue for a stunning showcase.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ TESTIMONIALS */}
      <section className="relative bg-maroon-800/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Blessings From Our Guests" title="Kind Words" deva="आमच्या पाहुण्यांचे अनुभव" />
          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ CONTACT */}
      <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
        <Mandala className="spin-slow pointer-events-none absolute -left-48 bottom-0 h-[36rem] w-[36rem] opacity-10" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Reserve Your Date" title="Book Your Celebration" deva="आपली तारीख निश्चित करा" />
          <Divider className="mt-6" />
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {/* Info + map */}
            <div className="space-y-6">
              <Reveal>
                <div className="space-y-4">
                  {[
                    { icon: "phone", label: "Call / WhatsApp", value: site.phonePrimary, href: site.phoneHref },
                    { icon: "pin", label: "Location", value: site.location },
                    { icon: "clock", label: "Timings", value: site.hours },
                  ].map((row) => (
                    <a
                      key={row.label}
                      href={row.href}
                      className="flex items-center gap-4 rounded-2xl gold-border bg-maroon-900/30 p-5 transition-colors hover:bg-maroon-800/50"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gold-surface text-maroon-800">
                        <Icon name={row.icon} className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block font-serif text-sm uppercase tracking-widest text-marigold">
                          {row.label}
                        </span>
                        <span className="block font-display text-lg text-gold-200">{row.value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl gold-border">
                  <iframe
                    title="Map to Shree Mangal Karyalay, Lonar"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                    className="h-64 w-full grayscale-[0.2]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ FOOTER */}
      <footer className="relative border-t border-gold-500/25 bg-maroon-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full gold-surface font-display font-bold text-maroon-800">
                श्री
              </span>
              <div className="text-left">
                <p className="font-display text-lg text-gold-300">{site.name}</p>
                <p className="font-serif text-sm text-cream/55">{site.location}</p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap justify-center gap-6 font-serif text-cream/70">
              <a href="#about" className="hover:text-gold-300">About</a>
              <a href="#events" className="hover:text-gold-300">Occasions</a>
              <a href="#facilities" className="hover:text-gold-300">Facilities</a>
              <a href="#gallery" className="hover:text-gold-300">Gallery</a>
              <a href="#contact" className="hover:text-gold-300">Contact</a>
            </div>
            <div className="flex gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-full gold-surface px-6 py-2.5 font-sans text-sm font-semibold"
              >
                <Icon name="phone" className="h-4 w-4" /> Call Now
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full gold-border bg-maroon-800/40 px-6 py-2.5 font-sans text-sm font-semibold text-gold-200"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <p className="mt-4 font-sans text-xs text-cream/40">
              © {new Date().getFullYear()} {site.name}, Lonar. All rights reserved. · Crafted with devotion 🪔
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
