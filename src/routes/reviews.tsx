import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import { Star } from "lucide-react";

import nature from "@/assets/mangrove-nature.jpg";
import hero from "@/assets/hero-kayak.jpg";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews — Saligrama Kayaking Point" },
      { name: "description", content: "Read what our guests say about kayaking at Saligrama, Udupi. 4.9★ rated on Google." },
    ],
  }),
});

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";

const reviews = [
  { name: "Abhiram V", stars: 5, date: "March 2024", text: "Amazing experience kayaking through the mangroves! The guides were super helpful and made sure we felt safe the whole time. Sunset view was unreal." },
  { name: "Priya Shenoy", stars: 5, date: "February 2024", text: "Hidden gem of Udupi. Calm waters, friendly team, and the mangrove route is breathtaking. Worth every rupee." },
  { name: "Rahul Kamath", stars: 5, date: "January 2024", text: "Did the sunrise ride with friends — felt like floating on glass. Highly recommend for beginners, very well organized." },
  { name: "Sneha Pai", stars: 4, date: "December 2023", text: "Loved the whole vibe. Reached early and got a quick safety briefing. The guide pointed out birds we'd never have spotted ourselves." },
  { name: "Karthik R", stars: 5, date: "November 2023", text: "Best activity we did on our Udupi trip. Affordable, authentic, and genuinely fun. Going back with family next month!" },
  { name: "Meera Nair", stars: 5, date: "October 2023", text: "Absolutely magical! The mangrove tunnel was like something out of a movie. Our guide was knowledgeable and made the whole experience special." },
  { name: "Suresh Bhat", stars: 5, date: "September 2023", text: "Took my family for the group package. Kids loved it, parents loved it. The guides were patient and made everyone feel comfortable." },
  { name: "Ananya Rao", stars: 5, date: "August 2023", text: "The sunrise kayaking was a dream. Misty water, birds calling, golden light — I've never felt so peaceful. Highly recommend!" },
  { name: "Vikram Shetty", stars: 4, date: "July 2023", text: "Great experience overall. The backwaters are stunning and the guides really know their stuff. Will definitely come back for the sunset ride." },
];

function ReviewsPage() {
  useReveal();
  return (
    <main className="bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-teal text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${nature})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">Google Reviews</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold text-balance">What Paddlers Are Saying</h1>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}</div>
            <span className="text-white/90">4.9 average · verified Google reviews</span>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-highlight/40">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="reveal grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="text-5xl font-bold text-accent font-display">4.9</div>
              <div className="flex justify-center mt-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
              <div className="mt-2 text-sm text-muted-foreground">Overall Rating</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="text-5xl font-bold text-primary font-display">2,600+</div>
              <div className="mt-2 text-sm text-muted-foreground">Happy Visitors</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="text-5xl font-bold text-primary font-display">100%</div>
              <div className="mt-2 text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="reveal bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-shadow"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full grid place-items-center bg-primary text-primary-foreground font-bold font-display shrink-0">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{r.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex">{[...Array(r.stars)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />)}</div>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{r.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={hero} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center text-white reveal">
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">Join 2,600+ Happy Paddlers</h2>
          <p className="mt-4 text-white/85">Create your own story on the backwaters of Saligrama.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-6 inline-block">
            <button className="rounded-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-7 shadow-glow transition-colors">
              Book Your Experience
            </button>
          </a>
        </div>
      </section>

      <Footer />
      <StickyBook />
    </main>
  );
}
