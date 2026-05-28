import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import {
  Play,
  Star,
  Users,
  Eye,
  Search,
  Sparkles,
  Heart,
  ExternalLink,
  Instagram,
} from "lucide-react";

import hero from "@/assets/hero-kayak.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";

// Thumbnail images used as card previews
import thumb1 from "@/assets/kayak-adventure-7.webp";
import thumb2 from "@/assets/kayak-adventure-4.webp";
import thumb3 from "@/assets/kayak-adventure-17.webp";
import thumb4 from "@/assets/kayak-adventure-2.webp";
import thumb5 from "@/assets/kayak-adventure-6.webp";
import thumb6 from "@/assets/kayak-adventure-14.webp";
import thumb7 from "@/assets/kayak-adventure-15.webp";

export const Route = createFileRoute("/video-gallery")({
  component: VideoGalleryPage,
  head: () => ({
    meta: [
      { title: "Video Gallery — Saligrama Kayaking Point" },
      {
        name: "description",
        content:
          "Watch amazing videos from celebrities and our audience who experienced kayaking at Saligrama, Udupi.",
      },
    ],
  }),
});

/* ─────────────────────────────────────────────────────────────
   Platform icon helpers
───────────────────────────────────────────────────────────── */
type Platform = "instagram" | "youtube" | "facebook" | "other";

function PlatformIcon({ platform, size = 16 }: { platform: Platform; size?: number }) {
  if (platform === "instagram") {
    return <Instagram width={size} height={size} />;
  }
  if (platform === "youtube") {
    // YouTube SVG path (lucide doesn't include it, inline it)
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c .8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.8 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.4 2.7-5.4 2.8z" />
      </svg>
    );
  }
  // fallback
  return <ExternalLink width={size} height={size} />;
}

function platformLabel(platform: Platform) {
  if (platform === "instagram") return "Instagram";
  if (platform === "youtube") return "YouTube";
  if (platform === "facebook") return "Facebook";
  return "Watch";
}

function platformColor(platform: Platform): { bg: string; text: string; glow: string } {
  if (platform === "instagram")
    return {
      bg: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
      text: "#fff",
      glow: "rgba(253,29,29,0.45)",
    };
  if (platform === "youtube")
    return {
      bg: "linear-gradient(135deg, #ff0000, #cc0000)",
      text: "#fff",
      glow: "rgba(255,0,0,0.40)",
    };
  return {
    bg: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
    text: "#fff",
    glow: "rgba(15,76,92,0.40)",
  };
}

