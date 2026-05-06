import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";

import hero from "@/assets/hero-kayak.jpg";
import mangrove from "@/assets/mangrove-kayak.jpg";
import sunrise from "@/assets/sunrise-kayak.jpg";
import sunset from "@/assets/sunset-kayak.jpg";
import group from "@/assets/group-kayak.jpg";
import nature from "@/assets/mangrove-nature.jpg";
import guide from "@/assets/guide.jpg";
import ctaBg from "@/assets/cta-sunset.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Saligrama Kayaking Point" },
      { name: "description", content: "Real photographs from our kayaking guests and guides at Saligrama, Udupi." },
    ],
  }),
});

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";

const photos = [
  { src: hero, alt: "Aerial view of mangroves", label: "Mangrove Views", category: "Nature" },
  { src: sunset, alt: "Kayaking at sunset", label: "Sunset Paddle", category: "Sunset" },
  { src: group, alt: "Group kayaking activity", label: "Group Adventures", category: "Groups" },
  { src: nature, alt: "Wildlife in mangroves", label: "Nature & Wildlife", category: "Nature" },
  { src: mangrove, alt: "Mangrove tunnel kayaking", label: "Hidden Waterways", category: "Nature" },
  { src: sunrise, alt: "Sunrise kayaking", label: "Sunrise Magic", category: "Sunrise" },
  { src: guide, alt: "Kayak guide", label: "Expert Guides", category: "Team" },
  { src: ctaBg, alt: "Sunset over backwaters", label: "Golden Hour", category: "Sunset" },
];

function GalleryPage() {
  useReveal();
  return (
    <main className="bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-teal text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">Visual Stories</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold text-balance">Moments on the Water</h1>
          <p className="mt-4 max-w-xl mx-auto text-white/85">
            Real photographs from our guests and guides — every frame tells a story of the backwaters.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((p, i) => (
              <figure
                key={i}
                className="reveal group relative break-inside-avoid rounded-2xl overflow-hidden shadow-soft"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-1">{p.category}</span>
                  <div className="text-white font-display font-semibold">{p.label}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-highlight/40 text-center">
        <div className="mx-auto max-w-xl px-5 reveal">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Want to be in the next photo?</h2>
          <p className="mt-3 text-muted-foreground">Book your kayaking experience and create your own memories.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-6 inline-block">
            <button className="rounded-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-7 shadow-glow transition-colors">
              Book Now on WhatsApp
            </button>
          </a>
        </div>
      </section>

      <Footer />
      <StickyBook />
    </main>
  );
}
