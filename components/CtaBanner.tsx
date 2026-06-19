export default function CtaBanner() {
  return (
    <div
      className="relative mx-5 md:mx-10 mb-20 rounded-card bg-dark overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 z-[1]"
      style={{ padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)" }}
    >
      {/* Ambient gradient orbs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[100px] left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.03) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[1] text-center md:text-left">
        <p className="font-code text-[11px] font-semibold tracking-[.14em] uppercase text-white/50 mb-3">
          Ready to play?
        </p>
        <h2 className="font-display font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-[460px] text-[clamp(28px,4vw,42px)]">
          Never miss a game again
        </h2>
        <p className="font-serif text-[16px] leading-relaxed text-white/55 max-w-[380px] mt-3">
          Join the Touchgress waitlist and be the first to book premium turfs in
          your city.
        </p>
      </div>

      {/* Actions */}
      <div className="relative z-[1] flex flex-col sm:flex-row gap-3 shrink-0">
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center gap-2 px-7 py-[14px] bg-snow text-dark font-display text-sm font-semibold rounded-pill no-underline hover:-translate-y-0.5 transition-all"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,.15)" }}
          id="cta-banner-waitlist"
        >
          Join the Waitlist
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-7 py-[14px] bg-transparent border-[1.5px] border-white/20 text-white/80 font-display text-sm font-medium rounded-pill no-underline hover:border-white/50 hover:text-white hover:bg-white/[.06] transition-all"
          id="cta-banner-learn"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
