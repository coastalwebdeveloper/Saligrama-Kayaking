import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import { ArrowRight, Clock, Users, ShieldCheck, Waves } from "lucide-react";

import mangrove from "@/assets/mangrove-kayak.jpg";
import sunrise from "@/assets/sunrise-kayak.jpg";
import sunset from "@/assets/sunset-kayak.jpg";
import group from "@/assets/group-kayak.jpg";
import guide from "@/assets/guide.jpg";

export const Route = createFileRoute("/experiences")({
  component: ExperiencesPage,
  head: () => ({
    meta: [
      { title: "Experiences — Saligrama Kayaking Point" },
      { name: "description", content: "Explore our kayaking experiences: mangrove tours, sunrise rides, sunset paddles, and group adventures in Udupi." },
    ],
  }),
});

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";

const exps = [
  {
    img: mangrove,
    title: "Mangrove Kayaking",
    desc: "Glide through tunnels of green mangroves and discover hidden waterways teeming with birds and wildlife. This is our signature experience — a slow, meditative paddle through nature's corridors.",
    price: "₹500",
    duration: "1.5 hrs",
    group: "1–6 people",
    level: "Beginner friendly",
  },
  {
    img: sunrise,
    title: "Sunrise Ride",
    desc: "Witness misty mornings and golden reflections on perfectly still water. The world wakes up around you as you paddle through the calm backwaters at dawn.",
    price: "₹600",
    duration: "2 hrs",
    group: "1–6 people",
    level: "Beginner friendly",
  },
  {
    img: sunset,
    title: "Sunset Experience",
    desc: "Paddle into a sky on fire — the most photographed hour of the day. Watch the sun dip below the horizon while floating on the serene Sita river backwaters.",
    price: "₹600",
    duration: "2 hrs",
    group: "1–6 people",
    level: "Beginner friendly",
  },
  {
    img: group,
    title: "Group Adventure",
    desc: "Special packages for friends, families and corporate teams. We arrange multiple kayaks, safety briefings, and guided routes tailored to your group's pace and comfort.",
    price: "From ₹450/pax",
    duration: "2–3 hrs",
    group: "7+ people",
    level: "All levels",
  },
];

const included = [
  "Life jackets & safety gear",
  "Certified local guide",
  "Kayak & paddle",
  "Safety briefing",
  "Photography tips",
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden gradient-teal text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${mangrove})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">What We Offer</span>
        <h1 className="mt-3 text-4xl sm:text-6xl font-bold text-balance">Our Experiences</h1>
        <p className="mt-4 max-w-xl mx-auto text-white/85">
          Curated kayaking journeys for every kind of explorer — from solo adventurers to large groups.
        </p>
      </div>
    </section>
  );
}

function ExperiencesPage() {
  useReveal();
  return (
    <main className="bg-background">
      <Nav />
      <PageHero />

      {/* Experience Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
          {exps.map((e, i) => (
            <article
              key={i}
              className={`reveal grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-glow aspect-[4/3]">
                <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 glass text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  {e.price}
                </span>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">{e.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{e.desc}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-highlight/60 rounded-xl p-3 text-center">
                    <Clock className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">Duration</div>
                    <div className="text-sm font-semibold text-foreground">{e.duration}</div>
                  </div>
                  <div className="bg-highlight/60 rounded-xl p-3 text-center">
                    <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">Group</div>
                    <div className="text-sm font-semibold text-foreground">{e.group}</div>
                  </div>
                  <div className="bg-highlight/60 rounded-xl p-3 text-center">
                    <ShieldCheck className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">Level</div>
                    <div className="text-sm font-semibold text-foreground">{e.level}</div>
                  </div>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <Button className="mt-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-11 px-6">
                    Book This Experience <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-highlight/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Every Experience Includes</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Everything You Need</h2>
            <p className="mt-4 text-muted-foreground">No hidden costs. Everything is included in your booking price.</p>
            <ul className="mt-8 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-soft">
                  <Waves className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal relative rounded-3xl overflow-hidden shadow-glow aspect-[4/5]">
            <img src={guide} alt="Certified kayak guide" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 text-white">
              <div className="text-xs uppercase tracking-widest text-secondary">Meet your guide</div>
              <div className="font-display font-bold text-lg mt-1">Local experts. Lifelong paddlers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-5 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Ready to Paddle?</h2>
          <p className="mt-4 text-muted-foreground">Book directly on WhatsApp — we confirm within minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 shadow-glow">
                Book on WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7">
                Send an Inquiry
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
