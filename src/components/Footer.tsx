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
              className="object-contain shrink-0"
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
              className="grid place-items-center w-9 h-9 rounded-full transition text-white hover:scale-110"
              style={{ background: "#25D366", boxShadow: "0 4px 12px rgba(37,211,102,0.3)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
