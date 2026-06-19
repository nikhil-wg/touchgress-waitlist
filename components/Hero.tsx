/* eslint-disable @next/next/no-img-element */
import WaitlistForm from "./WaitlistForm";

interface FloatingCard {
  src: string;
  alt: string;
  w: number;
  h: number;
  top: string;
  left?: string;
  right?: string;
  rot: string;
  delay: string;
}

const floatingCards: FloatingCard[] = [
  {
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=320&h=320&fit=crop&auto=format&q=80",
    alt: "Football match on turf",
    w: 160,
    h: 160,
    top: "12%",
    left: "5%",
    rot: "-8deg",
    delay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=280&h=280&fit=crop&auto=format&q=80",
    alt: "Cricket batsman in action",
    w: 140,
    h: 140,
    top: "8%",
    right: "10%",
    rot: "6deg",
    delay: "-2s",
  },
  {
    src: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=260&h=260&fit=crop&auto=format&q=80",
    alt: "Green sports turf",
    w: 130,
    h: 130,
    top: "38%",
    left: "2%",
    rot: "-4deg",
    delay: "-4s",
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=220&h=220&fit=crop&auto=format&q=80",
    alt: "Football players on field",
    w: 110,
    h: 110,
    top: "55%",
    right: "6%",
    rot: "10deg",
    delay: "-1s",
  },
  {
    src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=310&h=310&fit=crop&auto=format&q=80",
    alt: "Soccer player kicking ball",
    w: 155,
    h: 155,
    top: "20%",
    right: "18%",
    rot: "-6deg",
    delay: "-3s",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-10 pt-[120px] pb-20 overflow-hidden text-center z-[1]"
      id="hero"
    >
      {/* ── Video Background ─────────────────────── */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/60 to-cream/80" />
      </div>

      {/* ── Floating Image Cards ─────────────────── */}
      {floatingCards.map((card, i) => (
        <div
          key={i}
          className="float-card-hide absolute rounded-card overflow-hidden animate-float"
          style={
            {
              width: card.w,
              height: card.h,
              top: card.top,
              left: card.left,
              right: card.right,
              "--card-rot": card.rot,
              animationDelay: card.delay,
              transform: `rotate(${card.rot})`,
              boxShadow: "0 20px 60px rgba(0,0,0,.15)",
            } as React.CSSProperties
          }
        >
          <img
            src={card.src}
            alt={card.alt}
            className="block w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}

      {/* ── Heading ──────────────────────────────── */}
      <h1
        className="font-display font-medium leading-[1.04] tracking-[-0.02em] text-ink max-w-[700px] animate-fade-up text-[clamp(42px,7vw,72px)]"
        style={{ animationDelay: "0.1s" }}
      >
        Book your turf. Play your game.
      </h1>

      {/* ── Subtitle ─────────────────────────────── */}
      <p
        className="font-serif text-[17px] leading-relaxed text-steel max-w-[460px] mt-5 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        Find and book premium sports turfs for football and cricket near you.
        Join thousands of young athletes already on the waitlist.
      </p>

      {/* ── Waitlist CTA ─────────────────────────── */}
      <div
        className="mt-9 w-full flex justify-center animate-fade-up"
        style={{ animationDelay: "0.3s" }}
        id="waitlist"
      >
        <WaitlistForm />
      </div>


    </section>
  );
}
