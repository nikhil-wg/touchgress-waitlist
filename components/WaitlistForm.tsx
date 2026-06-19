"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 px-6 py-4 rounded-pill animate-fade-up bg-[#d1fae5]">
        <span className="w-5 h-5 rounded-full bg-[#10b981] text-white grid place-items-center text-xs font-bold">
          ✓
        </span>
        <p className="font-display text-sm font-medium text-[#065f46]">
          You&apos;re on the list! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-0 p-1.5 bg-snow rounded-pill border border-silver/60 max-w-md w-full"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08)" }}
    >
      <input
        type="email"
        required
        id="waitlist-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-5 py-3 bg-transparent border-none outline-none font-display text-sm text-ink placeholder:text-ash min-w-0"
      />
      <button
        type="submit"
        id="waitlist-submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-6 py-3 bg-dark text-white font-display text-sm font-semibold rounded-pill cursor-pointer hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,.18)] transition-all disabled:opacity-70 disabled:cursor-wait whitespace-nowrap"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Joining...
          </>
        ) : (
          <>
            Join Waitlist
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
          </>
        )}
      </button>
    </form>
  );
}
