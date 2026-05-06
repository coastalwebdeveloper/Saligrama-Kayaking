import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";

import mangrove from "@/assets/mangrove-kayak.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Saligrama Kayaking Point" },
      { name: "description", content: "Get in touch with Saligrama Kayaking Point. Book your kayaking experience or send us an inquiry." },
    ],
  }),
});

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";
const PHONE = "tel:+917259277799";

const info = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Saligrama Kayaking Point, Saligrama", "Karnataka 576226, Udupi District"],
    href: "https://www.google.com/maps/place/Saligrama+Kayaking+Point+-+Sails+and+More+Adventures+Udupi/@13.491321,74.6924686,17z",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+91 72592 77799", "Call or WhatsApp anytime"],
    href: PHONE,
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: ["Daily: 6:00 AM – 7:00 PM", "Sunrise & Sunset slots available"],
  },
];

function ContactPage() {
  useReveal();
  return (
    <main className="bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-teal text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${mangrove})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">Get in Touch</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold text-balance">Contact Us</h1>
          <p className="mt-4 max-w-xl mx-auto text-white/85">
            We reply within minutes during operating hours. Book directly on WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Info */}
          <div className="reveal space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Find Us</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary text-balance">Visit Saligrama Kayaking Point</h2>
              <p className="mt-3 text-muted-foreground">
                Tucked along the backwaters of Saligrama, just off the coastal highway near Udupi.
              </p>
            </div>

            <div className="space-y-4">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-highlight/50 rounded-2xl">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-card shadow-soft text-accent shrink-0">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    {item.lines.map((line, j) => (
                      item.href && j === 0
                        ? <a key={j} href={item.href} className="block text-sm text-muted-foreground hover:text-accent transition-colors">{line}</a>
                        : <div key={j} className="text-sm text-muted-foreground">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button className="w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white h-12 gap-2">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </Button>
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-soft border border-border h-64">
              <iframe
                title="Saligrama Kayaking Point map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.4!2d74.6924686!3d13.491321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc97dec29c7f9d%3A0x1db74e95529aac6a!2sSaligrama%20Kayaking%20Point%20-%20Sails%20and%20More%20Adventures%20Udupi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Saligrama+Kayaking+Point+-+Sails+and+More+Adventures+Udupi/@13.491321,74.6924686,17z"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-accent font-medium hover:underline"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Hi, I'm ${fd.get("name")} (${fd.get("phone")}). ${fd.get("message")}`;
              window.open(`https://wa.me/917259277799?text=${encodeURIComponent(msg)}`, "_blank");
            }}
            className="reveal bg-card rounded-3xl shadow-glow p-8 sm:p-10 self-start"
          >
            <h3 className="font-display font-bold text-2xl text-primary">Send an Inquiry</h3>
            <p className="text-sm text-muted-foreground mt-1">We reply within minutes during operating hours.</p>
            <div className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <Input name="name" required placeholder="Full name" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input name="phone" required type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 rounded-xl" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Email (optional)</label>
                <Input name="email" type="email" placeholder="your@email.com" className="h-12 rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  name="message"
                  required
                  placeholder="When would you like to visit? How many people? Any special requests?"
                  rows={5}
                  className="rounded-xl"
                />
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="w-4 h-4 mr-2" /> Send via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <StickyBook />
    </main>
  );
}
