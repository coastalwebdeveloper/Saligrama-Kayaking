const WHATSAPP = "https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience";

export function StickyBook() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 grid place-items-center h-12 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow"
    >
      Book Now on WhatsApp
    </a>
  );
}
