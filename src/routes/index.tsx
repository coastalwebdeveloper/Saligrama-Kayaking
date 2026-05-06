import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import {
  Star, Users, ShieldCheck, Sunrise, ArrowRight, Compass, Waves, Heart, Phone,
} from "lucide-react";

import hero from "@/assets/hero-kayak.jpg";
import mangrove from "@/assets/mangrove-kayak.jpg";
import nature from "@/assets/mangrove-nature.jpg";
import sunrise from "@/assets/sunrise-kayak.jpg";
import ctaBg from "@/assets/cta-sunset.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Saligrama Kayaking Point — Mangrove Kayaking in Udupi" },
      { name: "description", content: "Guided kayaking tours through the serene mangroves and backwaters of Saligrama, Udupi. Sunrise & sunset rides, beginner-friendly, 4.9★ rated." },
      { property: "og:title", content: "Saligrama Kayaking Point" },
      { property: "og:description", content: "Premium guided mangrove kayaking experiences in Udupi, Karnataka." },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";
const PHONE = "tel:+917259277799";

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <img
        src={hero}
        alt="Aerial view of kayakers paddling through mangroves at golden hour in Saligrama, Udupi"
        width={1920} height={1080}
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ transform: `translateY(${offset}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute left-1/2 bottom-24 -translate-x-1/2 w-72 h-72 rounded-full ring-ripple opacity-60" />
      <div className="absolute left-[20%] bottom-40 w-40 h-40 rounded-full ring-ripple opacity-40" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-5 lg:px-8 text-white">
        <span className="inline-flex items-center gap-2 self-start glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] animate-fade-in">
          <Compass className="w-3.5 h-3.5 text-secondary" /> Saligrama · Udupi
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance animate-fade-up">
          Explore the Hidden <span className="text-secondary">Backwaters</span> of Udupi
        </h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg text-white/85 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Kayak through serene mangroves, calm rivers, and unforgettable landscapes — guided every paddle of the way.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow h-12 px-7">
              Book Now <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </a>
          <Link to="/experiences">
            <Button size="lg" variant="outline" className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white h-12 px-7">
              View Experiences
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs flex flex-col items-center gap-1">
          <span className="w-px h-10 bg-white/40 animate-pulse" />
          Scroll
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Star, label: "4.9 ★ Rating", sub: "Google Reviews" },
    { icon: Users, label: "2,600+", sub: "Happy Visitors" },
    { icon: ShieldCheck, label: "Safe Tours", sub: "Certified Guides" },
    { icon: Sunrise, label: "Sunrise & Sunset", sub: "Daily Rides" },
  ];
  return (
    <section className="relative -mt-12 z-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-card rounded-2xl shadow-soft overflow-hidden">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-4 p-6 border-b lg:border-b-0 lg:border-r last:border-r-0 border-border">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-highlight text-primary">
                <it.icon className="w-5 h-5" />
              </span>
              <div>
                <div className="font-display font-semibold text-foreground">{it.label}</div>
                <div className="text-xs text-muted-foreground">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const points = [
    "Safe for absolute beginners — no experience needed",
    "Guided routes through pristine mangroves",
    "Scenic, calm waters perfect for photography",
    "Ideal for couples, families and groups",
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative h-[460px] sm:h-[540px]">
          <div className="absolute left-0 top-0 w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-glow ring-4 ring-background animate-[float_7s_ease-in-out_infinite]">
            <img src={mangrove} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute right-0 top-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-glow ring-4 ring-background animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}>
            <img src={nature} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute left-12 bottom-0 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-glow ring-4 ring-background animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: "2s" }}>
            <img src={sunrise} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <span className="absolute bottom-6 right-2 glass text-primary px-4 py-2 rounded-full text-xs font-semibold bg-card/90">
            <Heart className="w-3.5 h-3.5 inline mr-1 text-accent" /> Loved by 2,600+
          </span>
        </div>
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Why we exist</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-primary text-balance">
            Professionally Guided Kayaking Adventures
          </h2>
          <p className="mt-5 text-muted-foreground">
            Saligrama Kayaking Point is run by passionate locals who know every bend of the Sita river backwaters. We pair authentic experiences with serious safety standards — so you can simply paddle and breathe.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 grid place-items-center w-6 h-6 rounded-full bg-secondary/30 text-primary">
                  <Waves className="w-3.5 h-3.5" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/experiences">
            <Button className="mt-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-7">
              Explore Experiences <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <img src={ctaBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center text-white reveal">
        <h2 className="text-4xl sm:text-6xl font-bold text-balance">Ready for an Unforgettable Adventure?</h2>
        <p className="mt-5 text-white/85 max-w-xl mx-auto">
          Slots fill up fast on weekends and holidays. Reserve your kayak in seconds.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 shadow-glow">
              Book Your Slot
            </Button>
          </a>
          <a href={PHONE}>
            <Button size="lg" variant="outline" className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white h-12 px-7">
              <Phone className="w-4 h-4 mr-2" /> Contact Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  useReveal();
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Highlights />
      <Featured />
      <HomeCTA />
      <Footer />
      <StickyBook />
    </main>
  );
}
