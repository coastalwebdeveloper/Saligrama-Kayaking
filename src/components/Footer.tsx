import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram } from "lucide-react";

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";
const PHONE = "tel:+917259277799";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 font-display font-bold text-lg">
            <img
              src="/SKP_Logo_New.png"
              alt="Saligrama Kayaking Point Logo"
              height={48}
              className="object-contain shrink-0 bg-white p-1.5 rounded-lg"
              style={{ maxHeight: 48, width: "auto" }}
            />
            Saligrama Kayaking
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Premium guided kayaking adventures through the mangroves and backwaters of Udupi.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/experiences" className="hover:text-secondary transition-colors">Experiences</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
            <li><Link to="/media" className="hover:text-secondary transition-colors">Media</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/reviews" className="hover:text-secondary transition-colors">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Activities</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Mangrove Kayaking</li>
            <li>Sunrise Rides</li>
            <li>Sunset Experience</li>
            <li>Group Packages</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <a
                href="https://www.google.com/maps/place/Saligrama+Kayaking+Point+-+Sails+and+More+Adventures+Udupi/@13.491321,74.6924686,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbc97dec29c7f9d:0x1db74e95529aac6a!8m2!3d13.4913158!4d74.6950435!16s%2Fg%2F11rhs2vqn3?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Saligrama Kayaking Point,<br />Karnataka 576226
              </a>
            </li>
            <li>
              <a href={PHONE} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> +91 72592 77799
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60 space-y-1">
        <div>© {new Date().getFullYear()} Saligrama Kayaking Point. Crafted with the tide.</div>
        <div>
          Designed & Developed by{" "}
          <a
            href="https://www.samvadacommunications.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary-foreground/80 hover:text-secondary transition-colors"
          >
            Samvada Communications
          </a>
        </div>
      </div>
    </footer>
  );
}
