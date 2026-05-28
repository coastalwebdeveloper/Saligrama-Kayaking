import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experiences", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "Video Gallery", to: "/video-gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-background/90 backdrop-blur-md shadow-soft"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg">
          <img
            src="/SKP_Logo_New.png"
            alt="Saligrama Kayaking Point Logo"
            height={52}
            className="object-contain shrink-0"
            style={{ maxHeight: 52, width: "auto" }}
          />
          <span className={transparent ? "text-white" : "text-foreground"}>Saligrama Kayaking</span>
        </Link>

        <div className={`hidden md:flex items-center gap-6 text-sm font-medium ${transparent ? "text-white/90" : "text-foreground"}`}>
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent font-semibold" }}
              activeOptions={{ exact: to === "/" }}
            >
              {label}
            </Link>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft">
              Book Now
            </Button>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className={`md:hidden ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="py-2 text-foreground font-medium hover:text-accent transition-colors"
                activeProps={{ className: "py-2 text-accent font-semibold" }}
                activeOptions={{ exact: to === "/" }}
              >
                {label}
              </Link>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2">
              <Button className="w-full rounded-full bg-accent text-accent-foreground">Book Now</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
