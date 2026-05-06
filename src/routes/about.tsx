import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import { Waves, ShieldCheck, Heart, Leaf } from "lucide-react";

import guide from "@/assets/guide.jpg";
import mangrove from "@/assets/mangrove-kayak.jpg";
import nature from "@/assets/mangrove-nature.jpg";
import group from "@/assets/group-kayak.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Saligrama Kayaking Point" },
      { name: "description", content: "Learn about Saligrama Kayaking Point — passionate locals guiding you through the mangroves and backwaters of Udupi." },
    ],
  }),
});

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "Every guide is certified and every kayaker is equipped with proper safety gear before entering the water." },
  { icon: Heart, title: "Genuine Hospitality", desc: "We treat every visitor like a guest in our home — with warmth, patience, and local knowledge." },
  { icon: Leaf, title: "Eco-Conscious", desc: "We operate with deep respect for the mangrove ecosystem — no noise, no waste, no disturbance to wildlife." },
  { icon: Waves, title: "Local Expertise", desc: "Born and raised on these waters, our guides know every bend, bird, and hidden waterway by heart." },
];

const stats = [
  { value: "2,600+", label: "Happy Visitors" },
  { value: "4.9★", label: "Google Rating" },
  { value: "5+", label: "Years of Experience" },
  { value: "100%", label: "Safety Record" },
];

function AboutPage() {
  useReveal();
  return (
    <main className="bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-teal text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${mangrove})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">Our Story</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold text-balance">About Saligrama Kayaking</h1>
          <p className="mt-4 max-w-xl mx-auto text-white/85">
            Passionate locals sharing the beauty of Udupi's backwaters with the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Who We Are</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary text-balance">
              Born from a Love of the Backwaters
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Saligrama Kayaking Point was founded by a group of local nature enthusiasts who grew up exploring the Sita river backwaters and mangrove forests of Saligrama, Udupi. What started as a personal passion became a mission — to share this hidden paradise with visitors from across India and the world.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every guide on our team is a local who has spent years on these waters. We don't just show you the route — we share the stories, the birds, the tides, and the quiet magic that makes this place so special.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over 2,600 happy visitors and a 4.9-star rating, we've built our reputation on one thing: genuine, safe, and unforgettable experiences.
            </p>
          </div>
          <div className="reveal relative rounded-3xl overflow-hidden shadow-glow aspect-[4/5]">
            <img src={guide} alt="Our kayak guide" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 text-white">
              <div className="text-xs uppercase tracking-widest text-secondary">Our Team</div>
              <div className="font-display font-bold text-lg mt-1">Local experts. Lifelong paddlers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-highlight/40">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="reveal text-center bg-card rounded-2xl p-6 shadow-soft" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-4xl font-bold text-accent font-display">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">What Drives Us</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-primary text-balance">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="reveal bg-card rounded-2xl p-6 shadow-soft" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-highlight text-primary mb-4">
                  <v.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display font-bold text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-16 bg-highlight/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden">
            {[nature, group, mangrove].map((src, i) => (
              <div key={i} className="reveal aspect-[4/3] overflow-hidden rounded-2xl" style={{ transitionDelay: `${i * 100}ms` }}>
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-5 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Come Paddle With Us</h2>
          <p className="mt-4 text-muted-foreground">Experience the backwaters the way locals do — authentically, safely, and beautifully.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 shadow-glow">
                Book an Experience
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBook />
    </main>
  );
}