/* ─────────────────────────────────────────────────────────────
   Video Card — opens external platform link on click
───────────────────────────────────────────────────────────── */
function VideoCard({
  url,
  platform,
  title,
  category,
  duration = "2:45",
  views = "12.5K",
  thumbnail,
}: {
  url: string;
  platform: Platform;
  title: string;
  category: string;
  duration?: string;
  views?: string;
  thumbnail: string;
}) {
  const isCeleb = category === "celebrity";
  const pc = platformColor(platform);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Watch "${title}" on ${platformLabel(platform)}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden h-full no-underline"
      style={{
        background: "var(--color-card)",
        boxShadow:
          "0 4px 24px -6px color-mix(in oklab, var(--primary) 18%, transparent), 0 0 0 1px color-mix(in oklab, var(--border) 80%, transparent)",
        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s cubic-bezier(0.23,1,0.32,1)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          `0 22px 60px -12px color-mix(in oklab, var(--primary) 32%, transparent), 0 8px 32px -8px color-mix(in oklab, var(--accent) 22%, transparent), 0 0 0 1.5px color-mix(in oklab, var(--primary) 30%, transparent)`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-7px) scale(1.015)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px -6px color-mix(in oklab, var(--primary) 18%, transparent), 0 0 0 1px color-mix(in oklab, var(--border) 80%, transparent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
      }}
    >
      {/* ── Thumbnail ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "9/16", background: "var(--color-muted)", flexShrink: 0 }}
      >
        {/* Thumbnail image */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)" }}
          loading="lazy"
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        />

        {/* Cinematic bottom gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.24) 48%, rgba(0,0,0,0.06) 100%)",
          }}
        />

        {/* Hover darkening */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(0,0,0,0.20)",
            transition: "opacity 0.35s ease",
          }}
        />

        {/* ── Centred play / external link button ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-110"
          >
            {/* Pulsing circle */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 62,
                height: 62,
                borderRadius: "50%",
                background: pc.bg,
                boxShadow: `0 6px 28px -4px ${pc.glow}`,
                animation: "vg-pulse 2.6s ease-in-out infinite",
              }}
            >
              {/* Ripple ring */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  border: `2px solid ${pc.glow}`,
                  animation: "vg-ring 2.6s ease-in-out infinite",
                }}
              />
              <Play className="w-5 h-5 ml-0.5" fill="white" color="white" />
            </div>

            {/* "Watch on Platform" label — appears on hover */}
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100"
              style={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transition: "opacity 0.28s ease, transform 0.28s ease",
                transform: "translateY(4px)",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <PlatformIcon platform={platform} size={13} />
              <span>Watch on {platformLabel(platform)}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </div>
          </div>
        </div>

        {/* ── Duration badge (bottom-right) ── */}
        <div
          className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-md"
          style={{
            background: "rgba(0,0,0,0.58)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          {duration}
        </div>

        {/* ── Category badge (top-left) ── */}
        <div className="absolute top-3 left-3">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: isCeleb
                ? "linear-gradient(135deg, color-mix(in oklab, var(--accent) 90%, black), color-mix(in oklab, var(--accent) 60%, black))"
                : "linear-gradient(135deg, color-mix(in oklab, var(--secondary) 80%, black), color-mix(in oklab, var(--primary) 60%, black))",
              color: "#fff",
              boxShadow: isCeleb
                ? "0 2px 12px color-mix(in oklab, var(--accent) 38%, transparent)"
                : "0 2px 12px color-mix(in oklab, var(--secondary) 32%, transparent)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {isCeleb ? <Star className="w-3 h-3" fill="currentColor" /> : <Users className="w-3 h-3" />}
            <span>{isCeleb ? "Celebrity" : "Community"}</span>
          </div>
        </div>

        {/* ── Platform badge (top-right) ── */}
        <div className="absolute top-3 right-3">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full text-white"
            style={{
              background: pc.bg,
              boxShadow: `0 2px 10px ${pc.glow}`,
            }}
          >
            <PlatformIcon platform={platform} size={14} />
          </div>
        </div>
      </div>

      {/* ── Card Info ── */}
      <div className="flex flex-col flex-1 px-4 pt-3.5 pb-4">
        <h3
          className="font-display font-semibold leading-snug line-clamp-2 mb-2.5 flex-1"
          style={{
            fontSize: "0.875rem",
            color: "var(--color-foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        <div
          className="flex items-center justify-between mt-auto"
          style={{ color: "var(--color-muted-foreground)", fontSize: "0.75rem" }}
        >
          <div className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>{views} views</span>
          </div>

          {/* Platform label pill */}
          <span
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{
              background: platform === "instagram"
                ? "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)"
                : platform === "youtube"
                ? "linear-gradient(135deg, #ff0000, #cc0000)"
                : "var(--color-muted)",
              color: "#fff",
            }}
          >
            <PlatformIcon platform={platform} size={11} />
            {platformLabel(platform)}
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section Header
───────────────────────────────────────────────────────────── */
function SectionHeader({
  icon,
  title,
  subtitle,
  accentColor,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentColor: "orange" | "teal";
}) {
  const isOrange = accentColor === "orange";
  return (
    <div className="reveal flex items-start gap-4 mb-10">
      <div
        className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: isOrange
            ? "linear-gradient(135deg, color-mix(in oklab, var(--accent) 85%, black), color-mix(in oklab, var(--accent) 60%, black))"
            : "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
          boxShadow: isOrange
            ? "0 6px 24px -4px color-mix(in oklab, var(--accent) 45%, transparent)"
            : "0 6px 24px -4px color-mix(in oklab, var(--primary) 40%, transparent)",
          color: "#fff",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          className="h-0.5 w-8 rounded-full mb-2"
          style={{
            background: isOrange ? "var(--color-accent)" : "var(--color-secondary)",
          }}
        />
        <h2
          className="font-display font-bold"
          style={{ fontSize: "1.5rem", color: "var(--color-foreground)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
function VideoGalleryPage() {
  useReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // ── Real Instagram Reel links ──
  const videos = [
    // Celebrity Videos
    {
      id: "celebrity1",
      title: "Celebrity Mangrove Adventure",
      category: "celebrity",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/reel/DXvorYQR9is/?igsh=OWEyZjN2NWV0aWVz",
      duration: "4:32",
      views: "2.1M",
      thumbnail: thumb1,
    },
    {
      id: "celebrity2",
      title: "Famous Vlogger Kayaking Experience",
      category: "celebrity",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/reel/DYPkk_Lgaep/?igsh=c2hqZ25tMnNmbG1o",
      duration: "3:18",
      views: "890K",
      thumbnail: thumb2,
    },
    {
      id: "celebrity3",
      title: "Bollywood Star Nature Escape",
      category: "celebrity",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/reel/DYg_951ywNM/?igsh=MTJ0NzI2bHJtYWw4dA==",
      duration: "2:45",
      views: "1.5M",
      thumbnail: thumb3,
    },

    // Community Videos
    {
      id: "audience1",
      title: "Family Weekend Adventure",
      category: "audience",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/reel/DW-c7Z_gfXM/?igsh=MWZxZGVnZ29qdnQydg==",
      duration: "2:28",
      views: "156K",
      thumbnail: thumb4,
    },
    {
      id: "audience2",
      title: "Pedalize Challenge Experience",
      category: "audience",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/reel/DTB8KRXDiOa/?igsh=NWVlOWdjd3dwcXZp",
      duration: "5:12",
      views: "324K",
      thumbnail: thumb5,
    },
    {
      id: "audience3",
      title: "Friends Group Kayaking",
      category: "audience",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/reel/DQW_v8RklDf/?igsh=b2F1bndhbHl3enh4",
      duration: "3:56",
      views: "89K",
      thumbnail: thumb6,
    },
    {
      id: "audience4",
      title: "Solo Traveler Journey",
      category: "audience",
      platform: "instagram" as Platform,
      url: "https://www.instagram.com/saligrama_kayaking/",
      duration: "4:03",
      views: "67K",
      thumbnail: thumb7,
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesFilter = activeFilter === "all" || video.category === activeFilter;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const celebrityVideos = videos.filter((v) => v.category === "celebrity");
  const communityVideos = videos.filter((v) => v.category === "audience");

  const filterTabs = [
    { id: "all", label: "All Videos", count: videos.length },
    { id: "celebrity", label: "Celebrities", count: celebrityVideos.length },
    { id: "audience", label: "Community", count: communityVideos.length },
  ];

  return (
    <>
      {/* ── Global keyframes for this page ── */}
      <style>{`
        @keyframes vg-pulse {
          0%, 100% { box-shadow: 0 6px 28px -4px rgba(0,0,0,0.35); }
          50%       { box-shadow: 0 10px 40px -4px rgba(0,0,0,0.22); }
        }
        @keyframes vg-ring {
          0%   { transform: scale(1);    opacity: 0.75; }
          70%  { transform: scale(1.6);  opacity: 0; }
          100% { transform: scale(1.6);  opacity: 0; }
        }
        @keyframes vg-hero-fade {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vg-water-drift {
          0%, 100% { transform: scale(1.05) translateY(0);  opacity: 0.22; }
          50%       { transform: scale(1.11) translateY(-9px); opacity: 0.13; }
        }
        @keyframes vg-card-appear {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vg-hero-chip   { animation: vg-hero-fade 0.7s ease-out 0.10s both; }
        .vg-hero-h1     { animation: vg-hero-fade 0.7s ease-out 0.28s both; }
        .vg-hero-sub    { animation: vg-hero-fade 0.7s ease-out 0.46s both; }
        .vg-hero-search { animation: vg-hero-fade 0.7s ease-out 0.62s both; }
        .vg-water-bg {
          animation: vg-water-drift 8s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .vg-card-appear {
          animation: vg-card-appear 0.55s ease-out both;
        }
        .vg-filter-tab {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 1.125rem;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          border: none;
          background: transparent;
          transition: color 0.22s, background 0.22s, box-shadow 0.22s, transform 0.15s;
          white-space: nowrap;
        }
        .vg-filter-tab:hover:not(.vg-active) {
          background: color-mix(in oklab, var(--color-primary) 9%, transparent);
          color: var(--color-primary);
          transform: translateY(-1px);
        }
        .vg-filter-tab.vg-active {
          background: linear-gradient(135deg, var(--color-primary), color-mix(in oklab, var(--color-primary) 65%, var(--color-secondary)));
          color: #fff;
          box-shadow: 0 4px 18px -4px color-mix(in oklab, var(--color-primary) 50%, transparent);
        }
        /* ── Horizontally scrollable pill row (mobile) ── */
        .vg-filter-scroll {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          overflow-x: auto;
          overflow-y: visible;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          flex: 1;
          min-width: 0;
          padding-bottom: 2px; /* keeps active shadow visible */
        }
        .vg-filter-scroll::-webkit-scrollbar { display: none; }
        /* Fade hint on the right edge so user knows it scrolls */
        .vg-filter-bar-wrap {
          position: relative;
        }
        @media (max-width: 640px) {
          .vg-filter-tab {
            padding: 0.375rem 0.75rem;
            font-size: 0.72rem;
          }
          .vg-filter-bar-inner {
            /* Keep single row on mobile — pills scroll, count stays right */
            padding: 0.45rem 0.875rem !important;
            gap: 0.375rem;
          }
          .vg-filter-results {
            font-size: 0.72rem;
          }
        }
        .vg-search-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border-radius: 9999px;
          border: 1.5px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          color: #fff;
          font-size: 0.9375rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
          font-family: var(--font-body);
        }
        .vg-search-input::placeholder { color: rgba(255,255,255,0.52); }
        .vg-search-input:focus {
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-secondary) 22%, transparent),
                      0 8px 32px -8px color-mix(in oklab, var(--color-primary) 30%, transparent);
          background: rgba(255,255,255,0.16);
        }
        .vg-cta-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.875rem 2.25rem;
          border-radius: 9999px;
          font-weight: 700; font-size: 0.9375rem;
          letter-spacing: 0.02em;
          border: none; cursor: pointer;
          background: linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 72%, #000));
          color: #fff;
          box-shadow: 0 6px 28px -6px color-mix(in oklab, var(--color-accent) 55%, transparent);
          transition: transform 0.25s, box-shadow 0.25s;
          text-decoration: none;
        }
        .vg-cta-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 42px -8px color-mix(in oklab, var(--color-accent) 65%, transparent);
        }
        .vg-cta-btn-secondary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.875rem 2.25rem;
          border-radius: 9999px;
          font-weight: 600; font-size: 0.9375rem;
          letter-spacing: 0.02em;
          cursor: pointer;
          background: rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.90);
          border: 1.5px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(12px);
          transition: transform 0.25s, background 0.25s, border-color 0.25s;
          text-decoration: none;
        }
        .vg-cta-btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.45);
        }
      `}</style>

      <main style={{ background: "var(--color-background)" }}>
        <Nav />

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden text-white"
          style={{
            paddingTop: "8.5rem",
            paddingBottom: "5.5rem",
            background:
              "linear-gradient(160deg, var(--color-primary) 0%, color-mix(in oklab, var(--primary) 60%, var(--secondary)) 55%, color-mix(in oklab, var(--primary) 82%, #000) 100%)",
          }}
        >
          {/* Animated water BG */}
          <div
            className="vg-water-bg absolute inset-0"
            style={{
              backgroundImage: `url(${hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          {/* Deep cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(15,76,92,0.88) 0%, rgba(15,76,92,0.72) 45%, rgba(10,50,62,0.93) 100%)",
            }}
          />
          {/* Glow blob */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "15%", left: "50%", transform: "translateX(-50%)",
              width: "70vw", maxWidth: 700, height: 340, borderRadius: "50%",
              background: "radial-gradient(ellipse, color-mix(in oklab, var(--secondary) 22%, transparent) 0%, transparent 70%)",
              filter: "blur(38px)",
            }}
          />

          <div
            className="relative mx-auto text-center"
            style={{ maxWidth: "56rem", padding: "0 1.25rem" }}
          >
            <span
              className="vg-hero-chip inline-block text-xs uppercase font-bold"
              style={{
                letterSpacing: "0.22em",
                color: "var(--color-secondary)",
                textShadow: "0 0 20px color-mix(in oklab, var(--secondary) 60%, transparent)",
              }}
            >
              Video Gallery
            </span>

            <h1
              className="vg-hero-h1 font-display font-bold text-balance mt-3"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                textShadow: "0 4px 32px rgba(0,0,0,0.25)",
              }}
            >
              Stories in Motion
            </h1>

            <p
              className="vg-hero-sub mt-5 mx-auto leading-relaxed"
              style={{
                maxWidth: "38rem",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Discover kayaking adventures through the eyes of celebrities and our
              vibrant community — raw, real, cinematic.
            </p>

            {/* Search Bar */}
            <div className="vg-hero-search mt-9 mx-auto" style={{ maxWidth: "28rem", position: "relative" }}>
              <Search
                className="absolute"
                style={{
                  left: "1.1rem", top: "50%", transform: "translateY(-50%)",
                  width: 18, height: 18,
                  color: "rgba(255,255,255,0.52)", pointerEvents: "none",
                }}
              />
              <input
                id="video-search"
                type="text"
                placeholder="Search videos…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="vg-search-input"
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FILTER BAR — sticky glassmorphism
        ══════════════════════════════════════════════════════ */}
        <section
          className="sticky z-40"
          style={{
            top: 64,
            background: "color-mix(in oklab, var(--color-background) 80%, transparent)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid color-mix(in oklab, var(--color-border) 70%, transparent)",
            boxShadow: "0 4px 24px -8px color-mix(in oklab, var(--color-primary) 12%, transparent)",
          }}
        >
          <div
            className="mx-auto vg-filter-bar-inner"
            style={{
              maxWidth: "80rem",
              padding: "0.6rem 1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            {/* Filter Pills — horizontally scrollable on mobile, no wrapping */}
            <div className="vg-filter-scroll">
              {filterTabs.map(({ id, label, count }) => (
                <button
                  key={id}
                  id={`filter-${id}`}
                  onClick={() => setActiveFilter(id)}
                  className={`vg-filter-tab${activeFilter === id ? " vg-active" : ""}`}
                  style={{
                    color: activeFilter === id ? "#fff" : "var(--color-muted-foreground)",
                    flexShrink: 0,
                  }}
                >
                  {label}
                  <span
                    className="inline-flex items-center justify-center rounded-full font-bold"
                    style={{
                      width: 20,
                      height: 20,
                      fontSize: "0.675rem",
                      background: activeFilter === id
                        ? "rgba(255,255,255,0.26)"
                        : "var(--color-muted)",
                      color: activeFilter === id ? "#fff" : "var(--color-muted-foreground)",
                    }}
                  >
                    {count}
                  </span>
                </button>
              ))}
            </div>

            {/* Results count — always visible, shrinks on mobile */}
            <div
              className="vg-filter-results shrink-0 font-medium"
              style={{ color: "var(--color-muted-foreground)", fontSize: "0.8125rem", whiteSpace: "nowrap" }}
            >
              <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                {filteredVideos.length}
              </span>{" "}
              video{filteredVideos.length !== 1 ? "s" : ""}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            VIDEOS GRID
        ══════════════════════════════════════════════════════ */}
        <section style={{ padding: "4.5rem 0 5rem" }}>
          <div className="mx-auto" style={{ maxWidth: "80rem", padding: "0 1.25rem" }}>
            {activeFilter === "all" ? (
              <>
                {/* ── Celebrity Experiences ── */}
                <div
                  className="rounded-3xl mb-14 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--color-accent) 5%, var(--color-background)), color-mix(in oklab, var(--color-accent) 3%, var(--color-highlight)))",
                    padding: "2.5rem 2rem",
                  }}
                >
                  <SectionHeader
                    icon={<Star className="w-5 h-5" fill="currentColor" />}
                    title="Celebrity Experiences"
                    subtitle="Click any card to watch the full video on Instagram or YouTube"
                    accentColor="orange"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
                    {celebrityVideos.map((video, i) => (
                      <div
                        key={video.id}
                        className="reveal h-full"
                        style={{ transitionDelay: `${i * 90}ms` }}
                      >
                        <VideoCard
                          url={video.url}
                          platform={video.platform}
                          title={video.title}
                          category={video.category}
                          duration={video.duration}
                          views={video.views}
                          thumbnail={video.thumbnail}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Community Stories ── */}
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--color-secondary) 6%, var(--color-background)), color-mix(in oklab, var(--color-secondary) 3%, var(--color-highlight)))",
                    padding: "2.5rem 2rem",
                  }}
                >
                  <SectionHeader
                    icon={<Heart className="w-5 h-5" fill="currentColor" />}
                    title="Community Stories"
                    subtitle="Click any card to watch the full story on Instagram or YouTube"
                    accentColor="teal"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
                    {communityVideos.map((video, i) => (
                      <div
                        key={video.id}
                        className="reveal h-full"
                        style={{ transitionDelay: `${i * 90}ms` }}
                      >
                        <VideoCard
                          url={video.url}
                          platform={video.platform}
                          title={video.title}
                          category={video.category}
                          duration={video.duration}
                          views={video.views}
                          thumbnail={video.thumbnail}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* ── Filtered Results (CSS animation — no IO needed) ── */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
                {filteredVideos.map((video, i) => (
                  <div
                    key={video.id}
                    className="vg-card-appear h-full"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <VideoCard
                      url={video.url}
                      platform={video.platform}
                      title={video.title}
                      category={video.category}
                      duration={video.duration}
                      views={video.views}
                      thumbnail={video.thumbnail}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ── No Results ── */}
            {filteredVideos.length === 0 && (
              <div className="text-center" style={{ padding: "5rem 0" }}>
                <div
                  className="mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{
                    width: 96, height: 96,
                    background: "linear-gradient(135deg, var(--color-muted), color-mix(in oklab, var(--color-primary) 8%, var(--color-muted)))",
                  }}
                >
                  <Play className="w-12 h-12" style={{ color: "var(--color-muted-foreground)" }} />
                </div>
                <h3
                  className="font-display font-bold mb-2"
                  style={{ fontSize: "1.5rem", color: "var(--color-foreground)" }}
                >
                  No videos found
                </h3>
                <p style={{ color: "var(--color-muted-foreground)" }}>
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ padding: "6rem 0" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${ctaSunset})`,
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(10,50,62,0.87) 0%, rgba(15,76,92,0.78) 50%, rgba(8,38,50,0.93) 100%)",
            }}
          />
          {/* Orange glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: "60vw", height: 280, borderRadius: "50% 50% 0 0",
              background: "radial-gradient(ellipse, color-mix(in oklab, var(--accent) 18%, transparent) 0%, transparent 70%)",
              filter: "blur(48px)",
            }}
          />

          <div className="relative mx-auto" style={{ maxWidth: "52rem", padding: "0 1.25rem" }}>
            <div
              className="reveal rounded-3xl text-center"
              style={{
                padding: "3.5rem 2.5rem",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 32px 80px -16px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="mx-auto mb-6 flex items-center justify-center rounded-2xl"
                style={{
                  width: 64, height: 64,
                  background: "linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 70%, var(--color-primary)))",
                  boxShadow: "0 8px 32px -6px color-mix(in oklab, var(--color-accent) 60%, transparent)",
                }}
              >
                <Sparkles className="w-7 h-7 text-white" />
              </div>

              <h2
                className="font-display font-bold text-white text-balance"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}
              >
                Ready to Create Your Story?
              </h2>

              <p
                className="mt-4 mx-auto leading-relaxed"
                style={{ maxWidth: "34rem", fontSize: "1.0625rem", color: "rgba(255,255,255,0.80)" }}
              >
                Join thousands of adventurers and create your own unforgettable kayaking
                experience in the pristine backwaters of Saligrama.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  id="cta-book-adventure"
                  href="https://wa.me/917259277799?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kayaking%20experience"
                  target="_blank"
                  rel="noreferrer"
                  className="vg-cta-btn-primary"
                >
                  <Play className="w-4 h-4" fill="currentColor" />
                  Book Your Adventure
                </a>
                <Link to="/gallery" className="vg-cta-btn-secondary">
                  View Photo Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <StickyBook />
      </main>
    </>
  );
}